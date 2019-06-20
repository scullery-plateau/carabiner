(ns carabiner.spritely.core
  (:require [clojure.string :as s]
            [carabiner.common.base64 :as b64]
            [carabiner.common.img :as img]
            [carabiner.common.xml :as x]
            [clojure.string :as str]
            [clojure.pprint :as pp]))

(defn parse-file [file-data accumulator per-coord-fn final-fn]
  (let [lines (s/split-lines file-data)
        palette (map s/trim (s/split (first lines) #","))
        rows (drop 1 lines)
        max-x (atom 0)
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
    (final-fn (inc @max-x) (inc @max-y) pixels palette)))

(defn file2json [file-data]
  (parse-file
    file-data
    {}
    (fn [out x y c _]
      (assoc out (str x "x" y) c))
    (fn [width height pixels palette]
      {:width width
       :height height
       :palette palette
       :pixels pixels})))

(defn json2file [{:keys [palette pixels width height]}]
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
      [(s/join "," palette)]
      (range height))))

(defn load-spritely-file [load-data]
  (file2json load-data))

(defn compress-data [json]
  (b64/encode-string (json2file json)))

(defn build-save-file [{:keys [base64]}]
  (.getBytes (b64/decode-to-string base64)))

(defn rect [w h s c]
  [:rect {:x 0 :y 0 :width (* w s) :height (* h s) :fill c :stroke "none" :stroke-width 0}])

(defn pixel [x y s c]
  [:rect {:x (* x s) :y (* y s) :width s :height s :fill c :stroke "none" :stroke-width 0}])


(defn build-image [{:keys [base64 scale]}]
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
        svg (parse-file
              file-data []
              use-per-coord
              final-fn)]
    (img/svg-to-bytes (x/expand svg))))
