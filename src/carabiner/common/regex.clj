(ns carabiner.common.regex)

(def hex-color-pattern #"[#][a-fA-F0-9]{6}")

(def name-pattern #"[a-zA-Z]([a-zA-Z0\-_]*[a-zA-Z0-9])?")

(def coord-pattern #"\d+[x]\d+")