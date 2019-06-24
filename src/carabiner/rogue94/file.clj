(ns carabiner.rogue94.file
  (:require [clojure.string :as str]
            [carabiner.common.base64 :as b64]
            [carabiner.common.img :as img]
            [carabiner.common.xml :as x]
            [carabiner.rogue94.file-schema :as fs]
            [carabiner.rogue94.color :as color]
            [carabiner.rogue94.coords :as coords]
            [clojure.spec.alpha :as s]
            [carabiner.rogue94.char-index :as ch]
            [clojure.set :as set]
            [clojure.pprint :as pp])
  (:import (clojure.lang ExceptionInfo)))

(defn build-art-converter [accumulator per-coord-fn final-fn]
  (fn [palette rows]
    (let [max-x (atom 0)
          max-y (atom 0)
          pixels (reduce
                   (fn [out [y row]]
                     (reduce
                       (fn [pix [x ch]]
                         (swap! max-x #(Math/max ^int x ^int %))
                         (swap! max-y #(Math/max ^int y ^int %))
                         (let [c (- (int ch) 97)]
                           (if (> c 0)
                             (per-coord-fn pix x y c (nth palette c))
                             pix)))
                       out (mapv vector (range) row)))
                   accumulator (mapv vector (range) rows))]
      (final-fn (inc @max-x) (inc @max-y) pixels palette))))

(defn rect [w h s c]
  [:rect {:x 0 :y 0 :width (* w s) :height (* h s) :fill c :stroke "none" :stroke-width 0}])

(defn pixel [x y s c]
  [:rect {:x (* x s) :y (* y s) :width s :height s :fill c :stroke "none" :stroke-width 0}])

(def ^:private parsing-ref
  {:art {:from-json
         (fn [{:keys [palette pixels width height]}]
           (str/join
             "\r\n"
             (reduce
               (fn [out y]
                 (conj out
                       (str/join ""
                                 (map
                                   (fn [x]
                                     (let [key (str x "x" y)
                                           color-index (get pixels key 0)]
                                       (char (+ 97 color-index))))
                                   (range width)))))
               [(str/join "," palette)]
               (range height))))
         :to-json (build-art-converter
                  {}
                  (fn [out x y c _]
                    (assoc out (str x "x" y) c))
                  (fn [width height pixels palette]
                    {:width width
                     :height height
                     :palette palette
                     :pixels pixels}))
         }})

(defn parse-art-file [file-data accumulator per-coord-fn final-fn]
  (let [convert (build-art-converter accumulator per-coord-fn final-fn)
        lines (str/split-lines file-data)
        palette (map str/trim (str/split (first lines) #","))
        rows (drop 1 lines)]
    (convert palette rows)))

(defn art-file2json [file-data]
  (parse-art-file
    file-data
    {}
    (fn [out x y c _]
      (assoc out (str x "x" y) c))
    (fn [width height pixels palette]
      {:width width
       :height height
       :palette palette
       :pixels pixels})))

(defn art-json2file [{:keys [palette pixels width height]}]
  (str/join
    "\r\n"
    (reduce
      (fn [out y]
        (conj out
              (str/join ""
                        (map
                          (fn [x]
                            (let [key (str x "x" y)
                                  color-index (get pixels key 0)]
                              (char (+ 97 color-index))))
                          (range width)))))
      [(str/join "," palette)]
      (range height))))

(defn build-art-image [{:keys [base64 scale]}]
  (let [file-data (b64/decode-to-string base64)
        use-per-coord (fn [out x y ci c]
                        (conj out (pixel x y scale c)))
        final-fn (fn [width height pixels palette]
                   (let [indexed (map vector (range) palette)
                         bg (-> indexed first second)
                         full-img (if (= "none" bg)
                                    pixels
                                    (into [(rect width height scale bg)] (vec pixels)))]
                     (into
                       [:svg
                        {:width (* scale width)
                         :height (* scale height)
                         :xmlns "http://www.w3.org/2000/svg"}]
                       full-img)))
        svg (parse-art-file
              file-data []
              use-per-coord
              final-fn)]
    (img/svg-to-bytes (x/expand svg))))

(defn parse-tile
  "parse tile file text to json structure"
  [text]
  )

(defn unparse-tile
  "unparse tile json structure to file text"
  [{:keys [palette pixels]}]
  )

(defn parse-map
  "parse map file text to json structure"
  [text]
  )

(defn unparse-map
  "unparse map json structure to file text"
  [{:keys [paging map mapping palettes tiles]}]
  )

(defn validate [obj schema]
  (let [conformed (s/conform schema obj)]
    (when (= conformed ::s/invalid)
      (throw
        (ExceptionInfo.
          (str "Errors parsing rogue94 " (name schema) ".")
          (s/explain-data schema obj))))
    conformed))

(defn split&prepare [each-str-fn my-coll]
  (mapv (fn [s]
          (let [row (str/split s #" ")]
            (mapv each-str-fn row)))
        my-coll))

(defmulti resolve-color #(first %))

(defmethod resolve-color :css [[_ color]]
  (name (get color/css (keyword color))))

(defmethod resolve-color :hex [[_ color]] color)

(defn coordinate-map [rows indicies]
  (reduce
    (fn [retval [row y]]
      (reduce
        (fn [out [i x]]
          (if (contains? indicies i)
            (assoc out (coords/from-ints x y) i)
            out))
        retval (mapv vector row (range))))
    {} (mapv vector rows (range))))

(defn coordinate-tile [tile]
  (let [rows (map (partial map ch/to-int) tile)
        values (set/difference (set (flatten rows)) #{0})]
    (coordinate-map rows values)))

(defn parse-map-blocks [[my-map paging mapping palettes & tiles] as]
  (let [paging (split&prepare
                 #(if (re-matches #"\d+" %)
                    (Integer/parseInt %)
                    %)
                 paging)
        mapping (mapv
                  #(vec (cons (.charAt ^String (first %) 0) (rest %)))
                  (mapv
                    #(str/split % #" ")
                    mapping))
        palettes (mapv #(str/split % #" ") palettes)
        full-map (into [my-map paging mapping palettes] tiles)
        valid (validate full-map ::fs/full-map)
        _ (pp/pprint valid)
        {:keys [paging mapping palettes tiles] my-map :map} valid
        _ (pp/pprint tiles)
        char-map (reduce #(assoc %1 (:char %2) (dissoc %2 :char)) {} mapping)
        map-chars (set (keys char-map))
        palettes (reduce #(assoc %1 (:name %2) (mapv resolve-color (:palette %2))) {} palettes)
        tiles (reduce #(assoc %1 (:tile-name %2) (coordinate-tile (:pixels %2))) {} tiles)
        paging (loop [prev-page-number -1
                      pages (cons (:first-page paging) (:pages paging))
                      out []]
                 (if (empty? pages)
                   out
                   (let [{:keys [from-x from-y from-dim to]} (first pages)
                         page-number (if to prev-page-number (inc prev-page-number))
                         {:keys [to-x to-y] :or {to-x 0 to-y 0}} to
                         {:keys [from-width from-height] :or {from-width (- 8 to-x) from-height (- 10 to-y)}} from-dim
                         page {:from-x from-x :from-y from-y :from-width from-width
                               :from-height from-height :to-x to-x :to-y to-y :page page-number}]
                     (recur page-number (rest pages) (conj out page)))))
        ]
    {:map (coordinate-map my-map map-chars)
     :paging paging
     :mapping char-map
     :palettes palettes
     :tiles tiles}))

(defn parse-art-block [block as]
  (let [processed (cons (str/split (first block) #" ")
                        (rest block))
        valid (validate processed ::fs/art)]
    valid))

(defn parse-file [text as]
  (let [lines (str/split-lines text)
        trimmed (mapv str/trim lines)
        all-blocks (partition-by empty? trimmed)
        blocks (filter #(not= % (list "")) all-blocks)
        blocks (mapv vec blocks)]
    (cond
      (= 1 (count blocks)) (parse-art-block (first blocks) as)
      (< 4 (count blocks)) (parse-map-blocks blocks as)
      )))
