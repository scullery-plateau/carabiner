(ns carabiner.rogue94.file-schema
  (:require [clojure.spec.alpha :as s]
            [carabiner.rogue94.common-schema :as common]
            [carabiner.rogue94.char-index :as ch]
            [carabiner.rogue94.validation :as v]))

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
      :palette (s/+ ::common/color))))

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
      :pixels (s/+ ::pixel-row))
     v/tile-size))

(s/def ::art
  (s/and vector?
    (s/cat
      :palette ::common/palette
      :pixels (s/+ ::pixel-row))))

(s/def ::map-row
  (s/and string?
    (partial every? ch/valid-char?)))

(s/def ::first-page
  (s/and vector?
    (s/cat
      :from-x ::common/index
      :from-y ::common/index
      :from-dim (s/?
                  (s/cat
                    :from-width ::common/index
                    :from-height ::common/index)))))

(s/def ::paging-row
  (s/and vector?
         (s/cat :from-x ::common/index
                :from-y ::common/index
                :from-dim (s/?
                            (s/cat
                              :from-width ::common/index
                              :from-height ::common/index))
                :to (s/?
                      (s/cat
                        :to-label #{">"}
                        :to-x ::common/index
                        :to-y ::common/index)))))

(s/def ::map
  (s/and vector?
         (s/coll-of ::map-row)))

(s/def ::paging
  (s/and vector?
         (s/cat :first-page ::first-page
                :pages (s/* ::paging-row))))

(s/def ::full-map
  (s/and vector?
    (s/cat :map ::map
           :paging ::paging
           :mapping ::mapping
           :palettes ::palettes
           :tiles (s/+ ::tile))))