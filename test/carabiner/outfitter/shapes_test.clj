(ns carabiner.outfitter.shapes-test
  (:require [clojure.test :refer :all]
            [carabiner.common.hiccup :as h]
            [carabiner.common.xml :as x]
            [clojure.string :as str]
            [clojure.pprint :as pp])
  (:import (java.io File)))

(defn wrap-svg [^File file]
  (let [id (first (str/split (.getName file) #"\."))]
    [:div {:id id :alt id :title id}
     (x/from-xml (slurp file))]))

(defn build-tree-recurse [^File file ^String dir-name]
  (let [convo #_(with-out-str (pp/pprint %)) h/to-html
        children (.listFiles file)]
    (if (.equals dir-name (.getName file))
      (spit (File. (.getParentFile file) "compiled.html")
            (convo
              [:html
               [:head [:title "Gallery"]]
               (into [:body] (map wrap-svg children))]))
      (doseq [child children]
        (build-tree-recurse child dir-name)))))

(deftest compile-shapes
  (let [root (File. "design/outfitter/items/common")]
    (build-tree-recurse root "shapes")))
