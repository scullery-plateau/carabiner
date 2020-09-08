(ns carabiner.outfitter.schematic
  (:require [clojure.spec.alpha :as s]
            [carabiner.rogue94.common-schema :as rcs]
            [carabiner.outfitter.common-schema :as cs]))

(s/def ::body-types #{:fit :hulk :superman :woman})

(s/def ::whole-number (s/and int? pos?))

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

(s/def ::schematic (s/and
                     vector?
                     (s/cat :body-type ::body-types
                            :resize-body (s/? (s/cat :label #{:resize-body} :value ::cs/double-xy))
                            :bg-color (s/? (s/cat :label #{:bg-color} :value ::rcs/color))
                            :bg-pattern (s/? (s/cat :label #{:bg-pattern} :value ::whole-number))
                            :layers (s/+ ::layer))))



