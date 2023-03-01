(ns carabiner.outfitter-old.clone-test
  (:require [clojure.test :refer :all]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.set :as set]
            [clojure.pprint :as pp]
            [carabiner.outfitter-old.shapes-test :as shapes])
  (:import (java.io File)))

(deftest test-parallels
  (let [root (io/file "design/outfitter/items/body")
        body-types [:fit :hulk :superman :woman]
        parse-file-number #(-> %
                               (.getName)
                               (str/split #"\.")
                               (first)
                               (Integer/parseInt))
        shapes (reduce
                 (fn [out body-type]
                   (let [body-folder (io/file root (name body-type))
                         part-folders (filterv #(.isDirectory ^File %) (.listFiles body-folder))]
                     (assoc out body-type
                       (reduce
                         (fn [part-map part-folder]
                           (let [part (.getName part-folder)
                                 shapes-folder (io/file part-folder "shapes")]
                             (assoc part-map part
                               (mapv parse-file-number (.listFiles shapes-folder)))))
                         {} part-folders))))
                 {} body-types)
        fit (:fit shapes)
        shapes (dissoc shapes :fit)
        types (keys shapes)
        diffs (reduce-kv
                (fn [out part nums]
                  (let [diff (reduce
                               (fn [type-map body-type]
                                 (let [fit-nums (set nums)
                                       type-nums (set (get-in shapes [body-type part]))
                                       a!b (into (sorted-set) (set/difference fit-nums type-nums))
                                       b!a (into (sorted-set) (set/difference type-nums fit-nums))
                                       diff (merge
                                              (if (empty? a!b) {} {:a!b a!b})
                                              (if (empty? b!a) {} {:b!a b!a}))]
                                   (if (empty? diff) type-map (assoc type-map body-type diff))))
                               (sorted-map) types)]
                    (if (empty? diff) out (assoc out part diff))))
                (sorted-map) fit)
        diff-parts (into (sorted-set) (keys diffs))
        diffs (reduce
                (fn [out body-type]
                  (assoc out body-type
                    (reduce
                      (fn [part-map part]
                        (if-let [part-nums (get-in diffs [part body-type])]
                          (assoc part-map part part-nums)
                          part-map))
                      (sorted-map) diff-parts)))
                (sorted-map) types)
        fit-parts (into (sorted-set) (keys fit))]
    (spit (io/file root "diffs.edn")
          (with-out-str (pp/pprint diffs)))
    (doseq [[type part] (for [t types p fit-parts] [t p])]
      (if (get-in diffs [type part])
        (shapes/build-columns-file (io/file root (name type) part))
        (spit (io/file root (name type) part "columns.edn")
              (slurp (io/file root "fit" part "columns.edn")))))))


