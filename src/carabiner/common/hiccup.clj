(ns carabiner.common.hiccup
  (:require [carabiner.common.xml :as x]
            [carabiner.common.img :as img]))

(defn to-text [hml]
  (-> hml
      (x/expand)
      (x/toXml)))

(defn to-img [hml]
  (-> hml
      (to-text)
      (img/svg-to-bytes)))