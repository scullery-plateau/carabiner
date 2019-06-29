(ns carabiner.rogue94.validation
  (:require [carabiner.rogue94.coords :as rc]))

(defn in-range [max]
  (fn [value]
    (and
      (<= 0 value)
      (> max value))))

(defn art-coordinates-valid?
  [{:keys [palette pixels width height] :or {width 16 height 16}}]
  (let [indicies (set (vals pixels))
        coords (map rc/parse (keys pixels))
        xs (set (map first coords))
        ys (set (map second coords))]
    (and
      (every? (in-range (count palette)) indicies)
      (every? (in-range width) xs)
      (every? (in-range height) ys))))

(defn tile-size [{:keys [pixels]}]
  (and
    (= 16 (count pixels))
    (every? #(= 16 (count %)) pixels)))