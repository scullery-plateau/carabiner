(ns carabiner.spritely.core
  (:require [clojure.string :as s]
            [carabiner.common.base64 :as b64]))

(defn parse-file [file-data per-coord-fn final-fn]
  (let [lines (s/split-lines file-data)
        palette (map s/trim (s/split (first lines) #","))
        rows (drop 1 lines)
        pixels (reduce
                 (fn [out [y row]]
                   (reduce
                     (fn [pix [x ch]]
                       (if (> (int ch) 97)
                         (per-coord-fn pix x y ch)
                         pix))
                     out (mapv vector (range) row)))
                 {} (mapv vector (range) rows))]
    {:palette palette
     :pixels pixels}))

(defn file2json [file-data]
  (parse-file
    file-data
    (fn [out x y ch]
      (assoc out (str x "x" y) (- (int ch) 97)))
    (fn [pixels palette]
      {:palette palette
       :pixels pixels})))

(defn json2file [{:keys [palette pixels]}]
  (let [coords (map
                 (fn [key]
                   (map #(Integer/parseInt %) (s/split (name key) #"[x]")))
                 (keys pixels))
        [max-x max-y] (reduce
                        (fn [[^Integer out-x ^Integer out-y] [^Integer x ^Integer y]]
                          [(Math/max out-x x)
                           (Math/max out-y y)])
                        [0 0] coords)
        [width height] (map inc [max-x max-y])]
    (with-out-str
      (println (s/join ", " palette))
      (for [y (range height)]
        (println
          (apply str
                 (map
                   (fn [x]
                     (let [key (keyword (str x "x" y))
                           color-index (get pixels key 0)]
                       (char (+ 97 color-index))))
                   (range width))))))))

(defn load-file [load-data]
  (file2json load-data))

(defn compress-data [json]
  (b64/encode-string (json2file json)))

(defn build-save-file [base64]
  (b64/decode-to-string base64))

(defn build-image [bas64]
  )