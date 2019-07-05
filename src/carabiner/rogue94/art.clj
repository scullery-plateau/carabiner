(ns carabiner.rogue94.art
  (:require [clojure.string :as str]
            [carabiner.rogue94.common :as c]
            [carabiner.rogue94.file-schema :as fs]
            [carabiner.rogue94.coords :as coords]))

(defn art-file-to-json [block]
  (let [{:keys [palette pixels]} (c/validate block ::fs/art)]
    {:palette (mapv c/resolve-color palette)
     :pixels  (c/coordinate-tile pixels)
     :width   (int (apply max (map count pixels)))
     :height  (count pixels)}))

(defn art-json-to-file [{:keys [palette pixels width height]
                         :or   {width 16 height 16}}]
  (->> (c/pixelate-art pixels width height)
       (into [(str/join " " palette)])
       (str/join (System/lineSeparator))))

(defn art-json-to-svg [scale {:keys [palette pixels width height transforms]}]
  (let [transform (apply coords/art-transformer width height transforms)]
    (concat
      [:svg {:width  (* scale width)
             :height (* scale height)
             :xmlns  "http://www.w3.org/2000/svg"}]
      (c/gridify palette (transform pixels) width height scale 0 0))))
