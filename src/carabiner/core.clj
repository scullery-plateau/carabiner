(ns carabiner.core
  (:require
    [clojure.xml :as xml]
    [clojure.java.io :as io]
    [carabiner.img :as img]
    [clojure.edn :as edn])
  (:import (java.util Base64)
           (java.io ByteArrayOutputStream ByteArrayInputStream)))

(def ^:private printer-css
  "@media print {\n    svg {\n        page-break-after: always;\n        margin: 0.25in 0.5in 0.25in 0.5in;\n    }\n    @page {\n        size: landscape;\n        margin: 0;\n    }\n}")

(defn svg-to-64 [svg]
  (let [xml (with-out-str (xml/emit svg))
        in-stream (ByteArrayInputStream. (.getBytes xml))
        out (ByteArrayOutputStream.)
        _ (img/rasterize :png {} in-stream out)
        _ (.flush out)
        encoded (String. (.encodeToString (Base64/getEncoder) (.toByteArray out)))]
    encoded))

(defn build-svgs-from-tile-docs [docs]
  ;; todo --
  )

(defn build-html-img-from-tile-docs-text [in-str]
  (let [docs (edn/read-string in-str)
        svgs (build-svgs-from-tile-docs docs)
        build-page {:tag :html
                    :content [{:tag :head
                               :content [{:tag :style
                                          :content [printer-css]}]}
                              {:tag :body
                               :content (vals svgs)}]}]
    (with-out-str (xml/emit-element build-page))))

(defn -main [& [filename]]
  (let [path (.getParent (io/file filename))
        in-str (slurp path)
        build-html (build-html-img-from-tile-docs-text in-str)]
    (spit (.getAbsolutePath (io/file path "build.html")) build-html)))