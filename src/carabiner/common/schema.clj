(ns carabiner.common.schema
  (:require [schema.core :as s]
            [carabiner.common.color :as color]
            [carabiner.common.regex :as r]))

(def color-names (set (map name (keys color/css))))

(def transforms #{"flip-over" "flip-down" "turn-left" "turn-right"})

(defn is-double-percent? [value]
  (and (< 0 value)
       (>= 1 value)))

(s/defschema Percent
  (s/conditional string? (s/pred (partial re-matches r/percent-pattern))
                 number? (s/pred is-double-percent?)))

(s/defschema PaletteColor
  (s/maybe (s/constrained s/Str
             #(or (= "none" %)
                  (re-matches r/hex-color-pattern %)
                  (contains? color-names %)))))

(s/defschema Coordinate
  (s/constrained s/Keyword
    #(re-matches r/coord-pattern (name %))))

(s/defschema Pixels {Coordinate s/Int})

(s/defschema Palette [PaletteColor])

(s/defschema Art
  {:pixels Pixels
   :palette Palette
   (s/optional-key :width) s/Int
   (s/optional-key :height) s/Int
   (s/optional-key :transforms) [(apply s/enum transforms)]})

(s/defschema ScaledArt
  {:art Art
   :scale s/Int})