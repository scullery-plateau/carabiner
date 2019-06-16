(ns carabiner.spritely.core-test
  (:require [clojure.test :refer :all]))

(deftest test-load-file
  (is (= "1\r\n2\r\n3\r\n" (with-out-str
                     (println 1)
                     (println 2)
                     (println 3)))))