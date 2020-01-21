(ns carabiner.outfitter.shapes-test
  (:require [clojure.test :refer :all]
            [carabiner.common.xml :as x]
            [clojure.string :as str]
            [clojure.pprint :as pp])
  (:import (java.io File)))

(defn wrap [id content]
  (into [:div {:id id}] content))

(defn build-tree-recurse [file path]
  (wrap (str/join "/" path)
    (if (.isDirectory file)
      (map
        #(build-tree-recurse % (conj path (.getName %)))
        (.listFiles file))
      (let [xml-str (slurp file)]
        (println path)
        (vector (x/from-xml xml-str))))))

(deftest compile-shapes
  (let [convo #_(with-out-str (pp/pprint %)) h/to-html
        root (File. "design/outfitter/items")
        html [:html
              [:head [:title "Gallery"]]
              [:body (build-tree-recurse root [])]]]
    (spit "design/outfitter/compiled.html"
          (convo html))))
