(ns carabiner.outfitter-old.common-schema
  (:require [clojure.spec.alpha :as spec]
            [carabiner.common.regex :as r]
            [carabiner.rogue94.common-schema :as rcs]
            [carabiner.outfitter-old.constants :as oc]
            [schema.core :as s]))

(spec/def ::part-types (into (sorted-set) (mapv keyword oc/part-types)))

(spec/def ::int-or-double (spec/or :int int?
                             :double double?))

(spec/def ::double-xy (spec/and
                        vector?
                        (spec/cat
                          :x ::int-or-double
                          :y ::int-or-double)))

(spec/def ::color (spec/or :rcs-color ::rcs/color
                     :id-ref (partial re-matches r/id-ref)))

(s/defschema Index (s/constrained s/Int (partial <= 0)))

(s/defschema XY [(s/one s/Num "x") (s/one s/Num "y")])
