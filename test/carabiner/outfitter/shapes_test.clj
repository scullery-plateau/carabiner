(ns carabiner.outfitter.shapes-test
  (:require [clojure.test :refer :all]
            [carabiner.common.hiccup :as h]
            [carabiner.common.xml :as x]
            [clojure.string :as str]
            [clojure.pprint :as pp]
            [clojure.edn :as edn]
            [cheshire.core :as cheshire])
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

(deftest build-name-index
  (let [root (File. "design/outfitter/items/body/fit/arm")
        names (edn/read-string (slurp (File. root "names.edn")))
        index (reduce-kv
                #(assoc %1 %2 (into {} (mapv vec (mapv rest %3))))
                {}
                (group-by first names))]
    (spit (File. root "name-index.edn") index)))

(deftest fetch-path-actions
  (let [root (File. "design/outfitter/items/body/fit/arm")
        svg-file #(File. root (str "shapes/" % ".svg"))
        names (edn/read-string (slurp (File. root "names.edn")))
        paths (flatten
                (mapv
                  #(->> %
                       (last)
                       (svg-file)
                       (read-svg)
                       (second)
                       (last)
                       (drop 2))
                  names))
        d (->> paths
               (filter map?)
               (map #(str/split (:d %) #" "))
               (flatten)
               (map #(int (first %)))
               (filter #(< 57 %))
               (set)
               (map #(-> %
                         (char)
                         (str)
                         (keyword)))
               (into (sorted-set)))]
    (pp/pprint d)))

(deftest pull-d
  (let [root (File. "design/outfitter/items/body/fit/arm")
        svg-file #(File. root (str "shapes/" % ".svg"))
        names (edn/read-string (slurp (File. root "names.edn")))
        paths (flatten
                (mapv
                  #(->> %
                        (last)
                        (svg-file)
                        (read-svg)
                        (second)
                        (last)
                        (drop 2))
                  names))
        d (->> paths
               (filter map?)
               (mapv :d))]
    (spit (File. root "d.edn") d)))

(defn parse-double [double-str]
  (Double/parseDouble double-str))

(defn parse-d [d]
  (->> (str/split d #" ")
       (partition-by #(< 57 (int (first %))))
       (mapv vec)
       (partition 2)
       (mapv (partial apply into))
       (mapv #(into [(keyword (str (first (first %)))) (apply str (rest (first %)))] (rest %)))
       (mapv #(into [(first %)] (mapv vec (partition 2 (map parse-double (rest %))))))))

(deftest test-parse-d
  (let [root (File. "design/outfitter/items/body/fit/arm")
        ds (mapv parse-d (edn/read-string (slurp (File. root "d.edn"))))]
       (spit (File. root "ds.edn") ds)))

(defn parse-path [[_ {:keys [d] :as path-args}]]
  {:meta (dissoc path-args :d)
   :path (parse-d d)})

(def init-minmax-xy
  {:min-x (double Integer/MAX_VALUE)
   :min-y (double Integer/MAX_VALUE)
   :max-x (double Integer/MIN_VALUE)
   :max-y (double Integer/MIN_VALUE)})

(defn minmax-xy-reducer [out {:keys [path]}]
  (reduce
    (fn [{:keys [min-x min-y max-x max-y]} [x y]]
      {:min-x (min min-x x)
       :min-y (min min-y y)
       :max-x (max max-x x)
       :max-y (max max-y y)})
    out
    (partition 2 (flatten (map rest path)))))

(defn data-ify-svg [file]
  (let [svg (second (read-svg file))
        [_ {:keys [width height]} [_ {:keys [transform]} & paths]] svg
        matrix (edn/read-string (apply str (drop 6 transform)))
        [offset-x offset-y] (drop 4 matrix)
        parsed-paths (mapv parse-path paths)
        {:keys [min-x min-y max-x max-y]} (reduce minmax-xy-reducer init-minmax-xy parsed-paths)]
    {:paths parsed-paths
     :dim {:width width
           :height height
           :offset [offset-x offset-y]
           :min [min-x min-y]
           :max [max-x max-y]}}))

(deftest compile-full-data
  (let [root (File. "design/outfitter/items/body/fit/arm")
        svg-file #(File. root (str "shapes/" % ".svg"))
        index (edn/read-string (slurp (File. root "name-index.edn")))]
    (spit
      (File. root "name-data.edn")
      (with-out-str
        (pp/pprint
          (reduce-kv
            (fn [out k v]
              (assoc
                out
                k
                (reduce-kv
                  #(assoc %1 %2 (data-ify-svg (svg-file %3)))
                  {}
                  v)))
            {}
            index))))))


(defn get-number [point-num-str]
  (Double/parseDouble
    (if (< 57 (int (first point-num-str)))
      (apply str (rest point-num-str))
      point-num-str)))

(defn layer-all [row]
  [:td])

(defn re-align-svg [[_ svg-args [_ g-args & paths]]]
  [:svg svg-args (into [:g g-args] paths)])

(defn build-name-cell [svg-file row layer]
  (let [file-index (get row layer)]
    [:td (if file-index (re-align-svg (second (read-svg (svg-file file-index)))) "")]))

(defn print-d [d]
  (->> d
       (map #(into [(name (first %))] (flatten (rest %))))
       (flatten)
       (str/join " ")))

(def layer-color-keys
  {:base :fill
   :detail :fill
   :outline :stroke})

(defn path-ify [layer color {:keys [meta path]}]
  (let [layer-color-key (get layer-color-keys layer)]
    [:path (merge
             meta
             {:d (print-d path)}
             (if layer-color-key
               (assoc {} layer-color-key color)
               {}))]))

(defn build-group
  ([layer offset paths]
   (build-group layer offset paths "#000000"))
  ([layer offset paths color]
   (into
     [:g
      (if offset
        {:transform (str "matrix(" (str/join "," (into [1.0 0.0 0.0 1.0] offset)) ")")}
        {})]
     (mapv (partial path-ify layer color) paths))))

(def layer-colors
  {:base "#00ff00"
   :detail "#ff0000"
   :outline "#0000ff"})

(defn build-group-from-pair [[layer {:keys [paths]}]]
  (let [color (get layer-colors layer)]
    (if color
      (build-group layer nil paths color)
      (build-group layer nil paths))))

(defn layer-data [row]
  (let [dims (mapv :dim (vals row))
        _ (pp/pprint (mapv #(select-keys % [:min :max]) dims))
        mins (mapv :min dims)
        min-xs (mapv first mins)
        min-ys (mapv second mins)
        maxs (mapv :max dims)
        max-xs (mapv first maxs)
        max-ys (mapv second maxs)
        min-x (apply min min-xs)
        min-y (apply min min-ys)
        max-x (apply max max-xs)
        max-y (apply max max-ys)
        width (- max-x min-x)
        height (- max-y min-y)]
    [:td
     (into [:svg {:width (str width "px")
                  :height (str height "px")
                  :viewBox (str/join " " [min-x min-y width height])}]
           (mapv build-group-from-pair row))]))

(defn build-cell-from-data [row layer]
  (let [{:keys [dim paths] :as svg} (get row layer)
        offset (:offset dim)]
    (if svg
      [:td
       [:svg
        (select-keys dim [:width :height])
        (build-group layer offset paths)]]
      [:td])))

(defn build-name-row [svg-file index key]
  (let [row (get index key)]
    (conj
      (into [:tr]
          (map (partial build-name-cell svg-file row)
               [:base :detail :outline :shadow]))
      (layer-all row))))

(defn build-row-from-data [index key]
  (pp/pprint key)
  (let [row (get index key)]
    (conj
      (into [:tr]
            (map (partial build-cell-from-data row)
                 [:base :detail :outline :shadow]))
      (layer-data row))))

(deftest build-name-table
  (let [root (File. "design/outfitter/items/body/fit/arm")
        svg-file #(File. root (str "shapes/" % ".svg"))
        index (edn/read-string (slurp (File. root "name-index.edn")))
        names (into (sorted-set) (keys index))]
    (spit (File. root "name-matched.html")
          (build-html
            {:title "Name-Matched"}
            [:table
             [:thead [:tr [:th "Base"] [:th "Detail"] [:th "Outline"] [:th "Shadow"] [:th "All"]]]
             (into  [:tbody] (map (partial build-name-row svg-file index) names))]))))

(deftest build-table-from-name-data
  (let [root (File. "design/outfitter/items/body/fit/arm")
        index (edn/read-string (slurp (File. root "name-data.edn")))
        names (into (sorted-set) (keys index))
        table (mapv (partial build-row-from-data index) names)]
    (spit (File. root "table-from-data.json")
          (cheshire/generate-string table {:pretty true}))
    (spit (File. root "from-data.html")
          (build-html
            {:title "From Data"}
            [:table
             [:thead [:tr [:th "Base"] [:th "Detail"] [:th "Outline"] [:th "Shadow"] [:th "All"]]]
             (into  [:tbody] table)]))))