(ns carabiner.rogue94.coords
  (:require [clojure.string :as str]))

(defn parse [^String coord]
  (into {}
    (mapv vector [:x :y]
      (map #(Integer/parseInt %)
        (str/split coord #"x")))))

(defn from-ints [^long x ^long y]
  (str x "x" y))

(defn from-json [{:keys [^long x ^long y]}]
  (from-ints x y))
