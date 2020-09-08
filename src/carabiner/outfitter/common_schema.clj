(ns carabiner.outfitter.common-schema
  (:require [clojure.spec.alpha :as s]
            [carabiner.common.regex :as r]))

(s/def ::part-types #{:arm :back :beard :belt :boots :chest :collar :ears :eyebrows :eyes :gauntlets
                      :gloves :hair :hat :head :legs :mask :mouth :nose :pants :shirt :sholders :stockings
                      :symbol_A :symbol_B :tights :torso :wings_and_tail})

(s/def ::int-or-double (s/or :int int?
                             :double double?))

(s/def ::double-xy (s/and
                     vector?
                     (s/cat :x ::int-or-double
                            :y ::int-or-double)))

(s/def ::color (s/or :rcs-color ::rcs/color
                     :id-ref (partial re-matches r/id-ref)))