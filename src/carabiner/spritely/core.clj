(ns carabiner.spritely.core
  (:require [clojure.string :as s]
            [carabiner.common.base64 :as b64]
            [carabiner.common.img :as img]
            [carabiner.common.xml :as x]
            [clojure.string :as str]
            [clojure.pprint :as pp])
  (:import (java.net URLEncoder URLDecoder)))

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
                       (if (> (int ch) 97)
                         (per-coord-fn pix x y ch)
                         pix))
                     out (mapv vector (range) row)))
                 accumulator (mapv vector (range) rows))]
    (final-fn (inc @max-x) (inc @max-y) pixels palette)))

(defn file2json [file-data]
  (parse-file
    file-data
    {}
    (fn [out x y ch]
      (assoc out
        (str x "x" y)
        (- (int ch) 97)))
    (fn [width height pixels palette]
      {:width width
       :height height
       :palette palette
       :pixels pixels})))

(defn json2file [{:keys [palette pixels width height]}]
  (pp/pprint pixels)
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
  (b64/decode-to-string base64))

(defn rect [w h c id]
  (let [attrs {:x 0 :y 0 :width w :height h :fill c :stroke "none" :stroke-width 0}
        attrs (if (nil? id) attrs (merge attrs {:id id}))]
    [:rect attrs]))

(defn build-image [{:keys [base64 scale]}]
  (let [file-data (b64/decode-to-string base64)
        use-per-coord (fn [out x y ch]
                        (conj out [:use {:x (* scale x) :y (* scale y) :href ch}]))
        final-fn (fn [width height pixels palette]
                   (let [indexed (map vector (range) palette)
                         bg (-> indexed first second)
                         defs (map
                               (fn [[i c]]
                                 (let [id (char (+ 97 i))]
                                   (rect scale scale c id)))
                               (rest indexed))
                         full-img (if (= "none" bg)
                                    pixels
                                    (into [(rect width height bg nil)] pixels))]
                     (into
                       [:svg
                        {:width width
                         :height height
                         :namespace "http://www.w3.org/2000/svg"}
                        (into [:defs] defs)]
                       full-img)))
        svg (parse-file
              file-data []
              use-per-coord
              final-fn)]
    (img/svg-to-bytes (x/expand svg))))
