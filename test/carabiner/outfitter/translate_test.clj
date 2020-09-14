(ns carabiner.outfitter.translate-test
  (:require [clojure.test :refer :all]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [clojure.edn :as edn]
            [carabiner.outfitter.translate :as tr]
            [carabiner.outfitter.shapes-test :as shapes]
            [carabiner.common.img :as img]
            [carabiner.common.hiccup :as h]
            [clojure.string :as str])
  (:import (clojure.lang ExceptionInfo)))

(deftest build-menu
  (let [colors {:base "#00f" :detail "#0f0" :outline "#f00"}
        src (io/file "resources/outfitter")
        dest (io/file "resources/public/outfitter")
        body-types (mapv #(.getName %) (.listFiles src))]
    (.mkdirs dest)
    (spit
      (io/file dest "menu.html")
      (shapes/build-html
        {:title "Menu"}
        (into
          [:ul]
          (mapv
            #(vector :li [:a {:href (str % "/menu.html")} %])
            body-types))))
    (doseq [body-type body-types]
      (let [body-src (io/file src body-type)
            parts-folder (io/file body-src "parts")
            parts (mapv #(first (str/split (.getName %) #"\.")) (.listFiles parts-folder))
            body-dest (io/file dest body-type)]
        (.mkdirs body-dest)
        (doseq [part parts]
          (spit
            (io/file body-dest (str part ".html"))
            (shapes/build-html
              {:title part}
              (into
                [:div {:style "background-color: grey;"}]
                (mapv
                  (fn [index {:as part-option}]
                    (let []
                      [:div
                       {:alt index :title index :style "display: inline;"}
                       (into [:svg (tr/build-svg-args (tr/build-dim [[part-option {}]] 5 1 [1 1]))]
                             [(tr/build-layer [] [] [1 1] [0 0] [part-option colors])])]))
                  (range)
                  (edn/read-string (slurp (io/file parts-folder (str part ".edn")))))))))
        (doseq [pattern ["patterns" "shading"]]
          (spit
            (io/file body-dest (str pattern ".html"))
            (shapes/build-html
              {:title pattern}
              (into
                [:div {:style "background-color: green;"}]
                (mapv
                  (fn [index {:keys [paths defs dim]}]
                    (let [{[width height] :frame [min-x min-y] :min} dim
                          content [(tr/build-group paths {})]
                          content (if defs (conj content (into [:defs] (mapv tr/build-gradient defs))) content)]
                      [:div
                       {:alt index :title index :style "display: inline;"}
                       (into [:svg (tr/build-svg-args {:min-x min-x :min-y min-y :width width :height height})] content)]))
                  (range)
                  (edn/read-string (slurp (io/file body-src (str pattern ".edn")))))))))
        (spit
          (io/file body-dest "menu.html")
          (shapes/build-html
            {:title "Menu"}
            (reduce
              into
              [:ul]
              [(mapv #(vector :li [:a {:href (str % ".html")} %]) parts)
               (mapv #(vector :li [:a {:href (str % ".html")} %]) ["patterns" "shading"])])))))))

(deftest test-schematic->svg
  (let [demos-folder (io/file "test-resources/outfitter/samples")
        demos ["iron-man"]]
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
            (println "exception thrown")
            (with-out-str
              (pp/pprint
                (ex-data x))))))
      (println (str demo " completed")))))