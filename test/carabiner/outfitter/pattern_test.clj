(ns carabiner.outfitter.pattern-test
  (:require [clojure.test :refer :all]
            [carabiner.outfitter.shapes-test :as shapes]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]))

(defn digits [num total]
  (let [numstr (str num)
        zero-count (- total (count numstr))]
    (apply str (into (vec (repeat zero-count "0")) [numstr]))))

(defn compile-patterns [pattern-type folder]
  (let [shapes-folder (io/file folder "shapes")
        numbers (shapes/read-shape-numbers shapes-folder)
        svg-file-fn #(io/file shapes-folder (str % ".svg"))
        data (mapv #(shapes/data-ify-svg :shadow (svg-file-fn %2) (str pattern-type "-" (digits %1 2))) (range) numbers)]
    (spit (io/file folder (str pattern-type ".edn"))
          (with-out-str (pp/pprint data)))))

(deftest test-compile-patterns
  (let [root (io/file "design/outfitter/items/patterns&shading/patterns/fit")]
    (compile-patterns "patterns" root)))

(deftest test-compile-all-patterns
  (let [root (io/file "design/outfitter/items/patterns&shading")]
    (doseq [pattern-type ["patterns" "shading"]]
      (doseq [body-type ["fit" "hulk" "superman" "woman"]]
        (compile-patterns pattern-type (io/file root body-type pattern-type))))))

