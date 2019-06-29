(ns carabiner.schema
  (:require [schema.core :as s]))

(s/defschema ImgDownloadArgs
  {:base64 s/Str
   :scale s/Str
   (s/optional-key :filename) s/Str})

(s/defschema DownloadArgs
  {:base64 s/Str
   (s/optional-key :filename) s/Str})
