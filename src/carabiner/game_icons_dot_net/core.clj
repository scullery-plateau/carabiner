(ns carabiner.game-icons-dot-net.core
  (:require [clojure.pprint :as pp]
            [clojure.java.io :as io]
            [clojure.zip :as zip]
            [clojure.xml :as xml]
            [clojure.string :as str]
            [clojure.data.json :as json]
            [cheshire.core :as cheshire])
  (:import (java.io ByteArrayInputStream)))

(def base-path "game_icons_dot_net")

(defn -main [& args]
  (spit
    (io/file base-path "icons.json")
    (cheshire/generate-string
      (reduce
        (fn [out folder]
          (let [folder-name (.getName folder)]
            (reduce
              (fn [acc file]
                (let [filename (.getName file)
                      id (str folder-name "." (str/replace filename ".svg" ""))
                      d (-> file
                            (slurp)
                            (.getBytes)
                            (ByteArrayInputStream.)
                            (xml/parse)
                            (zip/xml-zip)
                            (first)
                            (:content)
                            (first)
                            (:attrs)
                            (:d))]
                  (assoc acc id d)))
              out
              (.listFiles folder))))
        (sorted-map)
        (.listFiles (io/file base-path "1x1")))
      {:pretty true})))