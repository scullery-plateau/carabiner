(ns carabiner.cobblestone.schema
  (:require [schema.core :as s]
            [carabiner.common.regex :as r]
            [carabiner.common.schema :as cs]
            [carabiner.rogue94.char-index :as ch]))

(s/defschema TileChar
  (s/constrained s/Any
    #(and (char? %) (ch/valid-char? %))))

(s/defschema EntityName
  (s/constrained s/Str
    (partial re-matches r/name-pattern)))

(s/defschema Transform
  (apply s/enum cs/transforms))

(s/defschema SingleMapping
  {:tile-name EntityName
   :palette-name EntityName
   (s/optional-key :transforms) #{Transform}})

(s/defschema Page
  {:from-x s/Int
   :from-y s/Int
   :to-x s/Int
   :to-y s/Int
   :width s/Int
   :height s/Int})

(s/defschema CobblestoneData
  {:palettes {EntityName cs/Palette}
   :tiles    {EntityName cs/Pixels}
   :mapping  {TileChar SingleMapping}
   :paging   [Page]
   :map      {cs/Coordinate TileChar}})