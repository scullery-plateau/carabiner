(ns carabiner.common.xml-test
  (:require [clojure.test :refer :all]
            [clojure.pprint :as pp]
            [carabiner.common.xml :as x]))

(deftest test-from-xml
  (pp/pprint
    (x/from-xml
      (slurp "design/outfitter/items/base/base/shapes/1.svg"))))
