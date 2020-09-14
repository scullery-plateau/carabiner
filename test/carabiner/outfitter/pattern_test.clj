(ns carabiner.outfitter.pattern-test
  (:require [clojure.test :refer :all]
            [carabiner.outfitter.shapes-test :as shapes]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]))

(def head-top
  {:fit -139.95
   :hulk -196.05
   :superman -167.75
   :woman -130.1})

(def body-patterns
  [7 9 13 16 17 20])

(defn build-crosshairs [xs ys width height]
  (vec
    (for [x xs y ys]
      [:rect {:x x :y y :width width :height height :fill "none" :stroke "black" :stroke-width 1}])))

(defn build-pattern-list-display [folder]
  (let [shapes-folder (io/file folder "shapes")
        numbers (shapes/read-shape-numbers shapes-folder)
        svg-file-fn #(io/file shapes-folder (str % ".svg"))
        svgs (mapv #(let [svg (second (shapes/read-svg (svg-file-fn %)))
                          body (vec (drop 2 svg))
                          body (into (build-crosshairs [400 0] [300 0] 400 300) body)]
                      [:div
                       {:alt % :title % :style "display: inline;"}
                       (into [:svg
                              {:width "800px"
                               :height "600px"
                               :viewBox "0 0 800 600"}]
                             body)])
                   numbers)]
    (spit (io/file folder "compiled.html")
          (shapes/build-html
            {:title (.getName folder)}
            (into [:div {:style "background-color: green;"}] svgs)))))

(deftest test-build-pattern-list-display
  (let [root (io/file "design/outfitter/items/patterns&shading/fit/patterns-B")]
    (build-pattern-list-display root)))

(deftest test-all-build-pattern-list-display
  (let [root (io/file "design/outfitter/items/patterns&shading")]
    (doseq [body-type ["fit" "hulk" "superman" "woman"]]
      (build-pattern-list-display (io/file root body-type "patterns-B")))))

(defn digits [num total]
  (let [numstr (str num)
        zero-count (- total (count numstr))]
    (apply str (into (vec (repeat zero-count "0")) [numstr]))))

(defn compile-patterns [pattern-type folder]
  (let [shapes-folder (io/file folder "shapes")
        numbers (shapes/read-shape-numbers shapes-folder)
        svg-file-fn #(io/file shapes-folder (str % ".svg"))
        data (mapv #(shapes/data-ify-svg :shadow (svg-file-fn %2) (str pattern-type "-B-" (digits %1 2))) (range) numbers)]
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

(deftest test-compile-new-patterns
  (let [root (io/file "design/outfitter/items/patterns&shading")]
    (doseq [body-type ["fit" "hulk" "superman" "woman"]]
      (compile-patterns "patterns" (io/file root body-type "patterns-B")))))