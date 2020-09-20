(ns carabiner.outfitter.common-schema
  (:require [clojure.spec.alpha :as s]
            [carabiner.common.regex :as r]
            [carabiner.rogue94.common-schema :as rcs]
            [carabiner.outfitter.constants :as oc]
            [clojure.pprint :as pp]))

(s/def ::part-types (into (sorted-set) (mapv keyword oc/part-types)))

(s/def ::int-or-double (s/or :int int?
                             :double double?))

(s/def ::double-xy (s/and
                     vector?
                     (s/cat :x ::int-or-double
                            :y ::int-or-double)))

(s/def ::color (s/or :rcs-color ::rcs/color
                     :id-ref (partial re-matches r/id-ref)))

(defn has-unique-opts? [obj]
  (pp/pprint obj)
  true)