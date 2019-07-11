(ns carabiner.rogue94.full-map
  (:require [carabiner.rogue94.common :as c]
            [carabiner.rogue94.file-schema :as fs]
            [clojure.string :as str]
            [carabiner.rogue94.char-index :as ch]
            [carabiner.rogue94.coords :as coords]
            [clojure.pprint :as pp]))

(def print-style (slurp "resources/publishing/print.css"))

(defn full-map-file-to-json [[my-map paging mapping palettes & tiles]]
  (let [paging (mapv
                 (fn [page]
                   (mapv
                     #(if (re-matches #"\d+" %)
                        (Integer/parseInt %) %)
                     page))
                 paging)
        mapping (mapv
                  #(vec (cons (.charAt ^String (first %) 0) (rest %)))
                  mapping)
        full-map (into [my-map paging mapping palettes] tiles)
        valid (c/validate full-map ::fs/full-map)
        {:keys [paging mapping palettes tiles] my-map :map} valid
        char-map (reduce #(assoc %1 (keyword (str (:char %2))) (update (dissoc %2 :char) :transforms set)) {} mapping)
        map-chars (set (keys char-map))
        palettes (reduce #(assoc %1 (keyword (:name %2)) (mapv c/resolve-color (:palette %2))) {} palettes)
        tiles (reduce #(assoc %1 (keyword (:tile-name %2)) (c/coordinate-tile (:pixels %2))) {} tiles)
        paging (loop [prev-page-number -1
                      panel-number 0
                      pages (cons (:first-page paging) (:pages paging))
                      out []]
                 (if (empty? pages)
                   out
                   (let [{:keys [fromX fromY from-dim to]} (first pages)
                         page-number (if to prev-page-number (inc prev-page-number))
                         next-panel-number (if (= page-number prev-page-number) (inc panel-number) 0)
                         {:keys [toX toY] :or {toX 0 toY 0}} to
                         {:keys [from-width from-height] :or {from-width (- 8 toX) from-height (- 10 toY)}} from-dim
                         page {:fromX fromX :fromY fromY :width from-width :height from-height
                               :toX toX :toY toY :page page-number :panel next-panel-number}]
                     (recur page-number next-panel-number (rest pages) (conj out page)))))]
    {:map      (c/coordinate-map my-map map-chars)
     :paging   paging
     :mapping  char-map
     :palettes palettes
     :tiles    tiles}))

(defn full-map-json-to-file [{:keys [paging mapping palettes tiles] my-map :map}]
  (let [my-map (c/pixelate-map my-map)
        paging (mapv
                 (fn [{:keys [fromX fromY width height toX toY]}]
                   (let [temp-w (- 8 toX)
                         temp-h (- 10 toY)
                         dim (if (or (< width temp-w)
                                     (< height temp-h))
                               [width height])
                         to (if (or (< 0 toX)
                                    (< 0 toY))
                              [">" toX toY]
                              [])]
                     (str/join " " (concat [fromX fromY] dim to))))
                 paging)
        mapping (mapv
                  (fn [[my-char {:keys [tile-name palette-name transforms]}]]
                    (->> transforms
                         (into [my-char tile-name palette-name])
                         (str/join " ")
                         ))
                  mapping)
        palettes (mapv
                   (fn [[palette-name palette]]
                     (->> palette
                          (into [palette-name])
                          (str/join " ")))
                   palettes)
        tiles (mapv
                (fn [[tile-name pixels]]
                  (->> pixels
                       c/pixelate-tile
                       (into [tile-name])
                       ))
                tiles)]
    (->> tiles
         (into [my-map paging mapping palettes])
         (map (partial str/join (System/lineSeparator)))
         (str/join (str (System/lineSeparator) (System/lineSeparator))))))

(defn compile-mapping [{:keys [mapping palettes tiles]}]
  (reduce-kv
    (fn [out my-char {:keys [palette-name tile-name transforms]}]
      (let [palette (get palettes (keyword palette-name))
            tile (get tiles (keyword tile-name))
            char-name (nth ch/names (ch/to-int (first (name my-char))))
            transform (apply coords/tile-transformer transforms)]
        (assoc
          out
          my-char
          {:palette palette
           :tile (transform tile)
           :char-name char-name})))
    {} mapping))

(defn build-defs [scale compiled]
  (reduce-kv
    (fn [out _ {:keys [palette tile char-name]}]
      (conj out
            (into [:pattern {:id char-name :x 0 :y 0 :width 1 :height 1}]
                  (c/gridify palette tile 16 16 scale 0 0))))
    [:defs]
    compiled))

(def panel-colors
  ["black" "red" "green" "blue" "yellow" "magenta" "cyan" "gray"])

(defn panel-outline [panel-index]
  (nth panel-colors panel-index))

(defn build-tiles
  ([tile-size my-map init outline-tile?]
   (build-tiles tile-size my-map [] init outline-tile?))
  ([tile-size my-map panels init outline-tile?]
   (reduce
     (fn [out {:keys [toX toY width height panel]}]
       (let [[x y w h] (mapv (partial * tile-size) [toX toY width height])]
         (conj out [:rect {:x x :y y :width w :height h :fill "none"
                           :stroke (panel-outline panel) :stroke-width 3}])))
     (reduce-kv
       (fn [out coord my-char]
         (let [char-name (nth ch/names (ch/to-int my-char))
               [x y] (map (partial * tile-size) (coords/parse coord))]
           (conj out [:rect {:x      x :y y :width tile-size :height tile-size
                             :fill   (str "url(#" char-name ")") :stroke "black"
                             :stroke-width (if outline-tile? 1 0)}])))
       init
       my-map)
     panels)))

(defn full-map-json-to-svg [scale {my-map :map :as full-map}]
  (let [tile-size (* 16 scale)
        compiled (compile-mapping (select-keys full-map [:mapping :palettes :tiles]))
        [width height] (coords/dim-coords my-map)]
    (build-tiles tile-size my-map
      [:svg
       {:width  (* tile-size width)
        :height (* tile-size height)
        :xmlns  "http://www.w3.org/2000/svg"}
       (build-defs scale compiled)] false)))

(defn full-map-to-printable [{:keys [paging] my-map :map :as full-map}]
  (let [compiled (compile-mapping (select-keys full-map [:mapping :palettes :tiles]))
        [width height] (coords/dim-coords my-map)
        pages (reduce
                (fn [out {:keys [width height fromX fromY toX toY] page-num :page :as full-panel}]
                  (let [{:keys [tiles panels]} (get out page-num {:tiles {} :panels []})]
                    (->>
                      (for [x (range width)
                            y (range height)]
                        (let [from (coords/from-ints (+ x fromX) (+ y fromY))
                              to (coords/from-ints (+ x toX ) (+ y toY ))
                              my-char (get my-map from)]
                          (if my-char [to my-char] [])))
                      (filter not-empty)
                      (into tiles)
                      (assoc {} :panels (conj panels full-panel) :tiles)
                      (assoc out page-num))))
                {}
                paging)
        pages (mapv (partial get pages) (range (count (keys pages))))
        scale 6
        tile-size (* 16 scale)]
    [:html
     [:head
      [:title "Print Your Map"]
      [:style print-style]]
     (into
       [:body
        [:div {:class "defs"}
         (build-tiles
           tile-size my-map
           [:svg
            {:width "8in"
             :height "10in"
             :viewBox (str/join " " [0 0 (* tile-size width) (* tile-size height)])}
            (build-defs scale compiled)] false)]
        [:div {:class "page"}
         (reduce
           (fn [outlist {:keys [panels]}]
               (reduce
                 (fn [out {:keys [fromX fromY width height panel page]}]
                   (let [[x y w h] (mapv (partial * tile-size) [fromX fromY width height])]
                     (conj out
                       [:rect {:x x :y y :width w :height h :stroke (panel-outline panel)
                               :fill "none" :stroke-width scale}]
                       [:text {:x (+ x (/ w 2)) :y (+ y (/ h 2))
                               :alignment-baseline "middle"
                               :text-anchor "middle"
                               :style (str "font-size:" tile-size)} (str page)])))
                 outlist panels))
           [:svg
            {:width "8in"
             :height "10in"
             :viewBox (str/join " " [0 0 (* tile-size width) (* tile-size height)])}]
           pages)]]
       (mapv
         (fn [{:keys [tiles panels]}]
           [:div {:class "page"}
            (build-tiles tile-size tiles panels
              [:svg {:width (* 8 tile-size)
                     :height (* 10 tile-size)}]
              true)])
         pages))]))
