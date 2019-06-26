(ns carabiner.rogue94.art
  (:require [clojure.string :as str]
            [carabiner.common.base64 :as b64]
            [carabiner.common.img :as img]
            [carabiner.common.xml :as x]
            [carabiner.rogue94.common :as c]
            [carabiner.rogue94.file-schema :as fs]
            [carabiner.rogue94.coords :as coords]))

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
                        (conj out (c/pixel x y scale c)))
        final-fn (fn [width height pixels palette]
                   (let [indexed (map vector (range) palette)
                         bg (-> indexed first second)
                         full-img (if (= "none" bg)
                                    pixels
                                    (into [(c/rect width height scale bg)] (vec pixels)))]
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


(defn art-file-to-json [block]
  (let [processed (vec
                    (cons
                      (str/split (first block) #" ")
                      (rest block)))
        {:keys [palette pixels]} (c/validate processed ::fs/art)]
    {:palette (mapv c/resolve-color palette)
     :pixels (c/coordinate-tile pixels)
     :width (int (apply max (map count pixels)))
     :height (count pixels)}))

(defn art-json-to-file [{:keys [palette pixels width height]}]
  (->> (c/pixelate-art pixels width height)
       (into [(str/join " " palette)])
       (str/join (System/lineSeparator))))

(defn art-json-to-svg [scale {:keys [palette pixels width height]}]
  (concat
    [:svg {:width (* scale width) :height (* scale height)}]
    (c/gridify palette pixels width height scale 0 0)))