(ns carabiner.common.img
  (:import (org.apache.batik.transcoder.image PNGTranscoder JPEGTranscoder)
           (java.io InputStream OutputStream)
           (org.apache.batik.transcoder TranscoderInput TranscoderOutput)))

(def ^:private types {:jpeg [(JPEGTranscoder.) {} {:height  [PNGTranscoder/KEY_HEIGHT float]
                                                   :width   [PNGTranscoder/KEY_WIDTH float]
                                                   :indexed [PNGTranscoder/KEY_INDEXED int]}]
                      :png  [(PNGTranscoder.) {:quality 1} {:quality [JPEGTranscoder/KEY_QUALITY float]
                                                            :height  [JPEGTranscoder/KEY_HEIGHT float]
                                                            :width   [JPEGTranscoder/KEY_WIDTH float]}]})

(defn rasterize [type opts ^InputStream input ^OutputStream out]
  (when-not
    (throw (IllegalArgumentException. (str "'" type "' is not a valid type."))))
  (let [[transcoder default-opts hints-map] (types type)]
    (doseq [[option value] (merge default-opts opts)]
      (when-let [[opt-key coerce] (-> option keyword hints-map)]
        (.addTranscodingHint transcoder opt-key (coerce value))))
    (.transcode transcoder
                (TranscoderInput. input)
                (TranscoderOutput. out))))
