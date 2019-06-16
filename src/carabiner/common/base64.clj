(ns carabiner.common.base64
  (:import java.util.Base64
           (java.io ByteArrayInputStream ByteArrayOutputStream)))

(defn ^String encode-string [^String to-encode]
  (.encodeToString (Base64/getEncoder) (.getBytes to-encode)))

(defn ^String decode-to-string [^String to-decode]
  (String. (.decode (Base64/getDecoder) ^String to-decode)))

(defn ^String encode-stream [^ByteArrayOutputStream to-encode]
  (.encodeToString (Base64/getEncoder) (.toByteArray to-encode)))

(defn ^ByteArrayInputStream decode-to-stream [^String to-decode]
  (ByteArrayInputStream. (.decode (Base64/getDecoder) ^String to-decode)))
