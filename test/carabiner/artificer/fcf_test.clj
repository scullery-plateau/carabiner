(ns carabiner.artificer.fcf-test
  (:require [clojure.test :refer :all]
            [clojure.xml :as xml]
            [clojure.zip :as zip]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.edn :as edn]
            [clojure.set :as set]
            [clojure.pprint :as pp])
  (:import (clojure.lang ExceptionInfo)))


(defn attr [key]
  (keyword (str "&" (name key))))

(defn to-primitive [^String value]
  (let [lower (str/lower-case value)]
    (if (#{"true" "false"} lower)
      (Boolean. value)
      (try
        (Long/parseLong value)
        (catch NumberFormatException _
          (try
            (Double/parseDouble value)
            (catch NumberFormatException _
              value
              )))))))

(defn json-compress [nodelist attrs]
  (reduce
    (fn [out [key value]]
      (if (contains? out key)
        (if (vector? (get out key))
          (update out key conj value)
          (update out key vector value))
        (assoc out key value)))
    attrs
    (map
      (fn [{:keys [tag attrs content]}]
        (let [attrs (reduce-kv #(assoc %1 (attr %2) (to-primitive %3)) {} (or attrs {}))
              content (or content [])
              content (if (every? string? content)
                        (to-primitive (str/join content))
                        (if (every? map? content)
                          (json-compress content attrs)
                          (json-compress (map #(if (map? %) % {:_content %}) content) attrs)))]
          [tag (if (and (or (vector? content)
                            (string? content))
                        (empty? content))
                 "" content)]))
      nodelist)))

(deftest determine-data
  (let [xml (-> "resources/data/allData.xml"
                (io/file)
                (xml/parse)
                (zip/xml-zip))
        compressed (json-compress xml {})
        w (io/writer "resources/data/compressed.edn")]
    (pp/pprint compressed w)
    (.flush w)
    (.close w)))

(defn type-keyword [value]
  {:type (if (nil? value)
           :null
           (keyword (str/lower-case (.getSimpleName (type value)))))})

(defn dominant-type [type-a type-b]
  (let [types (set/difference (set [type-a type-b]) #{:null})]
    (if (< 1 (count types)) :string (first types))))

(defn merge-types [{opt-a :optional type-a :type col-a :collection} {opt-b :optional type-b :type col-b :collection}]
  (merge {:type (dominant-type type-a type-b)}
         (if (or opt-a opt-b (= type-a :null) (= type-b :null)) {:optional true} {})
         (if (or col-a col-b) {:collection true} {})))

(defn make-optional [schema]
  (assoc schema :optional true))

(defn merge-pair [deep-merge a b]
  (cond
    (and (map? (:type a)) (map? (:type b))) (deep-merge a b)
    (and (not (map? (:type a))) (not (map? (:type b)))) (merge-types a b)
    :else
    (throw (ExceptionInfo. "" {:a a :b b}))))

(defn merge-schemas [{opt-a :optional col-a :collection type-a :type} {opt-b :optional col-b :collection type-b :type}]
  (let [keys-a (set (keys type-a))
        keys-b (set (keys type-b))
        req-keys (set/intersection keys-a keys-b)
        optional-a (set/difference keys-a keys-b)
        optional-b (set/difference keys-b keys-a)
        out-type (reduce #(assoc %1 %2 (merge-pair merge-schemas (get type-a %2) (get type-b %2))) {} req-keys)
        out-type (reduce #(assoc %1 %2 (make-optional (get type-a %2))) out-type optional-a)
        out-type (reduce #(assoc %1 %2 (make-optional (get type-b %2))) out-type optional-b)]
    (merge {:type out-type}
           (if (or opt-a opt-b) {:optional true} {})
           (if (or col-a col-b) {:collection true} {}))))

(defn value-to-schema [value]
  (cond
    (map? value) {:type (reduce-kv #(assoc %1 %2 (value-to-schema %3)) {} value)}
    (vector? value) (let [values (filterv not-empty (map #(if (string? %) (str/trim %) %) value))
                          [merge-fn per-value-fn] (cond
                                                    (every? map? values)
                                                    [merge-schemas value-to-schema]
                                                    (every? #(not (map? %)) values)
                                                    [merge-types type-keyword]
                                                    :else
                                                    (throw
                                                      (ExceptionInfo.
                                                        ""
                                                        {:non-map (filter #(not (map? %)) value)
                                                         :map (filter map? value)})))]

                      (assoc
                        (reduce
                          merge-fn
                          (per-value-fn (first values))
                          (map per-value-fn (rest values)))
                        :collection true))
    :else (type-keyword value)))

(defn gleen-schema [data]
  (try
    (reduce-kv
      #(assoc %1 %2 (value-to-schema %3))
      {} data)
    (catch ExceptionInfo e
      (pp/pprint (.getData e))
      (throw e))))

(deftest test-gleen-schema
  (let [edn (-> "resources/data/compressed.edn"
                (slurp)
                (edn/read-string))
        schema (dissoc (gleen-schema edn) nil)
        w (io/writer "resources/data/schema.edn")]
    (pp/pprint schema w)
    (.flush w)
    (.close w)))