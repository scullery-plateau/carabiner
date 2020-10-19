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

(defn path-to-keyword [path & tags]
  (keyword (str/join "." (apply conj path (map name tags)))))

(defn attr-schema [path attr-map]
  (if (empty? attr-map)
    {}
    (reduce-kv
      (fn [{:keys [schema data]} k v]
        (let [key (->> k (name) (str "&") (keyword))]
          {:schema (assoc schema key [(parse-primitive v) false false])
           :data (assoc data (path-to-keyword path key) (sorted-set v))}))
      {:schema {} :data {}} attr-map)))

(defn get-superior-type [type-a type-b]
  (let [types (remove nil? (set [type-a type-b]))]
    (if (= 1 (count types))
      (first types)
      (let [keywords (filterv keyword? types)]
        (cond
          (< 1 (count keywords)) (throw (IllegalArgumentException. (str "type conflict: " (pr-str keywords))))
          (= 1 (count keywords)) (first types)
          :else (merge-primitive (filterv string? types)))))))

(defn build-map-merger [exclusive-fn intersect-default merge-fn]
  (fn [a b]
    (let [keys-a (keys a)
          keys-b (keys b)
          a-not-b (set/difference (set keys-a) (set keys-b))
          b-not-a (set/difference (set keys-b) (set keys-a))
          a-and-b (set/intersection (set keys-a) (set keys-b))]
      (merge
        (reduce-kv #(assoc %1 %2 (exclusive-fn %3)) {} (select-keys a a-not-b))
        (reduce-kv #(assoc %1 %2 (exclusive-fn %3)) {} (select-keys b b-not-a))
        (reduce #(assoc %1 %2 (merge-fn (get a %2 intersect-default) (get b %2 intersect-default))) {} a-and-b)))))

(defn merge-types [[type-a is-a-optional? is-a-multiple?] [type-b is-b-optional? is-b-multiple?]]
  [(get-superior-type type-a type-b)
   (or is-a-optional? is-b-optional?)
   (or is-a-multiple? is-b-multiple?)])

(def merge-properties (build-map-merger #(update % 1 (constantly true)) {} merge-types))

(def merge-two-schemas (build-map-merger identity {} merge-properties))

(defn merge-schemas [schemas]
  (reduce merge-two-schemas (first schemas) (rest schemas)))

(defn type-as-keyword [obj]
  (-> obj (type) (.getSimpleName) (str/lower-case) (keyword)))

(defn merge-data [data]
  (reduce (build-map-merger identity (sorted-set) set/union) (first data) (rest data)))

(defn detect-flat-schema [path {:keys [tag attrs content]}]
  (let [{:keys [schema data]} (attr-schema (conj path (name tag)) attrs)
        content (filterv
                  #(or (map? %)
                       (and (string? %)
                            (not (empty? (str/trim %)))))
                  content)
        string-content (into (sorted-set) (filterv string? content))
        types (map glean-type content)
        {types :keyword primitives :string} (group-by type-as-keyword types)
        prim-type (assoc {} ::CONTENT [(merge-primitive primitives) (> 1 (count primitives)) (< 1 (count primitives))])
        types (reduce-kv #(assoc %1 %2 [(path-to-keyword path tag %2) false (< 1 %3)]) {} (frequencies types))
        schema  (merge types schema prim-type)
        child-schemas (map (partial detect-flat-schema (conj path (name tag))) (filter map? content))
        [child-schema child-data] (map #(map % child-schemas) [:schema :data])]
    {:schema (assoc
               (merge-schemas child-schema)
               (path-to-keyword path tag)
               schema)
     :data (merge-data (conj child-data (assoc data (path-to-keyword path tag :CONTENT) string-content)))}))

(defn revise-schema [schema]
  (let [check-fn (fn [[_ v]]
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
                                   :else props)))

                             obj (keys obj)))))
                     objects (keys objects))
        objects (reduce-kv #(assoc %1 %2 (into (sorted-map) %3)) (sorted-map) objects)]
    objects))

(defn detect-enums [data]
  (into (sorted-map)
        (remove #(empty? (second %))
                (filterv #(>= 21 (count (second %)))
                         data))))

(defn apply-enums [schema enums]
  {:schema schema
   :enums enums})

(defn detect-schema [tree]
  (let [{:keys [schema data]} (detect-flat-schema [] tree)]
    (apply-enums (revise-schema schema) (detect-enums data))))