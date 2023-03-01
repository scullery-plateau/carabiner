(ns carabiner.outfitter-new.assets 
  (:require [carabiner.common.hiccup :as hiccup]
            [clojure.java.io :as io]
            [carabiner.common.xml :as x]))

(def basePath "design/outfitter/assets")

(defn load-file [name file]
  (let [[_ svg-args g defs] (x/from-xml (slurp file))]
    ;; todo
    [:svg svg-args g defs]))

(defn compile [name files]
  (let [content (map (partial load-file name) files)]
    (hiccup/to-html
     [:html
      [:head
       [:title name]]
      (cons :body content)])))

(defn -main [& _]
  (let [root (io/file basePath)]
    (doseq [folder (.listFiles root)]
      (let [name (.getName folder)
            outName (str name ".html")]
        (spit
         (io/file basePath outName)
         (compile name (.listFiles folder)))))))
