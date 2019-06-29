(ns carabiner.cobblestone.core
  (:require [carabiner.rogue94.common :as c]
            [carabiner.rogue94.full-map :as fm]
            [carabiner.common.base64 :as b64]
            [carabiner.common.hiccup :as hml]
            )
  (:import (clojure.lang ExceptionInfo)))

(defn load-cobblestone-file
  "takes map data text and returns json obj pre-encoding"
  [text]
  (let [blocks (c/file-prep text)]
    (when-not (< 4 (count blocks))
      (throw (ExceptionInfo. "not valid art" {:text text})))
    (fm/full-map-file-to-json blocks)))

(defn compress-data
  "takes the map data json and returns the base64"
  [spritely-data]
  (-> spritely-data
      fm/full-map-json-to-file
      b64/encode-string))

(defn build-save-file
  "takes the map data base64 and returns the save data text as bytes"
  [{:keys [base64]}]
  (-> base64
      (b64/decode-to-string)
      (.getBytes)))

(defn build-map-image
  "takes the map data base64 and returns the png image data as bytes"
  [{:keys [scale] :as args}]
  (->> (build-save-file args)
       (String.)
       (c/file-prep)
       (fm/full-map-file-to-json)
       (fm/full-map-json-to-svg scale)
       (hml/to-img)))

(defn build-printable
  "takes the map data base64 and returns the printable html as bytes"
  [args]
  (->> (build-save-file args)
       (String.)
       (c/file-prep)
       (fm/full-map-file-to-json)
       (fm/full-map-to-printable)))
