(ns carabiner.rogue94.json-schema
  (:require [carabiner.rogue94.validation :as v]
            [clojure.spec.alpha :as s]
            [carabiner.rogue94.common-schema :as common]))

(def ^:private coord-pattern #"\d+[x]\d+")

(s/def ::coord (partial re-matches coord-pattern))

(s/def ::height ::common/index)

(s/def ::width ::common/index)

(s/def ::pixels (s/map-of ::coord ::common/index))

(s/def ::art
  (s/and
    (s/keys :req-un [::common/palette ::pixels ::width ::height])
    v/art-coordinates-valid?))

(s/def ::map (s/map-of ::coord ::common/valid-char))

(s/def ::from-x ::common/index)

(s/def ::from-y ::common/index)

(s/def ::to-x ::common/index)

(s/def ::to-y ::common/index)

(s/def ::page-mapping
  (s/keys :key-un [::from-x ::from-y ::to-x ::to-y ::width ::height]))

(s/def ::paging
  (s/and vector?
         (s/coll-of ::page-mapping)))

(s/def ::tile-name ::common/entity-name)

(s/def ::palette-name ::common/entity-name)

(s/def ::transforms
  (s/and set?
         (s/coll-of ::common/transform)))

(s/def ::transformed-tile
  (s/keys :req-un [::tile-name ::palette-name]
          :opt-un [::transforms]))

(s/def ::mapping
  (s/map-of ::common/valid-char
            ::transformed-tile))

(s/def ::palettes
  (s/map-of ::common/entity-name
            ::common/palette))

(s/def ::tiles
  (s/map-of ::common/entity-name
            (s/map-of ::coord ::common/index)))

(s/def ::full-map
  (s/keys :req-un [::palettes ::tiles ::mapping ::paging ::map]))