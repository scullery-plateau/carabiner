(ns carabiner.rogue94.char-index
  (:require [clojure.string :as str]))

(def ^:private my-chars "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+-=`;:'\"[]{}\\|,.<>/?")

(defn- get-name [^Character my-char]
  (str/replace (Character/getName (int my-char)) #" " "_"))

(def names (mapv get-name my-chars))

(def name-map (reduce #(assoc %1 (str %2) (get-name %2)) {} my-chars))

(defn char-name [^Character my-char]
  (get name-map my-char))

(defn ^char to-char [^long index]
  (nth my-chars index))

(defn ^int to-int [^Character my-char]
  (str/index-of my-chars my-char))

(defn to-string [index1 & indicies]
  (apply str (map to-char (cons index1 indicies))))

(defn from-string [my-string]
  (map to-int my-string))

(defn valid-char? [^Character my-char]
  (< -1 (str/index-of my-chars my-char)))

(defn valid-int? [^long index]
  (and (pos-int? index) (< index (count my-chars))))

(defn space-or-valid-char? [^Character my-char]
  (or
    (= " " (str my-char))
    (< -1 (str/index-of my-chars my-char))))

