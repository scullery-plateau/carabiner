(ns carabiner.artificer5e.core-test
  (:require [clojure.test :refer :all]
            [clojure.zip :as zip]
            [clojure.xml :as xml]
            [clojure.pprint :as pp]
            [carabiner.artificer5e.core :as a5])
  (:import (java.io ByteArrayInputStream)))

(deftest parse-schema
  (let [schema (-> "resources/data/allData.xml"
                   (slurp)
                   (.getBytes)
                   (ByteArrayInputStream.)
                   (xml/parse)
                   (zip/xml-zip)
                   (first)
                   (a5/detect-schema))]
    (spit
      "resources/data/schema.edn"
      (with-out-str (pp/pprint schema)))))