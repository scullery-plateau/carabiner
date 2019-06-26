(ns carabiner.spritely.core
  (:require [carabiner.common.base64 :as b64]
            [carabiner.rogue94.art :as art]
            ))

(defn load-spritely-file [load-data]
  (art/art-file2json load-data))

(defn compress-data [json]
  (b64/encode-string (art/art-json2file json)))

(defn build-save-file [{:keys [base64]}]
  (.getBytes (b64/decode-to-string base64)))

(defn build-image [args]
  (art/build-art-image args))
