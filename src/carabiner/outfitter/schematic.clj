(ns carabiner.outfitter.schematic
  (:require [clojure.spec.alpha :as s]
            [carabiner.rogue94.common-schema :as rcs]
            [carabiner.outfitter.common-schema :as cs]
            [carabiner.outfitter.constants :as oc]))

(s/def ::body-types (set (mapv keyword oc/body-types)))

(s/def ::whole-number (s/and int? (complement neg?)))

(s/def ::layer-args
  (s/* (s/or :base (s/cat :label #{:base} :value ::rcs/color)
             :detail (s/cat :label #{:detail} :value ::rcs/color)
             :outline (s/cat :label #{:outline} :value ::rcs/color)
             :pattern (s/cat :label #{:pattern} :value ::whole-number)
             :shading (s/cat :label #{:shading} :value ::whole-number)
             :resize (s/cat :label #{:resize} :value ::cs/double-xy)
             :move (s/cat :label #{:move} :value ::cs/double-xy)
             :flip? (s/cat :label #{:flip?} :value boolean?))))

(s/def ::layer (s/and
                 vector?
                 (s/cat :part-type ::cs/part-types
                        :index ::whole-number
                        :layer-args ::layer-args)))

(s/def ::bg-color ::rcs/color)

(s/def ::bg-pattern ::whole-number)

(s/def ::body-scale (set (mapv keyword oc/body-scale)))

(s/def ::schematic (s/and
                     vector?
                     (s/cat :body-type ::body-types
                            :args (s/? (s/keys :opt-un [::bg-color ::bg-pattern ::body-scale]))
                            :layers (s/+ ::layer))))
