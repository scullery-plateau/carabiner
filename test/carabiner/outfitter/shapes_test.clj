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

(defn build-tree-recurse [^File file  ^String dir-name ^String table-name marker path]
  (let [path (conj path (.getName file))
        convo #_(with-out-str (pp/pprint %)) h/to-html
        children (.listFiles file)
        names (set (map #(.getName ^File %) children))]
    (pp/pprint names)
    (if (contains? names dir-name)
      (let [svgs (reduce read-svg (sorted-map) (.listFiles (File. file dir-name)))]
        (println "has shapes: " + (.getAbsolutePath file))
        (if (contains? names table-name)
          #_(let [table (read-string (slurp (File. file table-name)))
                pivot (apply mapv vector table)]
            (spit (File. file table-name) pivot))
          (let [table (read-string (slurp (File. file table-name)))
                table (apply mapv vector table)]
            (println "has table: " + (.getAbsolutePath file))
            (spit (File. file "table.html")
                  (convo
                    [:html
                     [:head [:title path]]
                     [:body
                      (into [:table]
                            (map
                              #(into
                                 [:tr]
                                 (map
                                   (fn [cell]
                                     (let [cell (if (string? cell) (read-string cell) cell)]
                                       (println cell)
                                       [:td (if cell (wrap-svg [cell (get svgs cell)]) {})]))
                                   %))
                              table))]])))
          (if (contains? names "compiled.html")
            (let [reddot (get marker (str/join "." path))
                  div-ids (->> (File. file "compiled.html")
                               (slurp)
                               (x/from-xml)
                               (last)
                               (rest)
                               (drop 2)
                               (map #(get (second %) :id)))
                  index (as-> div-ids $d
                              (mapv vector $d (range))
                              (into {} $d)
                              (get $d reddot))
                  bg-list (take index div-ids)
                  remaining (reverse (drop (inc index) div-ids))
                  outline-list (reverse (take index remaining))
                  detail-list (reverse (drop index remaining))
                  detail-list (concat detail-list (repeat (- index (count detail-list)) nil))]
              (spit (File. file table-name) (mapv vector bg-list detail-list outline-list)))
            (spit (File. file "compiled.html")
                  (convo
                    [:html
                     [:head
                      [:title "Gallery"]
                      [:style "body { background-color: green; }"]]
                     (into [:body] (map wrap-svg svgs))])))))
      (doseq [child children]
        (build-tree-recurse child dir-name table-name marker path)))))

(deftest compile-shapes
  (let [root (File. "design/outfitter/items/body")
        reddots (read-string (slurp (File. root "marker-check.edn")))]
    (build-tree-recurse root "shapes" "table.edn" reddots [])))
