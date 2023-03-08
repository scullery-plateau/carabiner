(ns carabiner.outfitter-new.assets
  (:require [carabiner.common.hiccup :as hiccup]
            [clojure.java.io :as io]
            [carabiner.common.xml :as x]
            [clojure.string :as str]
            [cheshire.core :as json]
            [carabiner.common.hiccup :as h]
            [clojure.xml :as xml]
            [clojure.pprint :as pp]))

(def basePath "design/outfitter/assets")

(defn update-fill [file-id id-map fill]
  (when fill
    (if-not (str/starts-with? fill "url(#")
      fill
      (let [fill-id (-> fill (str/replace "url(#" "") (str/replace ")" ""))]
        (if (contains? id-map fill-id)
          (str "url(#" (get id-map fill-id) ")")
          (throw
            (IllegalArgumentException.
              (pr-str
                {:msg "Fill-id not found!"
                 :fill-id fill-id
                 :file-id file-id
                 :id-map id-map}))))))))

(defn get-file-index [file]
  (Integer/parseInt (str/replace (.getName file) ".svg" "")))

(defn to-xml-text [node]
  (with-out-str (xml/emit-element (x/expand node))))

(defn update-path-args [path-args file-id id-map]
  (let [path-args (update path-args :fill (partial update-fill file-id id-map))]
    (reduce
      (fn [out field]
        (if (= (field out) "#000000")
          (dissoc out field)
          out))
      path-args
      [:fill :stroke])))

(defn load-svg-file [name file]
  (let [file-index (get-file-index file)
        file-id (str name "-" file-index)
        [_ {height :height width :width}
         [_ {transform :transform} & paths]
         [_ & defs]] (x/from-xml (slurp file))
        [width height] (map #(Double/parseDouble (str/replace % "px" "")) [width height])
        id-map (into (sorted-map)
                     (map-indexed
                       #(vector
                          (-> %2 second :id)
                          (str file-id "-" %1)) defs))
        defs (mapv (fn [[tag args & content]]
                     (into [tag (update args :id (partial get id-map))] content)) defs)
        paths (mapv (fn [[_ path-args]]
                      [:path (update-path-args path-args file-id id-map)]) paths)
        matrix (-> transform
                   (str/replace "matrix(" "")
                   (str/replace ")" "")
                   (str/split #","))
        [x-off y-off] (->> matrix
                           (drop 4)
                           (mapv #(Double/parseDouble (str/trim %))))]
    {:id     file-id
     :index  file-index
     :width  width
     :height height
     :xOff   x-off
     :yOff   y-off
     :defs   (when defs (str/join "" (mapv to-xml-text defs)))
     :paths  (str/join "" (mapv to-xml-text paths))}))

(defn collect [name files]
  (let [content (map
                  (partial load-svg-file name)
                  (sort #(- (get-file-index %1) (get-file-index %2)) files))
        [max-x max-y] (reduce
                        (fn [[max-x max-y]
                             {width :width
                              height :height
                              x-off :xOff
                              y-off :yOff}]
                          [(max max-x (- width x-off))
                           (max max-y (- height y-off))])
                        [0 0]
                        content)]
    (pp/pprint {:max-x max-x :max-y max-y})
    (json/generate-string
      (reduce
        #(assoc %1 (:index %2) %2)
        (sorted-map)
        content)
      {:pretty true})))

(defn pass1 []
  (let [root (io/file basePath)]
    (doseq [folder (filter #(.isDirectory %) (.listFiles root))]
      (let [name (.getName folder)
            outName (str name ".json")]
        (spit
          (io/file basePath outName)
          (collect name (.listFiles folder)))
        (println outName)))))

(defn -main [& _]
  (pass1))
