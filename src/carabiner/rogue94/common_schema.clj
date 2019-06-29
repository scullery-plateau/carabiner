(ns carabiner.rogue94.common-schema
  (:require [clojure.spec.alpha :as s]
            [carabiner.common.regex :as r]
            [carabiner.common.schema :as cs]
            [carabiner.rogue94.char-index :as ch]))

(s/def ::hex-color (partial re-matches r/hex-color-pattern))

(s/def ::css-color cs/color-names)

(s/def ::color
  (s/or
    :none #{"none"}
    :hex ::hex-color
    :css ::css-color))

(s/def ::index (s/and int? (partial <= 0)))

(s/def ::palette (s/and vector? (s/coll-of ::color)))

(s/def ::entity-name (partial re-matches r/name-pattern))

(s/def ::valid-char (s/and char? ch/valid-char?))

(s/def ::transform cs/transforms)

