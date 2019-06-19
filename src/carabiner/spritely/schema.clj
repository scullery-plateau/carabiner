(ns carabiner.spritely.schema
  (:require [schema.core :as s]))

(s/defschema PaletteColor
  (s/maybe (s/constrained s/Str #(or (= "none" %) (re-matches #"[#][0-9a-fA-F]{6}" %)))))

(s/defschema Coordinate
  (s/constrained s/Keyword #(re-matches #"\d+[x]\d+" (name %))))

(s/defschema SpritelyData
  {:pixels {Coordinate s/Int}
   :palette [PaletteColor]
   :width s/Int
   :height s/Int})
