(ns carabiner.artificer5e.core
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [clojure.pprint :as pp]))

(defn merge-primitive [primitives]
  (let [prim-set (set primitives)]
    (cond
      (and (contains? prim-set "boolean") (contains? prim-set "number")) "string"
      (contains? prim-set "string") "string"
      (= 1 (count prim-set)) (first prim-set))))

(defn parse-primitive [value]
  (if-let [parsed (try (read-string value)
                       (catch Throwable _ nil))]
    (cond
      (boolean? parsed) "boolean"
      (number? parsed) "number"
      :else "text")
    "text"))

(defn glean-type [node]
  (cond
    (string? node) (parse-primitive node)
    (map? node) (:tag node)
    :else (throw (IllegalArgumentException.))))

(defn attr-schema [attr-map]
  (if (empty? attr-map)
    {}
    (reduce-kv
      #(assoc %1
         (->> %2 (name) (str "&") (keyword))
         [(parse-primitive %3) false false])
      {} attr-map)))

(defn get-superior-type [type-a type-b]
  (let [types (remove nil? (set [type-a type-b]))]
    (if (= 1 (count types))
      (first types)
      (let [keywords (filterv keyword? types)]
        (cond
          (< 1 (count keywords)) (throw (IllegalArgumentException. (str "type conflict: " (pr-str keywords))))
          (= 1 (count keywords)) (first types)
          :else (merge-primitive (filterv string? types)))))))

(defn merge-types [[type-a is-a-optional? is-a-multiple?] [type-b is-b-optional? is-b-multiple?]]
  [(get-superior-type type-a type-b)
   (or is-a-optional? is-b-optional?)
   (or is-a-multiple? is-b-multiple?)])

(defn merge-properties [a b]
  (let [keys-a (keys a)
        keys-b (keys b)
        a-not-b (set/difference (set keys-a) (set keys-b))
        b-not-a (set/difference (set keys-b) (set keys-a))
        a-and-b (set/intersection (set keys-a) (set keys-b))]
    (merge
      (reduce-kv #(assoc %1 %2 (update %3 1 (constantly true))) {} (select-keys a a-not-b))
      (reduce-kv #(assoc %1 %2 (update %3 1 (constantly true))) {} (select-keys b b-not-a))
      (reduce #(assoc %1 %2 (merge-types (get a %2 {}) (get b %2 {}))) {} a-and-b))))

(defn merge-two-schemas [a b]
  (let [keys-a (keys a)
        keys-b (keys b)
        a-not-b (set/difference (set keys-a) (set keys-b))
        b-not-a (set/difference (set keys-b) (set keys-a))
        a-and-b (set/intersection (set keys-a) (set keys-b))]
    (merge
      (select-keys a a-not-b)
      (select-keys b b-not-a)
      (reduce
        #(assoc %1 %2 (merge-properties (get a %2 {}) (get b %2 {})))
        {} a-and-b))))

(defn merge-schemas [schemas]
  (reduce merge-two-schemas (first schemas) (rest schemas)))

(defn type-as-keyword [obj]
  (-> obj (type) (.getSimpleName) (str/lower-case) (keyword)))

(defn path-to-keyword [path & tags]
  (keyword (str/join "." (apply conj path (map name tags)))))

(defn detect-flat-schema [path {:keys [tag attrs content]}]
  (let [schema (attr-schema attrs)
        content (filterv
                  (fn [c]
                    (or
                      (map? c)
                      (and
                        (string? c)
                        (not (empty? (str/trim c))))))
                  content)
        types (map glean-type content)
        {types :keyword primitives :string} (group-by type-as-keyword types)
        prim-type (assoc {} ::CONTENT [(merge-primitive primitives) (> 1 (count primitives)) (< 1 (count primitives))])
        types (reduce-kv #(assoc %1 %2 [(path-to-keyword path tag %2) false (< 1 %3)]) {} (frequencies types))
        schema  (merge types schema prim-type)]
    (assoc
      (merge-schemas (map (partial detect-flat-schema (conj path (name tag))) (filter map? content)))
      (path-to-keyword path tag)
      (if (empty? schema) "EMPTY" schema))))

(defn revise-schema [schema]
  (let [check-fn (fn [[k v]]
                   (= #{::CONTENT} (set (keys v))))
        [primitives objects] (map #(into {} (% check-fn schema)) [filter remove])
        primitives (reduce-kv #(assoc %1 %2 (first (get %3 ::CONTENT))) {} primitives)
        objects (reduce
                     (fn [out key]
                       (let [obj (get out key)]
                         (assoc
                           out
                           key
                           (reduce
                             (fn [props name]
                               (let [prop-type (first (get props name))]
                                 (cond
                                   (and (= name ::CONTENT) (nil? prop-type)) (dissoc props name)
                                   (contains? primitives prop-type) (update-in props [name 0] (constantly (get primitives prop-type)))
                                   :else props
                                   )))
                             obj (keys obj)))))
                     objects (keys objects))
        objects (reduce-kv #(assoc %1 %2 (into (sorted-map) %3)) (sorted-map) objects)
        ]
    (pp/pprint (keys objects))
    objects
))

(defn detect-schema [tree]
  (revise-schema (detect-flat-schema [] tree)))