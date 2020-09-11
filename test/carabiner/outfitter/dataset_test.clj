(ns carabiner.outfitter.dataset-test
  (:require [clojure.test :refer :all]
            [clojure.java.io :as io]
            [clojure.edn :as edn]
            [clojure.string :as str]
            [clojure.pprint :as pp])
  (:import (java.io File)))

(defn parse-px [numstr]
  (Double/parseDouble (str/replace numstr "px" "")))

(defmulti update-meta identity)

(defmethod update-meta :base [_]
  #(dissoc % :fill))

(defmethod update-meta :detail [_]
  #(dissoc % :fill))

(defmethod update-meta :outline [_]
  #(dissoc % :stroke))

(defmethod update-meta :default [_] identity)

(defn map-layer [layer-type {:keys [paths] {:keys [width height offset min max]} :dim :as layer}]
  (assoc
    (select-keys layer [:label :defs])
    :paths
    (mapv #(update % :meta (update-meta layer-type)) paths)
    :dim
    {:offset offset
     :frame (mapv parse-px [width height])
     :min min
     :max max}))

(defn map-part [part]
  (reduce-kv #(assoc %1 %2 (map-layer %2 %3)) {} part))

(defn map-part-file [file]
  (mapv map-part (edn/read-string (slurp file))))

(defn map-layer-file [file]
  (mapv (partial map-layer nil) (edn/read-string (slurp file))))

(defn build-dataset-folder [body-type]
  (let [items-folder (io/file "design/outfitter/items")
        body-folder (io/file items-folder "body" body-type)
        parts-folders (filterv #(.isDirectory %) (.listFiles body-folder))
        p&s-folder (io/file items-folder "patterns&shading" body-type)
        dest-folder (io/file "resources/outfitter" body-type)
        parts-dest (io/file dest-folder "parts")
        patterns-file (io/file p&s-folder "patterns/patterns.edn")
        shading-file (io/file p&s-folder "shading/shading.edn")
        [shading patterns] (mapv map-layer-file [shading-file patterns-file])]
    (.mkdir dest-folder)
    (.mkdir parts-dest)
    (spit
      (io/file dest-folder "shading.edn")
      (with-out-str (pp/pprint shading)))
    (spit
      (io/file dest-folder "patterns.edn")
      (with-out-str (pp/pprint patterns)))
    (doseq [part-folder parts-folders]
      (spit
        (io/file
          parts-dest
          (str (.getName part-folder) ".edn"))
        (with-out-str
          (pp/pprint
            (map-part-file
              (io/file part-folder "index-data.edn"))))))))

(deftest test-build-dataset-folder
  (build-dataset-folder "woman"))

(deftest test-torsos
  (let [root (io/file "design/outfitter/items/body")]
    (spit
      (io/file root "torsos.edn")
      (with-out-str
        (pp/pprint
          (reduce
            #(assoc %1 %2 (-> (io/file root %2 "torso/index-data.edn")
                              (slurp)
                              (edn/read-string)
                              (get-in [0 :outline :dim])
                              (select-keys [:min :max])))
            {}
            ["fit" "hulk" "superman" "woman"]))))))
