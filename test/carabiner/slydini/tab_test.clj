(ns carabiner.slydini.tab-test
  (:require [clojure.pprint :as pp]
            [clojure.string :as str]
            [clojure.test :refer :all]))

(deftest test-tab-table
  (let [rows (str/split-lines (slurp "test-resources/tab-test-file.txt"))
        data (mapv #(let [n (count (take-while (partial = \tab) %1))
                          p (keyword (apply str (drop n %1)))]
                      {:tag p :depth n :row %2}) rows (range))]
    (pp/pprint data)))

(defn build-hiccup-children [tree]
  (reduce
    #(conj %1
       (into
         (read-string (str "[" (:tag %2) "]"))
         (build-hiccup-children (get tree %2))))
    []
    (sort-by :row (keys tree))))

(deftest test-tabs
  (let [rows (str/split-lines (slurp "test-resources/tab-test-file.txt"))
        data (mapv #(let [n (count (take-while (partial = \tab) %1))
                          p (keyword (apply str (drop n %1)))]
                      {:tag p :depth n :row %2}) rows (range))
        tree (loop [input data
                    path []
                    out {}]
               (if (empty? input)
                 out
                 (let [{:keys [depth] :as next-node} (first input)
                       current-path (into (vec (take depth path)) [next-node])]
                   (recur (rest input) current-path (assoc-in out current-path {})))))
        hiccup (build-hiccup-children tree)]
    (pp/pprint data)
    (println "")
    (pp/pprint tree)
    (println "")
    (pp/pprint hiccup)))
