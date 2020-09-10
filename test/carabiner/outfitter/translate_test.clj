(ns carabiner.outfitter.translate-test
  (:require [clojure.test :refer :all]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [clojure.edn :as edn]
            [carabiner.outfitter.translate :as tr]
            [carabiner.outfitter.shapes-test :as shapes]
            [carabiner.common.img :as img]
            [carabiner.common.hiccup :as h])
  (:import (clojure.lang ExceptionInfo)))

(deftest test-schematic->svg
  (let [demos-folder (io/file "test-resources/outfitter/samples")
        demos ["superman"]]
    (doseq [demo demos]
      (pp/pprint demo)
      (spit
        (io/file demos-folder (str demo "-out.edn"))
        (try
          (let [svg (tr/schematic->svg
                      (edn/read-string
                        (slurp
                          (io/file demos-folder (str demo ".edn")))))
                encoded (-> svg
                            (h/to-text)
                            (img/svg-to-64))
                img (str "data:image/png;base64," encoded)]
            (spit
              (io/file demos-folder (str demo "-out.html"))
              (shapes/build-html
                {:title demo}
                [:table
                 [:tr
                  [:td svg]
                  [:td [:img {:src img}]]]]))
            (with-out-str (pp/pprint svg)))
          (catch ExceptionInfo x
            (with-out-str
              (pp/pprint
                (ex-data x))))))
      (println (str demo " completed")))))