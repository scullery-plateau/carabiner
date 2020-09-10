(ns carabiner.outfitter.schematic
  (:require [clojure.spec.alpha :as s]
            [carabiner.rogue94.common-schema :as rcs]
            [carabiner.outfitter.common-schema :as cs]))

(s/def ::body-types #{:fit :hulk :superman :woman})

(s/def ::whole-number (s/and int? (complement neg?)))

(s/def ::layer (s/and
                 vector?
                 (s/cat :part-type ::cs/part-types
                        :index ::whole-number
                        :base (s/? (s/cat :label #{:base} :value ::rcs/color))
                        :detail (s/? (s/cat :label #{:detail} :value ::rcs/color))
                        :outline (s/? (s/cat :label #{:outline} :value ::rcs/color))
                        :pattern (s/? (s/cat :label #{:pattern} :value ::whole-number))
                        :shading (s/? (s/cat :label #{:shading} :value ::whole-number))
                        :resize (s/? (s/cat :label #{:resize} :value ::cs/double-xy))
                        :move (s/? (s/cat :label #{:move} :value ::cs/double-xy))
                        :flip? (s/? (s/cat :label #{:flip?} :value boolean?)))))

(s/def ::resize-body ::cs/double-xy)

(s/def ::bg-color ::rcs/color)

(s/def ::bg-pattern ::whole-number)

(s/def ::schematic (s/and
                     vector?
                     (s/cat :body-type ::body-types
                            :args (s/? (s/keys :opt-un [::resize-body ::bg-color ::bg-pattern]))
                            :layers (s/+ ::layer))))
