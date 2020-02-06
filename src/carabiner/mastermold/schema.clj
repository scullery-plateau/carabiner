(ns carabiner.mastermold.schema
  (:require [schema.core :as s]))

(s/defschema Mini
  {:filename s/Str
   :url s/Str
   :count s/Num})

(s/defschema Minis [Mini])