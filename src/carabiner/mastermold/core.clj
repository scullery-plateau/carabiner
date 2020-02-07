(ns carabiner.mastermold.core
  (:require [carabiner.rogue94.common :as c]))

(def scale 7)

(def page-frame [])

(defn append-images [out [index url]]
  (let [x (* 70 (rem index 2))
        y (* 20 (quot index 2))
        y1 (* scale (- y 4))
        x1 (* scale (+ x 11))
        x2 (* scale (+ x 41))
        width (* scale 18)
        height (* scale 28)
        tf1 (str "rotate(90 " (* scale (+ x 20)) " " (* scale (+ y 10)))
        tf2 (str "rotate(-90 " (* scale (+ x 50)) " " (* scale (+ y 10)))]
    (conj out
          [:image {:href url :x x1 :y y1 :width width :height height :transform tf1}]
          [:image {:href url :x x2 :y y1 :width width :height height :transform tf2}])))

(defn build-page [page-num page-urls]
  [:div {:class (if (zero? page-num) "firstPage" "page")}
   (->> page-urls
        (mapv vector (range))
        (reduce append-images page-frame)
        (into [:svg {:width "7in" :height "10in" :viewBox (str "0 0 " (* scale 2 70) " " (* scale 10 20))}]))])

(defn build-printable [minis]
  [:html
   [:head
    [:title "Print Your Map"]
    [:style c/print-style]]
   (->> minis
        (reduce #(concat %1 (repeat (:count %2) (:url %2))) [])
        (partition-all 20)
        (mapv build-page (range))
        (into [:body]))])