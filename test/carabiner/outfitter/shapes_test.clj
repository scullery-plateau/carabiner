(ns carabiner.outfitter.shapes-test
  (:require [clojure.test :refer :all]
            [carabiner.common.hiccup :as h]
            [carabiner.common.xml :as x]
            [clojure.string :as str]
            [clojure.pprint :as pp])
  (:import (java.io File)))

(defn wrap-svg [[id svg]]
  [:div {:id id :alt id :title id} svg])

(defn remove-id-from-svg [svg]
  (update svg 1 dissoc :id))

(defn read-svg
  ([out ^File file]
   (let [[id svg] (read-svg file)
         svg (update svg 1 assoc :id id)]
     (assoc out id svg)))
  ([^File file]
   (let [id (read-string (first (str/split (.getName file) #"\.")))
         svg (-> (x/from-xml (slurp file))
                 (update 1 select-keys [:width :height]))]
     [id svg])))

(defn build-tree-recurse [^File file  ^String dir-name ^String table-name markers]
  (let [convo #_(with-out-str (pp/pprint %)) h/to-html
        children (.listFiles file)
        names (set (map #(.getName ^File %) children))]
    (pp/pprint names)
    (if (contains? names dir-name)
      (let [svgs (reduce read-svg (sorted-map) (.listFiles (File. file dir-name)))]
        (println "has shapes: " + (.getAbsolutePath file))
        (if (contains? names table-name)
          (let [table (read-string (slurp (File. file table-name)))]
            (println "has table: " + (.getAbsolutePath file))
            (spit (File. file "table.html")
                  (convo
                    [:html
                     [:head [:title "Gallery"]]
                     [:body
                      (into [:table]
                            (map
                              #(into
                                 [:tr]
                                 (map
                                   (fn [cell]
                                     [:td (wrap-svg [cell (get svgs cell)])])
                                   %))
                              table))]])))
          (spit (File. file "compiled.html")
                (convo
                  [:html
                   [:head
                    [:title "Gallery"]
                    [:style "body { background-color: green; }"]]
                   (into [:body] (map wrap-svg svgs))]))))
      (doseq [child children]
        (build-tree-recurse child dir-name table-name markers)))))

(deftest compile-shapes
  (let [root (File. "design/outfitter/items/body")
        markers (->> (File. "design/outfitter/items/markers/body")
                     (.listFiles)
                     (map read-svg)
                     (into {}))]
    (build-tree-recurse root "shapes" "table.edn" markers)))
