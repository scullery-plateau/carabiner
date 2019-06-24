(ns carabiner.rogue94.file-schema
  (:require [clojure.spec.alpha :as s]
            [carabiner.rogue94.common-schema :as common]
            [carabiner.rogue94.char-index :as ch]))

(s/def ::single-char-mapping
  (s/and
    vector?
    (s/cat :char ::common/valid-char
           :tile-name ::common/entity-name
           :palette-name ::common/entity-name
           :transforms (s/* ::common/transform))))

(s/def ::mapping
  (s/and
    vector?
    (s/coll-of ::single-char-mapping)))

(s/def ::named-palette
  (s/and
    vector?
    (s/cat
      :name ::common/entity-name
      :palette ::common/palette)))

(s/def ::palettes
  (s/and
    vector?
    (s/coll-of ::named-palette)))

(s/def ::pixel-row
  (s/and string?
    (partial every? ch/valid-char?)))

(s/def ::tile
  (s/and vector?
    (s/cat
      :tile-name ::common/entity-name
      :pixels (s/+ ::pixel-row))))

(s/def ::art
  (s/and vector?
    (s/cat
      :palette ::common/palette
      :pixels (s/+ ::pixel-row))))

(s/def ::map-row
  (s/and string?
    (partial every? ch/space-or-valid-char?)))

(s/def ::paging-row
  (s/and vector?
         (s/cat :label #{"from:"}
                :from-x int?
                :from-y int?
                :from-dim (s/?
                            (s/cat
                              :from-width int?
                              :from-height int?))
                :to (s/?
                      (s/cat
                        :to-label #{"to:"}
                        :to-x int?
                        :to-y int?)))))

(s/def ::map-and-paging
  (s/and vector?
         (s/cat :map (s/+ ::map-row)
                :paging (s/* ::paging-row))))

(s/def ::full-map
  (s/and vector?
    (s/cat :map-and-paging ::map-and-paging
           :mapping ::mapping
           :palettes ::palettes
           :tiles (s/+ ::tile))))