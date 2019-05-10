(ns carabiner.schema
  (:require [clojure.spec.alpha :as spec]))

(def ^:private tile-name-pattern #"/w+")

(spec/def ::tile-name (partial re-matches tile-name-pattern))

(spec/def ::map
  (spec/keys :req-un [::content]
             :opt-un [::paging]))

(spec/def ::maps (spec/coll-of ::map))

(spec/def ::chars
  (spec/map-of ::char
               (spec/cat :tile ::tile-name
                         :palette ::palette-name
                         :transforms (spec/* ::transforms))))

(spec/def ::palettes
  (spec/map-of ::palette-name
               (spec/and vector?
                 (spec/coll-of ::color))))

(spec/def ::tiles
  (spec/map-of ::tile-name
               (spec/and
                 (spec/keys :req-un
                            [::tile-index
                             ::tile-body])
                 ::tile-body-matches-index
                 )))


(spec/def ::doc
  (spec/keys :req-un
             [::maps ::chars ::palettes ::tiles]))