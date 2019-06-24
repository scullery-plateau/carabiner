(ns carabiner.rogue94.char-index-test
  (:require [clojure.test :refer :all]
            [carabiner.rogue94.char-index :as chars]))

(deftest test-to-string
  (is (= "abcde" (chars/to-string 0 1 2 3 4))))