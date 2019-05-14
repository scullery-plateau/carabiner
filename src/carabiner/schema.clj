(ns carabiner.schema
  (:require [clojure.spec.alpha :as spec]
            [carabiner.color :as color]
            [carabiner.validation :as validate]))

(def ^:private hex-color-pattern #"[#][a-fA-F0-9]{6}")

(spec/def ::hex-color (partial re-matches hex-color-pattern))

(spec/def ::css-color (set (keys color/css)))

(spec/def ::color
  (spec/or
    :hex ::hex-color
    :css ::css-color
    ))

(def ^:private map-name-pattern #"/w+")

(def ^:private tile-name-pattern #"/w+")

(def ^:private palette-name-pattern #"/w+")

(def ^:private char-pattern #"/.")

(def ^:private tile-index-pattern #"/w+")

(def ^:private content-pattern #"/.+")

(spec/def ::map-name (partial re-matches map-name-pattern))

(spec/def ::tile-name (partial re-matches tile-name-pattern))

(spec/def ::palette-name (partial re-matches palette-name-pattern))

(spec/def ::content (partial re-matches content-pattern))

(spec/def ::from-x int?)

(spec/def ::from-y int?)

(spec/def ::page-limited-dim #{0 1 2 3 4 5 6 7 8 9})

(spec/def ::from-width ::page-limited-dim)

(spec/def ::from-height ::page-limited-dim)

(spec/def ::to-page int?)

(spec/def ::to-x ::page-limited-dim)

(spec/def ::to-y ::page-limited-dim)

(spec/def ::page
  (spec/and vector?
            (spec/cat :from-label #{:from}
                      :x ::from-x
                      :y ::from-y
                      :dim (spec/?
                             (spec/cat
                               :w ::from-width
                               :h ::from-height))
                      :to-label #{:to}
                      :p ::to-page
                      :to (spec/?
                            (spec/cat
                              :x ::to-x
                              :y ::to-y)))))

(spec/def ::map
  (spec/and vector?
            (spec/cat
              :content ::content
              :pages (spec/* ::page))))

(spec/def ::maps
  (spec/map-of ::map-name
               ::map))

(spec/def ::transforms #{"turn-left" "turn-right" "flip-down" "flip-over"})

(spec/def ::char (partial re-matches char-pattern))

(spec/def ::chars
  (spec/map-of ::char
               (spec/cat :tile ::tile-name
                         :palette ::palette-name
                         :transforms (spec/* ::transforms))))

(spec/def ::palettes
  (spec/map-of ::palette-name
               (spec/and vector?
                 (spec/coll-of ::color))))

(spec/def ::tile-index
  (spec/and
    (partial re-matches tile-index-pattern)
    ))

(spec/def ::tile-body
  (spec/and
    (partial re-matches tile-index-pattern)
    ))

(spec/def ::tiles
  (spec/map-of ::tile-name
               (spec/and
                 (spec/cat
                   :index ::tile-index
                   :body ::tile-body)
                 validate/tile-body-matches-index?)))

(spec/def ::doc
  (spec/and
    (spec/keys :req-un
               [::maps ::chars ::palettes ::tiles])
    validate/match-tile-and-palette-names
    validate/map-page-layouts))
