(ns carabiner.rogue94.common-schema
  (:require [clojure.spec.alpha :as s]
            [carabiner.rogue94.color :as color]
            [carabiner.rogue94.validation :as v]
            [carabiner.rogue94.char-index :as ch]))

(def ^:private hex-color-pattern #"[#][a-fA-F0-9]{6}")

(s/def ::hex-color (partial re-matches hex-color-pattern))

(s/def ::css-color (set (map name (keys color/css))))

(s/def ::color
  (s/or
    :hex ::hex-color
    :css ::css-color))

(s/def ::palette (s/and vector? (s/coll-of ::color)))

(def ^:private name-pattern #"[a-zA-Z]([a-zA-Z0\-_]*[a-zA-Z0-9])?")

(s/def ::entity-name (partial re-matches name-pattern))

(s/def ::valid-char (s/and char? ch/valid-char?))

(s/def ::space-or-valid-char (s/and char? ch/space-or-valid-char?))

(def transforms #{"flip-over" "flip-down" "turn-left" "turn-right"})

(s/def ::transform transforms)
