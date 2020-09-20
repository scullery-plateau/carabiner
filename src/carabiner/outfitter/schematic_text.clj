(ns carabiner.outfitter.schematic-text
  (:require [clojure.spec.alpha :as s]
            [carabiner.outfitter.constants :as oc]
            [carabiner.outfitter.common-schema :as ocs]
            [carabiner.common.color :as color]
            [carabiner.common.regex :as r]))

(s/def ::color-text
  (s/or :none #{"none"}
        :name (set (map #(symbol (name %)) (keys color/css)))
        :hex (s/and keyword? #(re-matches r/hex-color-pattern (name %)))))

(s/def ::layer-text-args
  (s/and
    (s/* (s/or :base (s/cat :label #{'base} :value ::color-text)
               :detail (s/cat :label #{'detail} :value ::color-text)
               :outline (s/cat :label #{'outline} :value ::color-text)
               :pattern (s/cat :label #{'pattern} :value ::whole-number)
               :shading (s/cat :label #{'shading} :value ::whole-number)
               :resize (s/cat :label #{'resize} :x double? :y double?)
               :move (s/cat :label #{'move} :x double? :y double?)
               :flip? (s/cat :label #{'flip?} :value boolean?)))
    ocs/has-unique-opts?))

(s/def ::layer-text (s/and
                      vector?
                      (s/cat :part-type (set (mapv symbol oc/part-types))
                             :index ::whole-number
                             :layer-args ::layer-text-args)))

(s/def ::header-args
  (s/and
    (s/* (s/or :bg-color (s/cat :label #{'bg-color} :value ::color-text)
               :bg-pattern (s/cat :label #{'bg-pattern} :value ::whole-number)
               :body-scale (s/cat :label #{'body-scale} :value (set (mapv symbol oc/body-scale)))))
    ocs/has-unique-opts?))


(s/def ::header-text (s/and
                       vector?
                       (s/cat :body-type (set (mapv symbol oc/body-types))
                              :args ::header-args)))

(s/def ::schematic-text (s/and
                          vector?
                          (s/cat :header-text ::header-text
                                 :layer-text (s/+ ::layer-text))))
