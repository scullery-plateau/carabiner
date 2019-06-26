(ns carabiner.rogue94.core
  (:require [carabiner.rogue94.common :as c]
            [carabiner.rogue94.art :as art]
            [carabiner.rogue94.full-map :as fm]
            ))

(defn parse-file-to-json [text]
  (let [blocks (c/file-prep text)]
    (cond
      (= 1 (count blocks)) (art/art-file-to-json (first blocks))
      (< 4 (count blocks)) (fm/full-map-file-to-json blocks)
      )))

