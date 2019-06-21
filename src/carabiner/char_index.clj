(ns carabiner.char-index
  (:require [clojure.string :as str]))

(def ^:private my-chars "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+-=`;'[]{}\\|,.<>/?")

(defn ^char to-char [^long index]
  (nth my-chars index))

(defn ^int to-int [^Character my-char]
  (str/index-of my-chars my-char))

(defn to-string [index1 & indicies]
  (apply str (map to-char (cons index1 indicies))))

(defn from-string [my-string]
  (map to-int my-string))