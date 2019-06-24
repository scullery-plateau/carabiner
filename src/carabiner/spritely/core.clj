(ns carabiner.spritely.core
  (:require [carabiner.common.base64 :as b64]
            [carabiner.common.img :as img]
            [carabiner.common.xml :as x]
            [carabiner.rogue94.file :as r92]
            ))

(defn load-spritely-file [load-data]
  (r92/art-file2json load-data))

(defn compress-data [json]
  (b64/encode-string (r92/art-json2file json)))

(defn build-save-file [{:keys [base64]}]
  (.getBytes (b64/decode-to-string base64)))

(defn build-image [args]
  (r92/build-art-image args))
