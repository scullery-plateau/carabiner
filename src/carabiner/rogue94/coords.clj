(ns carabiner.rogue94.coords
  (:require [clojure.string :as str]
            [clojure.pprint :as pp])
  (:import (clojure.lang Keyword)))

(defn parse [^Keyword coord]
  (map #(Integer/parseInt %)
    (str/split (name coord) #"x")))

(defn from-ints [^long x ^long y]
  (keyword (str x "x" y)))

(defn from-json [{:keys [^long x ^long y]}]
  (from-ints x y))

(defmulti transform (fn [tf w h x y] tf))

(defmethod transform "turn-left" [_ w h x y]
  (from-ints y (- (dec (min w h)) x)))

(defmethod transform "turn-right" [_ w h x y]
  (from-ints (- (dec (min w h)) y) x))

(defmethod transform "flip-over" [_ w h x y]
  (from-ints (- (dec w) x) y))

(defmethod transform "flip-down" [_ w h x y]
  (from-ints x (- (dec h) y)))

(defn coord-transformer [tf w h]
  (fn [coord]
    (let [[x y] (parse coord)]
      (transform tf w h x y))))

(defn tile-transformer [& tfs]
  (let [transform (apply comp (map #(coord-transformer % 16 16) tfs))]
    (fn [tile]
      (reduce-kv
        #(assoc %1 (transform %2) %3)
        {}
        tile))))

(defn transform-tile [tile & tfs]
  ((apply tile-transformer tfs) tile))

(defn dim-coords [coord-map]
  (let [coords (map parse (keys coord-map))]
    (map #(inc (apply max (map % coords))) [first second])))
