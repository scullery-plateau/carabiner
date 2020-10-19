(ns carabiner.artificer5e.schema-build-test
  (:require [clojure.test :refer :all]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [carabiner.common.xml :as x]))

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
