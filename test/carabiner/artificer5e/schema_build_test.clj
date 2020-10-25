(ns carabiner.artificer5e.schema-build-test
  (:require [clojure.test :refer :all]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [carabiner.common.xml :as x]
            [clojure.string :as str]
            [clojure.set :as set])
  (:import (clojure.lang ExceptionInfo)))

(def folder (io/file "resources/data"))

(def all-data-file (io/file folder "allData.xml"))

(deftest read-charsheet
  (let [data (x/from-xml (slurp (io/file folder "charsheet/Gavin_Druid4.xml")))
        data-map (into {} (mapv #(if (= 1 (count %)) (conj % nil) %) (rest data)))]
    (println (first data))
    (println (second data))
    (println data-map)
    (spit
     (io/file folder "charsheet.edn")
     (with-out-str (pp/pprint data-map)))))

(deftest read-all-schema
  (spit
    (io/file folder "allData.edn")
    (with-out-str (pp/pprint (x/from-xml (slurp all-data-file))))))

(defn upsert [empty m k v]
  (if (contains? m k)
    (update m k conj v)
    (assoc m k (conj empty v))))

(defn upsert-set [m k v]
  (upsert #{} m k v))

(defn upsert-vec [m k v]
  (upsert [] m k v))

(defn build-key [k]
  (str/join "/" (mapv name k)))

(defn append-attrs [key attrs structure values]
  (if (empty? attrs)
    [structure values]
    (let [attr-key (conj key :_attr)]
      (vector
        (upsert-set structure (build-key attr-key) (set (keys attrs)))
        (reduce-kv #(upsert-set %1 (build-key (conj attr-key %2)) %3) values attrs)))))

(defn value-accumulator [path {:keys [structure values]} [tag & contents]]
  (let [[attrs contents] (if (map? (first contents))
                             [(first contents) (rest contents)]
                             [{} contents])
        key (conj path tag)
        [structure values] (append-attrs key attrs structure values)]
    (cond
      (empty? contents)
      {:structure structure :values values}

      (every? vector? contents)
      (let [results
            (reduce
              (partial value-accumulator key)
              {:structure structure
               :values values}
              contents)]
        (update results :structure upsert-set (build-key key) (mapv first contents)))

      (every? string? contents)
      (let [v (str/join "\n" (mapv str/trim contents))
            k (build-key key)
            upserted (upsert-set values k v)]
        {:structure structure :values upserted})

      :else (throw (ExceptionInfo. "weird structure" path)))))

(defn accumulate-values [node]
  (value-accumulator [] {:structure {} :values {}} node))

(defn poll-attrs [attrs]
  (let [union (set (apply set/union attrs))
        intersection (set (apply set/intersection attrs))
        diff (set (set/difference union intersection))]
    (merge
      (if (empty? intersection) {} {:required intersection})
      (if (empty? diff) {} {:optional diff}))))

(defn map-cardinality [optional max-counts]
  (reduce-kv
    (fn [out tag max-count]
      (let [is-optional? (contains? optional tag)
            is-more-than-one? (< 1 max-count)
            cardinality (if is-optional?
                          (if is-more-than-one? :* :?)
                          (if is-more-than-one? :+ :!))]
        (assoc out tag cardinality)))
    {} max-counts))

(defn get-cardinality [cardinality-map tag]
  [tag (get cardinality-map tag)])

(defn poll-struct [structure]
  (let [{:keys [optional required]} (poll-attrs (set (mapv set structure)))
        total-counts (set (mapv frequencies structure))
        total-max (reduce
                    (fn [out counts]
                      (reduce-kv
                        #(if (contains? %1 %2)
                           (update %1 %2 max %3)
                           (assoc %1 %2 %3))
                        out
                        counts))
                    {}
                    total-counts)
        cardinality-map (map-cardinality optional total-max)
        order (set
                (mapv
                  #(->> %
                        (partition-by identity)
                        (mapv frequencies)
                        (mapv first)
                        (mapv first))
                  structure))
        repeats (set
                  (apply
                    set/union
                    (mapv
                      (fn [single]
                        (->> single
                             (frequencies)
                             (remove #(= 1 (second %)))
                             (mapv first)
                             (set)))
                      order)))
        cardinalities (reverse (sort-by count (set (mapv #(mapv (partial get-cardinality cardinality-map) %) order))))
        max-order-count (count (first cardinalities))
        cardinality-counts (frequencies (mapv count cardinalities))
        max-count (get cardinality-counts max-order-count)
        total-count (+ (count optional) (count required) (count repeats))]
    (if (and
          (= max-count 1)
          (= max-order-count total-count))
      (first cardinalities)
      {:cardinalities cardinalities
       :cardinality-count (count cardinalities)
       :cardinality-counts cardinality-counts
       :max-count max-count
       :repeats repeats
       :max max-order-count
       :total-count total-count})))

(defn poll-vals [path values]
  (if (or
        (str/ends-with? path "/text")
        (str/ends-with? path "/name"))
    :text
    values))

(defn glean-metadata [{:keys [structure values]}]
  (let [attr-keys (filterv #(str/ends-with? % "_attr") (keys structure))
        attrs (select-keys structure attr-keys)
        structure (apply dissoc structure attr-keys)]
    {:attrs (reduce-kv #(assoc %1 %2 (poll-attrs %3)) {} attrs)
     :structure (reduce-kv #(assoc %1 %2 (poll-struct %3)) {} structure)
     :values (reduce-kv #(assoc %1 %2 (poll-vals %2 %3)) {} values)}))

(deftest parse-charsheet-schema
  (let [data (x/from-xml (slurp (io/file folder "characters.xml")))
        stage-one (accumulate-values data)]
    (println stage-one)
    (spit
      (io/file folder "charsheet-stage-one.edn")
      (with-out-str (pp/pprint stage-one)))))

(deftest parse-all-schema
  (let [edn (x/from-xml (slurp all-data-file))
        {:keys [structure values] :as stage-one} (accumulate-values edn)
        {:keys [structure] :as stage-two} (glean-metadata stage-one)
        key-stats (reduce-kv #(assoc %1 %2 (select-keys %3 [:cardinality-count :max :total-count :repeats :max-count])) {} structure)]
    (pp/pprint key-stats)
    #_(spit
      (io/file folder "values-stage-one.edn")
      (with-out-str (pp/pprint values)))
    (spit
      (io/file folder "all-data-stage-two.edn")
      (with-out-str (pp/pprint stage-two)))))