(ns carabiner.spritely.core
  (:require [carabiner.common.base64 :as b64]
            [carabiner.rogue94.art :as art]
            [carabiner.rogue94.common :as c]
            [carabiner.common.hiccup :as hml]
            [carabiner.common.img :as img])
  (:import (clojure.lang ExceptionInfo)))

(defn load-spritely-file [text]
  (let [blocks (c/file-prep text)]
    (when (not= 1 (count blocks))
      (throw (ExceptionInfo. "not valid art" {:text text})))
    (art/art-file-to-json (first blocks))))

(defn compress-data [json]
  (b64/encode-string (art/art-json-to-file json)))

(defn build-save-file [{:keys [base64]}]
  (.getBytes (b64/decode-to-string base64)))

(defn json-to-data [json]
  (art/art-json-to-file json))

(defn json-to-img64 [{:keys [art scale]}]
  (->> art
       (art/art-json-to-svg scale)
       (hml/to-img)
       (img/svg-to-64)))

(defn build-image [{:keys [scale] :as args}]
  (->> args
       (build-save-file)
       (String.)
       (c/file-prep)
       (first)
       (art/art-file-to-json)
       (art/art-json-to-svg scale)
       (hml/to-img)))
