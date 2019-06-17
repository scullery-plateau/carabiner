(ns carabiner.core
  (:require
    [clojure.xml :as xml]
    [clojure.java.io :as io]
    [clojure.edn :as edn]))

(def ^:private printer-css
  "@media print {\n    svg {\n        page-break-after: always;\n        margin: 0.25in 0.5in 0.25in 0.5in;\n    }\n    @page {\n        size: landscape;\n        margin: 0;\n    }\n}")

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