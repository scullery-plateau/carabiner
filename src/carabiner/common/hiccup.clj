(ns carabiner.common.hiccup
  (:require [carabiner.common.xml :as x]
            [carabiner.common.img :as img]))

(defn to-text [hml]
  (-> hml
      (x/expand)
      (x/to-xml)))

(defn to-html [hml]
  (-> hml
      (x/expand)
      (x/to-html)))

(defn to-img [hml]
  (-> hml
      (to-text)
      (img/svg-to-bytes)))
