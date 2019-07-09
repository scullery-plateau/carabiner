(ns carabiner.cobblestone.schema
  (:require [schema.core :as s]
            [carabiner.common.regex :as r]
            [carabiner.common.schema :as cs]
            [carabiner.rogue94.char-index :as ch]))

(s/defschema CharKey
  (s/constrained s/Keyword
    #(and (= 1 (count (name %))) (ch/valid-char? (first (name %))))))

(s/defschema TileChar
  (s/constrained s/Str
    #(and (= 1 (count %)) (ch/valid-char? (first %)))))

(s/defschema EntityName
  (s/constrained s/Keyword
    #(re-matches r/name-pattern (name %))))

(s/defschema Transform
  (apply s/enum cs/transforms))

(s/defschema SingleMapping
  {:tile-name EntityName
   :palette-name EntityName
   (s/optional-key :transforms) #{Transform}})

(s/defschema Page
  {:fromX s/Int
   :fromY s/Int
   :toX s/Int
   :toY s/Int
   :width s/Int
   :height s/Int
   :page s/Int})

(s/defschema CobblestoneData
  {:palettes {EntityName cs/Palette}
   :tiles    {EntityName cs/Pixels}
   :mapping  {CharKey SingleMapping}
   :paging   [Page]
   :map      {cs/Coordinate TileChar}})

(s/defschema ScaledCobblestoneData
  {:scale s/Int
   :full-map CobblestoneData})