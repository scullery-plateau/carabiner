(ns carabiner.outfitter.dataset
  (:require [clojure.spec.alpha :as s]
            [carabiner.outfitter.common-schema :as cs]))

(s/def ::meta-keys #{:fill-rule
                     :stroke
                     :stroke-opacity
                     :fill
                     :stroke-linejoin
                     :stroke-linecap
                     :stroke-width
                     :stroke-miterlimit
                     :fill-opacity})

(s/def ::meta (s/map-of ::meta-keys string?))

(s/def ::path-step (s/and vector? (s/cat :step-type #{:M :Q :L :Z}
                                         :points (s/+ ::cs/double-xy))))

(s/def ::path (s/and vector? (s/coll-of ::path-step)))

(s/def ::paths (s/and vector? (s/coll-of (s/and map? (s/keys :req-un [::path ::meta])))))

(s/def ::label keyword?)

(s/def ::dim (s/keys :req-un [::frame ::offset]))

(s/def ::layer (s/keys :req-un [::label ::paths ::dim]))

(s/def ::layers (s/and vector? (s/coll-of ::layer)))

(s/def ::layer-type #{:base :detail :outline :shadow})

(s/def ::parts (s/map-of ::cs/part-types
                         (s/and vector?
                           (s/coll-of
                             (s/map-of ::layer-type
                                       ::layer)))))

(s/def ::patterns ::layers)
(s/def ::shading ::layers)

(s/def ::dataset (s/keys :req-un [::parts ::patterns ::shading]))