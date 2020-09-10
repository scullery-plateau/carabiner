(ns carabiner.outfitter.shapes-test
  (:require [clojure.test :refer :all]
            [clojure.string :as str]
            [clojure.set :as set]
            [clojure.pprint :as pp]
            [clojure.java.io :as io]
            [clojure.edn :as edn]
            [cheshire.core :as cheshire]
            [carabiner.common.hiccup :as h]
            [carabiner.common.xml :as x]
            [carabiner.common.img :as img]
            [carabiner.outfitter.translate :as tr])
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
  (let [table-file (io/file file table-name)]
    (when (.exists table-file)
      (.delete table-file))))

(defn build-table-html [^File file ^String table-name path svgs]
  (let [table (read-string (slurp (io/file file table-name)))
        table (pivot-table table)]
    (println "has table: " + (.getAbsolutePath file))
    (spit (io/file file "table.html")
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
        divs (->> (io/file file "compiled.html")
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
        _ (pp/pprint {:index   index
                      :bg-list bg-list
                      :shade   shade-ids
                      :outline outline-ids})
        detail-list (drop (inc index) svg-ids)]
    (spit (io/file file table-name)
          (mapv vec [bg-list detail-list outline-ids shade-ids]))))

(defn build-compiled-html [^File file svgs]
  (spit (io/file file "compiled.html")
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
      (let [svgs (reduce read-svg (sorted-map) (.listFiles (io/file file dir-name)))]
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
        root (io/file "design/outfitter/items/body")
        reddots (read-string (slurp (io/file root "marker-check.edn")))]
    (build-tree-recurse root "shapes" "table.edn" reddots [] delete-table)))

(defn index-names [names]
  (reduce-kv
    #(assoc %1 %2 (into {} (mapv vec (mapv rest %3))))
    {}
    (group-by first names)))

(deftest build-name-index
  (let [root (io/file "design/outfitter/items/body/fit/arm")
        names (edn/read-string (slurp (io/file root "names.edn")))
        index (index-names names)]
    (spit (io/file root "name-index.edn") index)))

(deftest fetch-path-actions
  (let [root (io/file "design/outfitter/items/body/fit/arm")
        svg-file #(io/file root (str "shapes/" % ".svg"))
        names (edn/read-string (slurp (io/file root "names.edn")))
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
  (let [root (io/file "design/outfitter/items/body/fit/arm")
        svg-file #(io/file root (str "shapes/" % ".svg"))
        names (edn/read-string (slurp (io/file root "names.edn")))
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
    (spit (io/file root "d.edn") d)))

(defn parse-double [double-str]
  (Double/parseDouble double-str))

(defn point+ [[ax ay] [bx by]]
  [(+ ax bx) (+ ay by)])

(defn parse-d [offset d]
  (->> (str/split d #" ")
       (partition-by #(< 57 (int (first %))))
       (mapv vec)
       (partition 2)
       (mapv (partial apply into))
       (mapv #(into [(keyword (str (first (first %)))) (apply str (rest (first %)))] (rest %)))
       (mapv #(into [(first %)] (mapv (partial point+ offset) (mapv vec (partition 2 (map parse-double (rest %)))))))))

(deftest test-parse-d
  (let [root (io/file "design/outfitter/items/body/fit/arm")
        ds (mapv (partial parse-d [0 0]) (edn/read-string (slurp (io/file root "d.edn"))))]
    (spit (io/file root "ds.edn") ds)))

(defn update-color-url [label color]
  (if (str/starts-with? color "url")
    (str/replace color "gradient" (str label "-"))
    color))

(defn parse-path [off-set color-key label [_ {:keys [d] :as path-args}]]
  {:meta (-> path-args
             (dissoc :d)
             (update color-key (partial update-color-url label)))
   :path (parse-d off-set d)})

(defn minmax-xy-reducer [out {:keys [path]}]
  (reduce
    (fn [{:keys [min-x min-y max-x max-y]} [x y]]
      {:min-x (min min-x x)
       :min-y (min min-y y)
       :max-x (max max-x x)
       :max-y (max max-y y)})
    out
    (partition 2 (flatten (map rest path)))))

(defn translate-matrix [point matrix-txt]
  (let [matrix (edn/read-string (apply str (drop 6 matrix-txt)))]
    (str "matrix(" (str/join " " (concat (take 4 matrix) (point+ point (drop 4 matrix)))) ")")))

(defn parse-gradients [label [_ args & stops]]
  {:meta  (update args :id #(str/replace % "gradient" (str label "-")))
   :stops (mapv second stops)})

(defn parse-defs [label [_ & defs]]
  (mapv (partial parse-gradients label) defs))

(defn data-ify-svg [layer file label]
  (let [svg (second (read-svg file))
        [diff-x diff-y :as diff-set] (if (= :shadow layer) [0 0] [-400 -300])
        [_ {:keys [width height]} [_ {:keys [transform]} & paths] & [defs]] svg
        matrix (edn/read-string (apply str (drop 6 transform)))
        [offset-x offset-y] (point+ (drop 4 matrix) [(- diff-x) (- diff-y)])
        parsed-paths (mapv (partial parse-path diff-set (if (= layer :outline) :stroke :fill) label) paths)
        {:keys [min-x min-y max-x max-y]} (reduce minmax-xy-reducer tr/init-minmax-xy parsed-paths)]
    (merge
      {:label label
       :layer layer
       :paths parsed-paths
       :dim   {:width  width
               :height height
               :offset [offset-x offset-y]
               :min    [min-x min-y]
               :max    [max-x max-y]}}
      (if defs {:defs (parse-defs label defs)} {}))))

(defn compile-data-row [svg-file-fn part row]
  (reduce-kv #(if %3 (assoc %1 %2 (data-ify-svg %2 (svg-file-fn %3) (str part "-" %3))) %1) {} row))

(defn compile-full-data [svg-file-fn part index]
  (reduce-kv #(assoc %1 %2 (compile-data-row svg-file-fn part %3)) {} index))

(deftest test-compile-full-data
  (let [part "arm"
        root (io/file "design/outfitter/items/body/fit" part)
        svg-file #(io/file root (str "shapes/" % ".svg"))
        index (edn/read-string (slurp (io/file root "name-index.edn")))]
    (spit
      (io/file root "name-data.edn")
      (with-out-str
        (pp/pprint
          (compile-full-data svg-file index part))))))

(defn get-number [point-num-str]
  (Double/parseDouble
    (if (< 57 (int (first point-num-str)))
      (apply str (rest point-num-str))
      point-num-str)))

(defn layer-all [_]
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
  {:base    :fill
   :detail  :fill
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
  ([layer label offset paths]
   (build-group layer label offset paths "#000000"))
  ([layer label offset paths color]
   (into
     [:g
      (merge
        {:alt label :title label}
        (if offset
          {:transform (str "matrix(" (str/join "," (into [1.0 0.0 0.0 1.0] offset)) ")")}
          {}))]
     (mapv (partial path-ify layer color) paths))))

(defn build-group-from-pair [colors {:keys [label layer paths]}]
  (let [color (get colors layer)]
    (if color
      (build-group layer label nil paths color)
      (build-group layer label nil paths))))

(defn layer-data [colors row]
  (let [dims (mapv :dim row)
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
    (into [:svg {:width   (str width "px")
                 :height  (str height "px")
                 :viewBox (str/join " " [min-x min-y width height])}]
          (mapv (partial build-group-from-pair colors) row))))

(defn build-gradients [{:keys [meta stops]}]
  (into [:linearGradient meta] (mapv (partial vector :stop) stops)))

(defn build-cell-from-data [row layer]
  (let [{:keys [label dim paths defs] :as svg} (get row layer)
        offset (:offset dim)]
    (if svg
      (let [body [:svg
                  (select-keys dim [:width :height])
                  (build-group layer label offset paths)]
            body (if defs (conj body (into [:defs] (mapv build-gradients defs))) body)]

        [:td {:alt label} body])
      [:td])))

(defn build-name-row [svg-file index key]
  (let [row (get index key)]
    (conj
      (into [:tr]
            (map (partial build-name-cell svg-file row)
                 [:base :detail :outline :shadow]))
      [:td (layer-all row)])))

(defn build-row-from-data
  ([row]
   (conj
     (into [:tr]
           (map (partial build-cell-from-data row)
                [:base :detail :outline :shadow]))
     (->> [:base :detail :outline :shadow]
          (filterv (set (keys row)))
          (mapv (partial get row))
          (layer-data
            {:base    "#00ff00"
             :detail  "#ff0000"
             :outline "#0000ff"})
          (vector :td))))
  ([n row]
   (into
     [:tr [:th [:h2 (str n)]]]
     (drop 1 (build-row-from-data row)))))

(deftest build-name-table
  (let [root (io/file "design/outfitter/items/body/fit/arm")
        svg-file #(io/file root (str "shapes/" % ".svg"))
        index (edn/read-string (slurp (io/file root "name-index.edn")))
        names (into (sorted-set) (keys index))]
    (spit (io/file root "name-matched.html")
          (build-html
            {:title "Name-Matched"}
            [:table
             [:thead [:tr [:th "Base"] [:th "Detail"] [:th "Outline"] [:th "Shadow"] [:th "All"]]]
             (into [:tbody] (map (partial build-name-row svg-file index) names))]))))

(deftest build-table-from-name-data
  (let [root (io/file "design/outfitter/items/body/fit/arm")
        data (edn/read-string (slurp (io/file root "name-data.edn")))
        names (into (sorted-set) (keys data))
        table (mapv #(build-row-from-data (get data %)) names)]
    (spit (io/file root "table-from-data.json")
          (cheshire/generate-string table {:pretty true}))
    (spit (io/file root "from-data.html")
          (build-html
            {:title "From Data"}
            [:table
             [:thead [:tr [:th "Base"] [:th "Detail"] [:th "Outline"] [:th "Shadow"] [:th "All"]]]
             (into [:tbody] table)]))))

(deftest build-overlap
  (let [root (io/file "design/outfitter/items/body/fit/arm")
        index (edn/read-string (slurp (io/file root "name-data.edn")))
        outlines (reduce-kv #(if (:outline %3) (assoc %1 %2 (:outline %3)) %1) (sorted-map) index)
        overlap (layer-data {} (vals outlines))]
    (spit (io/file root "outlines.json")
          (cheshire/generate-string overlap {:pretty true}))
    (spit (io/file root "outlines.html")
          (build-html
            {:title "Outlines"}
            [:table [:tbody [:tr overlap]]]))))

(defmulti assign-ranges count)

(defmethod assign-ranges 3 [[base _ outline]]
  {:base    (vec base)
   :outline (vec outline)})

(defmethod assign-ranges 4 [[base _ detail outline]]
  {:base    (vec base)
   :detail  (vec detail)
   :outline (vec outline)})

(defmethod assign-ranges 5 [[base _ detail outline shadow]]
  {:base    (vec base)
   :detail  (vec detail)
   :outline (vec outline)
   :shadow  (vec shadow)})

(defmethod assign-ranges :default [ranges]
  (pp/pprint ranges)
  (throw (Exception. "bad range")))

(defn read-shape-numbers [folder]
  (->> (.list folder)
       (mapv #(Integer/parseInt (first (str/split % #"\."))))
       (into (sorted-set))
       (drop 2)))


(defn read-shape-numbers-to-ranges [folder]
  (let [files (read-shape-numbers folder)
        min-file (apply min files)
        max-file (apply max files)
        markers (into
                  (sorted-set)
                  (set/difference
                    (set (range min-file (inc max-file)))
                    (set files)))
        ranges (filter
                 (fn [[a b]]
                   (<= a b))
                 (partition 2
                            (conj
                              (reduce
                                #(into %1 [(dec %2) (inc %2)])
                                [min-file]
                                markers)
                              max-file)))]
    (assign-ranges ranges)))

(def layers [:outline :base :detail :shadow])

(defn columns-from-ranges [ranges]
  (reduce-kv
    #(assoc %1 %2 (vec (range (first %3) (inc (second %3)))))
    {} ranges))

(defn has-n [coll n]
  (some #(= n %) coll))

(defn index-table-from-columns [columns]
  (let [counts (reduce-kv
                 #(assoc %1 %2 (count %3))
                 {} columns)
        max-count (apply max (vals counts))
        diffs (reduce-kv
                #(assoc %1 %2 (- max-count %3))
                {}
                counts)
        empty-layers (set/difference (set layers) (set (keys diffs)))
        {:keys [outline base detail shadow]}
        (merge
          (reduce #(assoc %1 %2 (repeat max-count nil)) {} empty-layers)
          (reduce-kv
            #(assoc %1 %2 (into %3 (repeat (get diffs %2) nil)))
            {}
            columns))

        table (mapv vector outline base detail shadow)]
    (mapv #(into {} (mapv vector layers %)) table)))

(defn build-columns-file [folder]
  (let [shapes-folder (io/file folder "shapes")
        ranges (read-shape-numbers-to-ranges shapes-folder)
        columns (columns-from-ranges ranges)]
    (spit (io/file folder "columns.edn") columns)))

(defn read-columns-to-html [folder]
  (let [columns (edn/read-string (slurp (io/file folder "columns.edn")))
        index-table (index-table-from-columns columns)
        svg-file #(io/file folder (str "shapes/" % ".svg"))
        data (mapv (partial compile-data-row svg-file (.getName folder)) index-table)
        table (mapv build-row-from-data (range) data)
        outlines (remove nil? (mapv :outline data))]
    (spit (io/file folder "index-table.edn")
          (with-out-str (pp/pprint index-table)))
    (spit (io/file folder "index-data.edn")
          (with-out-str (pp/pprint data)))
    (spit (io/file folder "outlines.edn")
          (with-out-str (pp/pprint outlines)))
    (spit (io/file folder "table.edn")
          (with-out-str (pp/pprint table)))
    (spit (io/file folder "from-data.html")
          (build-html
            {:title "From Data"}
            [:table {:style "background-color: #088;"}
             [:thead [:tr [:th "#"] [:th "Base"] [:th "Detail"] [:th "Outline"] [:th "Shadow"] [:th "All"]]]
             (into [:tbody] table)]))
    (spit (io/file folder "outlines.html")
          (build-html
            {:title "Outlines"}
            [:table [:tbody [:tr (layer-data {} outlines)]]]))))

(defn build-columns-from-names [folder]
  (pp/pprint "building columns")
  (let [names (edn/read-string (slurp (io/file folder "names.edn")))
        name-index (edn/read-string (slurp (io/file folder "name-index.edn")))
        name-order (reduce #(if (has-n %1 %2) %1 (conj %1 %2)) [] (map first names))
        reducer (fn [out layer]
                  (->> name-order
                       (mapv #(get-in name-index [% layer]))
                       (assoc out layer)))]
    (spit (io/file folder "columns.edn")
          (reduce reducer {} [:base :detail :outline :shadow]))))

(deftest test-find-weird-shadows
  (let [root (io/file "design/outfitter/items/body/fit")
        svg-file #(io/file %1 (str "shapes/" %2 ".svg"))
        folders (filter #(.isDirectory %) (.listFiles root))
        shadow-index (reduce
                       (fn [out file]
                         (let [columns (edn/read-string (slurp (io/file file "columns.edn")))
                               shadows (remove nil? (:shadow columns))]
                           (if (empty? shadows) out
                                                (assoc out (.getName file) shadows))))
                       {} folders)
        _ (spit (io/file root "shadow-index.edn") (with-out-str (pp/pprint shadow-index)))
        shadows (reduce-kv
                  (fn [out folder-name indicies]
                    (reduce
                      #(let [svg (second (read-svg (svg-file (io/file root folder-name) %2)))]
                         (assoc %1 (str folder-name "-" %2) svg))
                      out indicies))
                  {} shadow-index)
        _ (spit (io/file root "shadows.edn") (with-out-str (pp/pprint shadows)))
        weird (reduce-kv
                #(if (< 3 (count %3)) (assoc %1 %2 %3) %1)
                {} shadows)]
    (spit (io/file root "weird-shadows.edn") (with-out-str (pp/pprint weird)))
    (pp/pprint (into (sorted-set) (keys weird)))))

#_(deftest test-build-columns-file
    (let [root (io/file "design/outfitter/items/body/hulk")]
      (build-columns-file (io/file root "boots"))))

#_(deftest test-build-columns-file-for-folder
    (let [folder (io/file "design/outfitter/items/accessories/fit")]
      (doseq [file (filter #(.isDirectory %) (.listFiles folder))]
        (println (.getName file))
        (build-columns-file file))))

(deftest test-read-columns-to-html
  (let [root (io/file "design/outfitter/items/body/fit")]
    (read-columns-to-html (io/file root "hat"))))

(deftest test-read-columns-to-html-for-folder
  (let [folder (io/file "design/outfitter/items/body")]
    (doseq [_type ["hulk" "superman" "woman"]]
      (doseq [file (filter #(.isDirectory %) (.listFiles (io/file folder _type)))]
       (println (.getName file))
       (read-columns-to-html file)))))

(deftest test-build-columns-from-names
  (let [root (io/file "design/outfitter/items/body/fit")]
    (doseq [folder (.listFiles root)]
      (let [names-file (io/file folder "names.edn")]
        (when (.exists names-file)
          (pp/pprint (.getName folder))
          (let [name-index-file (io/file folder "name-index.edn")]
            (when-not (.exists name-index-file)
              (->> names-file
                   (slurp)
                   (edn/read-string)
                   (index-names)
                   #(with-out-str (pp/pprint %))
                   (spit name-index-file)))
            (build-columns-from-names folder)))))))

(deftest build-part-menu
  (let [root (io/file "design/outfitter/items/body")]
    (doseq [_type ["hulk" "superman" "woman"]]
      (let [type-folder (io/file root _type)
            folders (mapv #(.getName %) (filterv #(.isDirectory %) (.listFiles type-folder)))]
       (spit (io/file type-folder "menu.html")
             (build-html
                   {:title "Part Menu"}
                   (into
                         [:ul]
                         (mapv
                               #(vector :li [:a {:href (str % "/from-data.html")} [:h2 %]])
                               folders))))))))


(deftest test-compile-names-e2e
  (let [part "torso"
        root (io/file "design/outfitter/items/body/fit" part)
        svg-file #(io/file root (str "shapes/" % ".svg"))
        names-table (edn/read-string (slurp (io/file root "names.edn")))
        invalid-files (remove #(.exists (svg-file (last %))) names-table)]
    (if-not (empty? invalid-files)
      (pp/pprint invalid-files)
      (let [index (index-names names-table)
            _ (spit (io/file root "name-index.edn")
                    (with-out-str (pp/pprint index)))
            data (compile-full-data svg-file part index)
            _ (spit (io/file root "name-data.edn")
                    (with-out-str (pp/pprint data)))
            names (into (sorted-set) (keys data))
            table (mapv #(build-row-from-data (get data %)) names)
            overlap (layer-data {} (reduce-kv #(if (:outline %3) (assoc %1 %2 (:outline %3)) %1) {} data))]
        (spit (io/file root "from-data.html")
              (build-html
                {:title "From Data"}
                [:table
                 [:thead [:tr [:th "Base"] [:th "Detail"] [:th "Outline"] [:th "Shadow"] [:th "All"]]]
                 (into [:tbody] table)]))
        (spit (io/file root "outlines.html")
              (build-html {:title "Outlines"} overlap))))))



(defn parse-blueprint-layer [root [step index & {:keys [flip? base detail outline]
                                                 :or   {flip?   false
                                                        base    "#ffffff"
                                                        detail  "#ffffff"
                                                        outline "#000000"}}]]
  (let [folder (io/file root (name step))
        data (edn/read-string (slurp (io/file folder "index-data.edn")))]
    {:layers (get data index)
     :flip?  flip?
     :colors {:base    base
              :detail  detail
              :outline outline}}))

(defn group-layers [padding all-layers]
  (let [layers (mapv :layers all-layers)
        dims (reduce #(into %1 (mapv :dim (vals %2))) [] layers)
        mins (mapv :min dims)
        min-xs (mapv first mins)
        min-ys (mapv second mins)
        maxs (mapv :max dims)
        max-xs (mapv first maxs)
        max-ys (mapv second maxs)
        min-y (- (apply min min-ys) padding)
        max-y (+ (apply max max-ys) padding)
        left-x (Math/abs (double (apply min min-xs)))
        right-x (Math/abs (double (apply max max-xs)))
        max-diff-x (+ (max left-x right-x) padding)
        min-x (- max-diff-x)
        max-x max-diff-x
        width (- max-x min-x)
        height (- max-y min-y)]
    [:svg
     {:width   (str width "px")
      :height  (str height "px")
      :viewBox (str/join " " [min-x min-y width height])}
     [:rect
      {:x            min-x
       :y            min-y
       :width        width
       :height       height
       :fill         "none"
       :stroke       "#000000"
       :stroke-width 2}]
     (into
       [:g]
       (mapv
         (fn [{:keys [layers colors flip?]}]
           (into
             [:g
              (if flip?
                {:transform "matrix(-1.0, 0.0, 0.0, 1.0, 0.0, 0.0)"}
                {})]
             (->> [:base :detail :outline :shadow]
                  (filterv (set (keys layers)))
                  (mapv (partial get layers))
                  (mapv (partial build-group-from-pair colors)))))
         all-layers))]))

(defn blueprint->svg [root [body-type & blueprint]]
  (let [folder (io/file root (name body-type))]
    (group-layers 10 (mapv (partial parse-blueprint-layer folder) blueprint))))

(defn svg->64 [svg]
  (-> svg
      (update 1 assoc :xmlns "http://www.w3.org/2000/svg")
      (h/to-text)
      (img/svg-to-64)))

(defn build-demo-table [root demos]
  (let [demo-mapper #(let [svg (blueprint->svg
                                 root
                                 (edn/read-string
                                   (slurp %)))
                           encoded (svg->64 svg)
                           img (str "data:image/png;base64," encoded)]
                        [:tr
                         [:td svg]
                         [:td [:img {:src img}]]])]
    [:table
      (into [:tbody]
        (->> (.listFiles demos)
             (filter #(str/ends-with? (.getName %) ".edn"))
             (mapv demo-mapper)))]))

(deftest test-parse-blueprint
  (let [root (io/file "design/outfitter/items/body")
        demos (io/file "design/outfitter/demos")]
    (spit (io/file demos "demo.html")
          (build-html
            {:title "Demos"}
            (build-demo-table root demos)))))


