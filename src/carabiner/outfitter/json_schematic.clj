(ns carabiner.outfitter.json-schematic
  (:require [schema.core :as s]
            [carabiner.outfitter.constants :as oc]
            [carabiner.common.schema :as cs]))

(s/defschema Index (s/constrained s/Int (partial <= 0)))

(s/defschema XY [(s/one s/Num "x") (s/one s/Num "y")])

(s/defschema JsonSchematic
  {:bodyType (apply s/enum oc/body-types)
   (s/optional-key :bgColor) cs/PaletteColor
   (s/optional-key :bgPattern) Index
   (s/optional-key :bodyScale) (apply s/enum oc/body-scale)
   :layers (s/constrained
             [{:part (apply s/enum oc/part-types)
               :index Index
               (s/optional-key :base) cs/PaletteColor
               (s/optional-key :detail) cs/PaletteColor
               (s/optional-key :outline) cs/PaletteColor
               (s/optional-key :pattern) Index
               (s/optional-key :shading) Index
               (s/optional-key :resize) XY
               (s/optional-key :move) XY
               (s/optional-key :flip) s/Bool}]
             (complement empty?))})
