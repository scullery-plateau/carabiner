(ns carabiner.rogue94.common
  (:require [clojure.string :as str]
            [carabiner.common.color :as color]
            [carabiner.rogue94.coords :as coords]
            [clojure.spec.alpha :as s]
            [carabiner.rogue94.char-index :as ch]
            [clojure.set :as set]
            [clojure.pprint :as pp])
  (:import (clojure.lang ExceptionInfo)))

(defn validate [obj schema]
  (let [conformed (s/conform schema obj)]
    (when (= conformed ::s/invalid)
      (throw
        (ExceptionInfo.
          (str "Errors parsing rogue94 " (name schema) ".")
          (s/explain-data schema obj))))
    conformed))

(defmulti resolve-color #(first %))

(defmethod resolve-color :css [[_ color]]
  (name (get color/css (keyword color))))

(defmethod resolve-color :hex [[_ color]] color)

(defmethod resolve-color :none [[_ color]] "none")

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

(defn pixelate [pixel-map width height value-fn default]
  (reduce
    (fn [out y]
      (conj out
        (reduce
          (fn [row x]
            (str row
              (value-fn
                (get pixel-map
                  (coords/from-ints x y)
                  default))))
          ""
          (range width))))
    []
    (range height)))

(defn pixelate-map [my-map]
  (let [[width height] (coords/dim-coords my-map)]
    (pixelate my-map width height identity ".")))

(defn pixelate-tile [my-map]
  (pixelate my-map 16 16 ch/to-char 0))

(defn pixelate-art [my-map width height]
  (pixelate my-map width height ch/to-char 0))



(defn file-prep [text]
  (let [lines (str/split-lines text)
        trimmed (mapv str/trim lines)
        all-blocks (partition-by empty? trimmed)
        filtered (filter #(not= % (list "")) all-blocks)
        blocks (map
                 #(map
                    (fn [row]
                      (if-not (nil? (str/index-of row " "))
                         (str/split row #" ")
                         row)) %) filtered)]
    (mapv vec blocks)))

(defn rect
  ([w h s c] (rect 0 0 w h s c))
  ([x y w h s c]
  [:rect {:x x :y y :width (* w s) :height (* h s) :fill c :stroke "none" :stroke-width 0}]))

(defn pixel
  ([x y s c] (pixel x y s c 0 0))
  ([x y s c off-x off-y]
  [:rect {:x (+ off-x (* x s)) :y (+ off-y (* y s)) :width s :height s :fill c :stroke "none" :stroke-width 0}]))

(defn gridify [palette pixels width height scale off-x off-y]
  (let [init (if (= "none" (first palette))
               []
               [(rect off-x off-y width height scale (first palette))])]
    (->> pixels
         (mapv
           (fn [[coord index]]
             (let [color (nth palette index)
                   [x y] (coords/parse coord)]
               (pixel x y scale color off-x off-y))))
         (into init))))
