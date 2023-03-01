(ns carabiner.outfitter.json-schematic
  (:require [schema.core :as s]
            [carabiner.outfitter.constants :as oc]
            [carabiner.outfitter.common-schema :as ocs]
            [carabiner.common.schema :as cs]))

(s/defschema JsonSchematic
  {:bodyType (apply s/enum oc/body-types)
   (s/optional-key :bgColor) cs/PaletteColor
   (s/optional-key :bgPattern) ocs/Index
   (s/optional-key :bodyScale) (apply s/enum oc/body-scale)
   :layers (s/constrained
             [{:part (apply s/enum oc/part-types)
               :index ocs/Index
               (s/optional-key :base) cs/PaletteColor
               (s/optional-key :detail) cs/PaletteColor
               (s/optional-key :outline) cs/PaletteColor
               (s/optional-key :opacity) cs/Percent
               (s/optional-key :pattern) ocs/Index
               (s/optional-key :shading) ocs/Index
               (s/optional-key :resize) ocs/XY
               (s/optional-key :move) ocs/XY
               (s/optional-key :flip) s/Bool}]
             (complement empty?))})
