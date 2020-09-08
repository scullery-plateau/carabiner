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

(defn map-layer [layer-type {:keys [paths] {:keys [width height offset]} :dim :as layer}]
  (assoc
    (select-keys layer [:label])
    :paths
    (mapv #(update % :meta (update-meta layer-type)) paths)
    :dim
    {:offset offset
     :frame (mapv parse-px [width height])}))

(defn map-part [part]
  (reduce-kv #(assoc %1 %2 (map-layer %2 %3)) {} part))

(defn map-part-file [file]
  (map map-part (edn/read-string (slurp file))))

(defn map-layer-file [file]
  (mapv (partial map-layer nil) (edn/read-string (slurp file))))

(defn build-dataset [body-type]
  (let [root (io/file "design/outfitter")
        dataset-file (io/file root "datasets" (str body-type ".edn"))
        body-folder (io/file root "items/body" body-type)
        parts-folders (->> (.listFiles body-folder)
                           (filterv #(.isDirectory ^File %)))
        p&s-folder (io/file root "items/patterns&shading" body-type)
        patterns-file (io/file p&s-folder "patterns/patterns.edn")
        shading-file (io/file p&s-folder "shading/shading.edn")
        parts (reduce
                #(assoc
                   %1
                   (keyword (.getName %2))
                   (map-part-file (io/file %2 "index-data.edn")))
                {}
                parts-folders)
        [shading patterns] (mapv map-layer-file [shading-file patterns-file])
        mapper #(type (second %))]
    (spit dataset-file
          (with-out-str
            (pp/pprint
              {:parts parts
               :shading shading
               :patterns patterns})))
    (spit (io/file root (str "datasets/" body-type "-metas.edn"))
          (with-out-str
            (pp/pprint
              (->> (concat (flatten (mapv vals (flatten (vals parts)))) shading patterns)
                   (mapv :paths)
                   (flatten)
                   (mapv :meta)
                   (reduce into [])
                   (group-by first)
                   (reduce-kv #(assoc %1 %2 (set (mapv mapper %3))) {})))))))


(deftest test-build-dataset
  (build-dataset "fit"))

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
