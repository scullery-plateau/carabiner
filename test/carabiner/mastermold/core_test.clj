(ns carabiner.mastermold.core-test
  (:require [clojure.test :refer :all]
            [clojure.data.json :as json]
            [clojure.pprint :as pp]
            [carabiner.mastermold.core :as mc]))

(deftest test-printable
  (let [minis (json/read-json (slurp "resources/test/mastermold-sample.json") true)]
    (pp/pprint (mc/build-printable minis))))