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

(defn parse-matrix [matrix]
  (->> matrix
       (drop 6)
       (apply str)
       (read-string)))

(defn filter-by-path-fn [filter-fn svg]
  (->> svg
       (filter vector?)
       (filter #(= :g (first %)))
       (drop 2)
       (map second)
       (some filter-fn)))

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

(defn build-html [{:as headers} content]
  (let [convo #_(with-out-str (pp/pprint %)) h/to-html
        body (if (vector? (first content)) (into [:body] content) [:body content])]
    (convo [:html (into [:head] headers) body])))

(defn pivot-table [table]
  (let [max (apply max (map count table))
        table (map #(into % (repeat (- max (count %)) nil)) table)]
    (apply mapv vector table)))

(defn delete-table-file [^File file ^String table-name]
  (let [table-file (File. file table-name)]
    (when (.exists table-file)
      (.delete table-file))))

(defn build-table-html [^File file ^String table-name path svgs]
  (let [table (read-string (slurp (File. file table-name)))
        table (pivot-table table)]
    (println "has table: " + (.getAbsolutePath file))
    (spit (File. file "table.html")
          (build-html
            {:title (str/join "." path)}
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
                    table))))))

(defn build-table-edn [^File file ^String table-name path marker]
  (let [fill-opacity-filter (partial filter-by-path-fn :fill-opacity)
        outline-filter (partial filter-by-path-fn
                                #(= (select-keys % [:stroke :fill])
                                    {:stroke "#000000" :fill "none"}))
        reddot (get marker (str/join "." path))
        divs (->> (File. file "compiled.html")
                  (slurp)
                  (x/from-xml)
                  (last)
                  (rest)
                  (drop 2))
        svgs (map last divs)
        shade (filterv fill-opacity-filter svgs)
        svgs (vec (remove fill-opacity-filter svgs))
        outline (filterv outline-filter svgs)
        svgs (vec (remove outline-filter svgs))
        [svg-ids
         shade-ids
         outline-ids] (map (partial map #(get (second %) :id))
                           [svgs shade outline])
        id-index (as-> svg-ids $d
                    (mapv vector $d (range))
                    (into {} $d))
        index (get id-index reddot)
        bg-list (take index svg-ids)
        _ (pp/pprint {:index index
                      :bg-list bg-list
                      :shade shade-ids
                      :outline outline-ids})
        detail-list (drop (inc index) svg-ids)]
    (spit (File. file table-name)
          (mapv vec [bg-list detail-list outline-ids shade-ids]))))

(defn build-compiled-html [^File file svgs]
  (spit (File. file "compiled.html")
        (build-html
          {:title "Gallery"
           :style "body { background-color: green; }"}
          (into [:body] (map wrap-svg svgs)))))

(defn build-tree-recurse [^File file ^String dir-name ^String table-name marker path delete-table]
  (let [path (conj path (.getName file))
        children (.listFiles file)
        names (set (map #(.getName ^File %) children))]
    (pp/pprint names)
    (if (contains? names dir-name)
      (let [svgs (reduce read-svg (sorted-map) (.listFiles (File. file dir-name)))]
        (println "has shapes: " + (.getAbsolutePath file))
        (if (contains? names table-name)
          (if delete-table
            (delete-table-file file table-name)
            (build-table-html file table-name path svgs))
          (if (contains? names "compiled.html")
            (build-table-edn file table-name path marker)
            (build-compiled-html file svgs))))
      (doseq [child children]
        (build-tree-recurse child dir-name table-name marker path delete-table)))))

(deftest compile-shapes
  (let [delete-table false
        root (File. "design/outfitter/items/body")
        reddots (read-string (slurp (File. root "marker-check.edn")))]
    (build-tree-recurse root "shapes" "table.edn" reddots [] delete-table)))
