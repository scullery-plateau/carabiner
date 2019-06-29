(ns carabiner.spritely.core
  (:require [carabiner.common.base64 :as b64]
            [carabiner.rogue94.art :as art]
            [carabiner.rogue94.common :as c]
            [carabiner.common.hiccup :as hml])
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

(defn build-image [{:keys [scale] :as args}]
  (let [file-bytes (build-save-file args)
        file-text (String. file-bytes)
        file-blocks (c/file-prep file-text)
        block (first file-blocks)
        json (art/art-file-to-json block)
        svg (art/art-json-to-svg scale json)
        img-bytes (hml/to-img svg)
        ]
    img-bytes))
