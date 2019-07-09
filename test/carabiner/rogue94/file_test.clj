(ns carabiner.rogue94.file-test
  (:require [clojure.test :refer :all]
            [carabiner.rogue94.core :as core]
            [clojure.pprint :as pp]
            [carabiner.rogue94.full-map :as fm]
            [carabiner.common.xml :as x]
            [carabiner.common.img :as img]
            [clojure.java.io :as io]
            [schema.core :as s]
            [carabiner.cobblestone.schema :as ccs]
            [carabiner.common.schema :as cs]
            )
  (:import (clojure.lang ExceptionInfo)
           (java.io ByteArrayInputStream)))

(deftest test-parsing-to-json-colville-simple
  (let [filedata (slurp "resources/cobblestone_sample/colvillesimple.map")
        {:keys [result error]} (try
                                 {:result (core/parse-file-to-json filedata)}
                                 (catch ExceptionInfo e
                                   {:error (.getData e)}))]
    (is (= nil error))
    (try
      (s/validate ccs/CobblestoneData result)
      (catch ExceptionInfo e
        (pp/pprint (.getData e))
        (is false)))))

(deftest test-parsing-to-json-colville-simple-html
  (let [filedata (slurp "resources/cobblestone_sample/colvillesimple.map")
        {:keys [result error]} (try
                                 {:result (core/parse-file-to-json filedata)}
                                 (catch ExceptionInfo e
                                   {:error (.getData e)}))
        printable (fm/full-map-to-printable result)]
    (spit "resources/cobblestone_sample/printable.html" (x/to-xml (x/expand printable)))
    (is (= nil error))
    (try
      (s/validate ccs/CobblestoneData result)
      (catch ExceptionInfo e
        (pp/pprint (.getData e))
        (is false)))))

(deftest test-parsing-to-json-colville-simple-img
  (let [filedata (slurp "resources/cobblestone_sample/colvillesimple.map")
        {:keys [result error]} (try
                                 {:result (core/parse-file-to-json filedata)}
                                 (catch ExceptionInfo e
                                   {:error (.getData e)}))
        img (fm/full-map-json-to-svg 2 result)
        html (x/to-xml (x/expand [:html [:body img]]))
        _ (spit "resources/cobblestone_sample/img-svg.html" html)
        x-pand (x/expand img)
        xml (x/to-xml x-pand)
        _ (spit "resources/cobblestone_sample/img.svg" xml)
        img-bytes (img/svg-to-bytes xml)]
    (io/copy (ByteArrayInputStream. img-bytes) (io/file "resources/cobblestone_sample/colville.png"))
    (is (= nil error))
    (try
      (s/validate ccs/CobblestoneData result)
      (catch ExceptionInfo e
        (pp/pprint (.getData e))
        (is false)))))

(deftest test-parsing-to-json-door-tile
  (let [filedata (slurp "resources/cobblestone_sample/door-tile.art")
        {:keys [result error]} (try
                                 {:result (core/parse-file-to-json filedata)}
                                 (catch ExceptionInfo e
                                   {:error (.getData e)}))]
    (pp/pprint result)
    (is (= nil error))
    (try
      (s/validate cs/Art result)
      (catch ExceptionInfo e
        (pp/pprint (.getData e))
        (is false)))))
