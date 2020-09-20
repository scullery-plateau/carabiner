(ns carabiner.outfitter.parser-test
  (:require [clojure.test :refer :all]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.pprint :as pp]
            [carabiner.outfitter.parser :as p])
  (:import (java.io File)
           (clojure.lang ExceptionInfo)))

(def demos-folder ^File (io/file "test-resources/outfitter/text-samples"))

(defn demo-reducer [out demo]
  (assoc
    out
    demo
    (try
      (p/parse (slurp (io/file demos-folder demo)))
      (catch ExceptionInfo e
        (ex-data e)))))


(deftest test-parser
  (let [demo "demo.txt"]
    (spit (io/file demos-folder "errors.edn")
          (with-out-str (pp/pprint (demo-reducer {} demo))))))

(deftest test-parse-all
  (let [demos (->> (.listFiles demos-folder)
                   (map #(.getName %))
                   (filter #(str/ends-with? % ".txt")))]
    (spit (io/file demos-folder "all-errors.edn")
          (with-out-str (pp/pprint (reduce demo-reducer {} demos))))))



(defn swap-chars [file]
  (let [outfile (io/file demos-folder (str (first (str/split (.getName file) #"\.")) ".txt"))
        blackout "[]{}:\""
        swap {#"\n\s+" "\n"
               "#" ":#"}]
    (as-> (slurp file) $
      (reduce #(str/replace %1 %2 "") $ (str/split blackout #""))
      (reduce-kv #(str/replace %1 %2 %3) $ swap)
      (spit outfile $))))

(deftest test-swap-chars
  (swap-chars (io/file demos-folder "bathulk.edn")))

(deftest test-all-swap-chars
  (let [demos (->> (.listFiles demos-folder)
                   (map #(.getName %))
                   (filter #(str/ends-with? % ".edn")))]
    (doseq [demo demos]
      (swap-chars (io/file demos-folder demo)))))

