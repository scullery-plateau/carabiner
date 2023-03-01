(ns carabiner.outfitter-old.parser
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
            [clojure.spec.alpha :as s]
            [carabiner.outfitter-old.schematic :as st])
  (:import (clojure.lang ExceptionInfo)))

(defn parse [text]
  (let [parsed (mapv #(edn/read-string (str "[" % "]")) (str/split-lines text))]
    (when-let [errors (s/explain-data ::st/schematic parsed)]
      (throw (ExceptionInfo. "" errors)))
    parsed))

