(ns carabiner.outfitter.dataset
  (:require [clojure.spec.alpha :as spec]
            [carabiner.outfitter.common-schema :as cs]
            [schema.core :as s]
            [carabiner.outfitter.constants :as oc]))

(spec/def ::meta-keys #{:fill-rule
                        :stroke
                        :stroke-opacity
                        :fill
                        :stroke-linejoin
                        :stroke-linecap
                        :stroke-width
                        :stroke-miterlimit
                        :fill-opacity})

(spec/def ::meta (spec/map-of ::meta-keys string?))

(spec/def ::path-step (spec/and vector? (spec/cat :step-type #{:M :Q :L :Z}
                                         :points (spec/+ ::cs/double-xy))))

(spec/def ::path (spec/and vector? (spec/coll-of ::path-step)))

(spec/def ::paths (spec/and vector? (spec/coll-of (spec/and map? (spec/keys :req-un [::path ::meta])))))

(spec/def ::label keyword?)

(spec/def ::dim (spec/keys :req-un [::frame ::offset]))

(spec/def ::layer (spec/keys :req-un [::label ::paths ::dim]))

(spec/def ::layers (spec/and vector? (spec/coll-of ::layer)))

(spec/def ::layer-type #{:base :detail :outline :shadow})

(spec/def ::parts (spec/map-of ::cs/part-types
                         (spec/and vector?
                           (spec/coll-of
                             (spec/map-of ::layer-type
                                       ::layer)))))

(spec/def ::patterns ::layers)
(spec/def ::shading ::layers)

(spec/def ::dataset (spec/keys :req-un [::parts ::patterns ::shading]))

(s/defschema PartTypeKey (apply s/enum (mapv keyword oc/part-types)))

(s/defschema PartLayerTypeKey (apply s/enum (mapv keyword oc/part-layer-types)))

(s/defschema DatasetJson {:pattern-count cs/Index
                          :shading-count cs/Index
                          :parts         {PartTypeKey [{:layers {PartLayerTypeKey s/Str}
                                                        :min    cs/XY
                                                        :max    cs/XY}]}})