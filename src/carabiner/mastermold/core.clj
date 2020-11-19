(ns carabiner.mastermold.core
  (:require [carabiner.rogue94.common :as c]))

(def style-doc (slurp "resources/publishing/printminis.css"))

(def scale 7)

(def frame-rect
  {:small [5,[0,65]]
   :large [30,[5,35]]
   :steps [70,20]})

(defn rect [x y w h]
  (let [[x y w h] (map (partial * scale) [x y w h])]
    [:rect {:x x :y y :width w :height h :fill "white" :stroke "black" :stroke-width 2}]))

(defn draw-frame []
  (vec
    (reduce
      (fn [out i]
        (let [[step-x step-y] (:steps frame-rect)
              x (* (quot i 10) step-x)
              y (* (mod i 10) step-y)]
          (concat
            out
            (for [spec [:small :large]
                  xOff (get-in frame-rect [spec 1])]
              (let [width (get-in frame-rect [spec 0])]
                (rect (+ x xOff) y width 20))))))
      []
      (range 20))))

(def page-frame (draw-frame))

(defn append-images [out [index url]]
  (let [x (* 70 (rem index 2))
        y (* 20 (quot index 2))
        y1 (* scale (- y 4))
        x1 (* scale (+ x 11))
        x2 (* scale (+ x 41))
        width (* scale 18)
        height (* scale 28)
        tf1 (str "matrix(0,1,-1,0," (* scale (+ x 20)) "," (* scale (- y 10)) ")")
        tf2 (str "matrix(0,1,1,0," (* scale (+ x 50)) "," (* scale (- y 25)) ")")]
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
    [:style style-doc]]
   (->> minis
        (reduce #(concat %1 (repeat (:count %2) (:url %2))) [])
        (partition-all 20)
        (mapv build-page (range))
        (into [:body]))])