(ns carabiner.outfitter-new.assets
  (:require [carabiner.common.hiccup :as hiccup]
            [clojure.java.io :as io]
            [carabiner.common.xml :as x]
            [clojure.string :as str]
            [cheshire.core :as json]))

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

(defn load-svg-file [name file]
  (let [file-index (get-file-index file)
        file-id (str name "-" file-index)
        [_ {height :height width :width} [_ {transform :transform} & paths] [_ & defs]] (x/from-xml (slurp file))
        [width height] (map #(Double/parseDouble (str/replace % "px" "")) [width height])
        id-map (into (sorted-map)
                     (map-indexed
                       #(vector
                          (-> %2 second :id)
                          (str file-id "-" %1)) defs))
        defs (mapv (fn [[tag args & content]]
                     (into [tag (update args :id (partial get id-map))] content)) defs)
        paths (mapv (fn [[_ path-args]]
                      [:path (assoc (update path-args :fill (partial update-fill file-id id-map)) :id file-id)]) paths)
        matrix (-> transform
                   (str/replace "matrix(" "")
                   (str/replace ")" "")
                   (str/split #","))
        [x-off y-off] (->> matrix
                           (drop 4)
                           (mapv #(Double/parseDouble (str/trim %))))]
    {:id file-id
     :index file-index
     :width width
     :height height
     :xOff x-off
     :yOff y-off
     :defs defs
     :paths paths}))

(defn collect [name files]
  (let [content (map
                  (partial load-svg-file name)
                  (sort #(- (get-file-index %1) (get-file-index %2)) files))]
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
