(ns carabiner.outfitter.translate
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.spec.alpha :as s]
            [carabiner.outfitter.schematic :as sc])
  (:import (clojure.lang ExceptionInfo)))

(def datasets-path "design/outfitter/datasets")

(defn schematic->svg [schematic]
  (when-let [errors (s/explain-data ::sc/schematic schematic)]
    (throw (ExceptionInfo. "invalid schematic" errors)))
  (let [[body-type & args&layers] schematic
        [meta layers] (if (map? (first args&layers))
                        [(first args&layers) (rest args&layers)]
                        [{} args&layers])
        layers (mapv
                 (fn [[part-type index & {:as args}]]
                   [[part-type index] args])
                 layers)
        dataset (edn/read-string (slurp (io/file datasets-path (str (name body-type) ".edn"))))
        parts (->> (mapv first layers)
                   (set)
                   (group-by first)
                   (reduce-kv
                     #(assoc %1 %2 (into (sorted-set) (map second %3)))
                     (sorted-map)))
        part-types (keys parts)
        ds-parts (select-keys (:parts dataset) part-types)
        out-of-range (fn [coll] #(>= % (count coll)))
        bad-parts (reduce-kv
                    #(let [ds-part (get ds-parts %2)
                           bad (filterv (out-of-range ds-part) %3)]
                       (if (zero? (count bad)) %1 (assoc %1 %2 bad)))
                    {} parts)
        layer-args (mapv second layers)
        patterns (->> layer-args
                      (filterv :pattern)
                      (mapv :pattern)
                      (set))
        ds-patterns (:patterns dataset)
        bad-patterns (filterv #(>= % (count ds-patterns)) patterns)
        shading (->> layer-args
                     (filterv :shading)
                     (mapv :shading)
                     (set))
        ds-shading (:shading dataset)
        bad-shading (filterv #(>= % (count ds-shading)) shading)
        bad-bits (merge
                   (if (empty? bad-parts) {} {:bad-parts bad-parts})
                   (if (empty? bad-patterns) {} {:bad-patterns bad-patterns})
                   (if (empty? bad-shading) {} {:bad-shading bad-shading}))]
    (when-not (empty? bad-bits)
      (throw (ExceptionInfo. "invalid schematic" bad-bits)))
    (let [])))
