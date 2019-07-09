(ns carabiner.common.img
  (:require [carabiner.common.base64 :as b64])
  (:import (org.apache.batik.transcoder.image PNGTranscoder JPEGTranscoder)
           (java.io InputStream OutputStream ByteArrayInputStream ByteArrayOutputStream)
           (org.apache.batik.transcoder TranscoderInput TranscoderOutput)))

(def ^:private types {:jpeg [(JPEGTranscoder.) {} {:height  [PNGTranscoder/KEY_HEIGHT float]
                                                   :width   [PNGTranscoder/KEY_WIDTH float]
                                                   :indexed [PNGTranscoder/KEY_INDEXED int]}]
                      :png  [(PNGTranscoder.) {:quality 1} {:quality [JPEGTranscoder/KEY_QUALITY float]
                                                            :height  [JPEGTranscoder/KEY_HEIGHT float]
                                                            :width   [JPEGTranscoder/KEY_WIDTH float]}]})

(defn rasterize [type opts ^InputStream input ^OutputStream out]
  (when-not (contains? types type)
    (throw (IllegalArgumentException. (str "'" type "' is not a valid type."))))
  (let [[transcoder default-opts hints-map] (types type)]
    (doseq [[option value] (merge default-opts opts)]
      (when-let [[opt-key coerce] (-> option keyword hints-map)]
        (.addTranscodingHint transcoder opt-key (coerce value))))
    (.transcode transcoder
                (TranscoderInput. input)
                (TranscoderOutput. out))))

(defn- svg-to-stream ^ByteArrayOutputStream [^String svg] {}
  (let [in-stream (ByteArrayInputStream. (.getBytes svg))
        out (ByteArrayOutputStream.)]
    (rasterize :png {} in-stream out)
    (.flush out)
    out))

(defn svg-to-bytes [svg]
  (.toByteArray (svg-to-stream svg)))

(defn svg-to-64 [svg]
  (b64/encode-stream  (svg-to-stream svg)))

