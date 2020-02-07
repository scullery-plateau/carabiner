(ns carabiner.mastermold.core-test
  (:require [clojure.test :refer :all]
            [clojure.data.json :as json]
            [clojure.pprint :as pp]
            [carabiner.mastermold.core :as mc]
            [carabiner.common.hiccup :as h]))

(deftest test-printable
  (let [minis (json/read-json
                (slurp "resources/test/mastermold-sample.json")
                true)]
    (spit "resources/test/mastermold-sample.html"
          (h/to-html (mc/build-printable minis)))))
