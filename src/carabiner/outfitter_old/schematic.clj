(ns carabiner.outfitter-old.schematic
  (:require [clojure.spec.alpha :as s]
            [carabiner.rogue94.common-schema :as rcs]
            [carabiner.outfitter-old.common-schema :as cs]
            [carabiner.outfitter-old.constants :as oc]
            [carabiner.common.regex :as r]
            [carabiner.common.schema :as ccs]))

(s/def ::body-types (set (mapv keyword oc/body-types)))

(s/def ::whole-number (s/and int? (complement neg?)))

(s/def ::percent
  (s/or :string (s/and string? (partial re-matches r/percent-pattern))
        :number (s/and number? ccs/is-double-percent?)))

(s/def ::layer (s/and
                 vector?
                 (s/cat :part-type ::cs/part-types
                        :index ::whole-number
                        :base (s/? (s/cat :label #{:base} :value ::rcs/color))
                        :detail (s/? (s/cat :label #{:detail} :value ::rcs/color))
                        :outline (s/? (s/cat :label #{:outline} :value ::rcs/color))
                        :opacity (s/? (s/cat :label #{:outline} :value ::percent))
                        :pattern (s/? (s/cat :label #{:pattern} :value ::whole-number))
                        :shading (s/? (s/cat :label #{:shading} :value ::whole-number))
                        :resize (s/? (s/cat :label #{:resize} :value ::cs/double-xy))
                        :move (s/? (s/cat :label #{:move} :value ::cs/double-xy))
                        :flip? (s/? (s/cat :label #{:flip?} :value boolean?)))))

(s/def ::bg-color ::rcs/color)

(s/def ::bg-pattern ::whole-number)

(s/def ::body-scale (set (mapv keyword oc/body-scale)))

(s/def ::schematic (s/and
                     vector?
                     (s/cat :body-type ::body-types
                            :args (s/? (s/keys :opt-un [::bg-color ::bg-pattern ::body-scale]))
                            :layers (s/+ ::layer))))
