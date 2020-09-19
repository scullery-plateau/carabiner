(ns carabiner.outfitter.translate
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.spec.alpha :as s]
            [carabiner.outfitter.schematic :as sc]
            [clojure.string :as str]
            [clojure.pprint :as pp])
  (:import (clojure.lang ExceptionInfo)))

(def datasets-path "resources/outfitter/data")

(def torso-tops
  {:fit      106.35
   :hulk     169.1
   :superman 146.9
   :woman    93.6})

(def body-scales
  {:lanky  [0.85 1.15]
   :thin   [0.85 1.0]
   :stocky [0.85 0.75]
   :petite [0.7 0.7]})

(defn out-of-range-filter-fn [my-coll]
  #(>= % (count my-coll)))

(defn validate-against-dataset [ds-parts ds-patterns ds-shading layers patterns shading]
  (let [bad-parts (->> (mapv first layers)
                       (set)
                       (group-by first)
                       (reduce-kv
                         #(let [ds-part (get ds-parts %2)
                                bad (->> %3
                                         (map second)
                                         (into (sorted-set))
                                         (filterv (out-of-range-filter-fn ds-part)))]
                            (if (zero? (count bad)) %1 (assoc %1 %2 bad)))
                         {}))
        bad-patterns (filterv (out-of-range-filter-fn ds-patterns) patterns)
        bad-shading (filterv (out-of-range-filter-fn ds-shading) shading)
        bad-bits (merge
                   (if (empty? bad-parts) {} {:bad-parts bad-parts})
                   (if (empty? bad-patterns) {} {:bad-patterns bad-patterns})
                   (if (empty? bad-shading) {} {:bad-shading bad-shading}))]
    (when-not (empty? bad-bits) bad-bits)))

(def init-minmax-xy
  {:min-x (double Integer/MAX_VALUE)
   :min-y (double Integer/MAX_VALUE)
   :max-x (double Integer/MIN_VALUE)
   :max-y (double Integer/MIN_VALUE)})

(defn build-d [d]
  (->> d
       (map #(into [(name (first %))] (flatten (rest %))))
       (flatten)
       (str/join " ")))

(defn build-path [{:keys [meta path]}]
  [:path (assoc meta :d (build-d path))])

(defn build-group [paths args]
  (into [:g args] (map build-path paths)))

(defn build-layer-group [[paths key color color-fn]]
  (when (and paths (or (not key) (and key color)))
    (let [color-fn (or color-fn identity)
          args (if key (assoc {} key (color-fn color)) {})]
      (build-group paths args))))

(defn build-layer-matrix [[scale-x scale-y] [move-x move-y] flip?]
  (let [scale-x (or scale-x 1.0)
        scale-y (or scale-y 1.0)
        move-x (or move-x 0.0)
        move-y (or move-y 0.0)
        scale-x (if flip? (- scale-x) scale-x)]
    [scale-x 0.0 0.0 scale-y move-x move-y]))

(defn build-layer-transform [resize move flip?]
  (let [matrix (build-layer-matrix resize move flip?)]
    (when-not (= matrix [1.0 0.0 0.0 1.0 0.0 0.0])
      (str "matrix(" (str/join ", " matrix) ")"))))

(defn rollup-min-max [dims]
  (let [{:keys [min-x max-x min-y max-y]}
        (reduce
          #(let [{:keys [min-x max-x min-y max-y]} %1
                 {[x1 y1] :min [x2 y2] :max} %2]
             {:min-x (min min-x x1)
              :max-x (max max-x x2)
              :min-y (min min-y y1)
              :max-y (max max-y y2)})
          init-minmax-xy
          dims)]
    {:min [min-x min-y]
     :max [max-x max-y]}))

(defn build-part-dim [[part {:keys [resize move]}]]
  (let [dims (mapv :dim (vals part))
        {[min-x min-y] :min [max-x max-y] :max} (rollup-min-max dims)
        [scale-x _ _ scale-y move-x move-y] (build-layer-matrix resize move false)
        [min-x max-x] (mapv #(->> % (* scale-x) (+ move-x)) [min-x max-x])
        [min-y max-y] (mapv #(->> % (* scale-y) (+ move-y)) [min-y max-y])]
    {:min [min-x min-y]
     :max [max-x max-y]}))

(defn build-dim [good-parts padding scale-image [body-resize-x body-resize-y]]
  (let [dims (mapv build-part-dim good-parts)

        {[min-x min-y] :min [max-x max-y] :max} (rollup-min-max dims)

        diff-x (+ padding (max (Math/abs ^double min-x) (Math/abs ^double max-x)))
        min-x (- diff-x)
        min-y (- min-y padding)
        max-y (+ max-y padding)
        width (* 2 diff-x)
        height (- max-y min-y)
        [min-x min-y width height] (mapv (partial * scale-image) [min-x min-y width height] [body-resize-x body-resize-y body-resize-x body-resize-y])]
    {:min-x  min-x
     :min-y  min-y
     :width  width
     :height height}))

(defn build-svg-args [{:keys [min-x min-y width height]}]
  {:width   (str width "px")
   :height  (str height "px")
   :viewBox (str/join " " [min-x min-y width height])})

(defn label-ref [label]
  (str "url(#" label ")"))

(defn build-layer [pattern-labels shading-labels body-resize head-shift part]
  (let [[{:keys [base detail outline shadow]}
         {:keys      [pattern shading resize move flip?]
          base-color :base detail-color :detail outline-color :outline
          :or        {base-color "#ffffff" detail-color "#ffffff" outline-color "#000000"}}
         part-type] part
        resize (or resize [1 1])
        move (or move [0 0])
        [resize move] (if (and part-type (#{:beard :ears :eyebrows :eyes :hair :hat :head :mask :mouth :nose} part-type))
                        [resize [(+ (first head-shift) (first move)) (+ (second head-shift) (second move))]]
                        [[(* (first body-resize) (first resize)) (* (second body-resize) (second resize))] move])
        pattern-label (get pattern-labels pattern)
        shading-label (get shading-labels shading)
        label-ref #(str "url(#" % ")")
        [base detail outline shadow] (mapv :paths [base detail outline shadow])
        base (if (nil? base) [] base)
        p&s-paths (into base detail)
        layer-transform (build-layer-transform resize move flip?)
        group-args (if layer-transform {:transform layer-transform} {})]
    (into
      [:g group-args]
      (reduce
        #(if-let [group (build-layer-group %2)] (conj %1 group) %1)
        []
        [[base :fill base-color]
         [detail :fill detail-color]
         [p&s-paths :fill shading-label label-ref]
         [p&s-paths :fill pattern-label label-ref]
         [outline :stroke outline-color]
         [shadow]]))))

(defn build-shading-args [label {[width height] :frame}]
  {:id           label
   :patternUnits "userSpaceOnUse"
   :x            (- (double (/ width 2)))
   :y            (- (double (/ height 2)))
   :width        width
   :height       height})

(defn build-pattern-args [label {[off-x off-y] :offset [width height] :frame}]
  {:id           label
   :patternUnits "userSpaceOnUse"
   :x            (- off-x)
   :y            (- off-y)
   :width        width
   :height       height})

(defn build-group-args [{:keys [offset]}]
  (if (= offset [0.0 0.0]) {} {:transform (str "matrix(" (str/join ", " (into [1.0 0.0 0.0 1.0] offset)) ")")}))

(defn build-shading [{:keys [label dim paths]}]
  [:pattern
   (build-shading-args label dim)
   (build-group paths (build-group-args dim))])

(defn build-pattern [{:keys [label dim paths]}]
  [:pattern
   (build-pattern-args label dim)
   (build-group paths (build-group-args dim))])

(defn build-gradient [{:keys [meta stops]}]
  (into [:linearGradient meta] (mapv (partial vector :stop) stops)))

(defn gradient-defs [acc defs]
  (into acc (mapv build-gradient defs)))

(defn scale-matrix [scale-image body-resize]
  (str "matrix(" (* scale-image (first body-resize)) ", 0.0, 0.0, " (* scale-image (second body-resize)) ", 0.0, 0.0)"))

(defn get-body-scale [body-type body-scale]
  (let [body-resize (get body-scales body-scale [1.0 1.0])
        torso-top (get torso-tops body-type)
        y-shift (* torso-top 0.8 (- 1 (second body-resize)))]
    {:body-resize body-resize
     :head-shift [0.0 y-shift]}))

(def scale-image 2)

(defn schematic->svg [schematic]
  (pp/pprint schematic)
  (when-let [errors (s/explain-data ::sc/schematic schematic)]
    (throw (ExceptionInfo. "invalid schematic" errors)))
  (let [[body-type & args&layers] schematic

        [{:keys [bg-color bg-pattern padding body-scale] :or {padding 10}} layers]
        (if (map? (first args&layers)) [(first args&layers) (rest args&layers)] [{} args&layers])

        {:keys [body-resize head-shift]} (get-body-scale body-type body-scale)

        layers (mapv (fn [[part-type index & {:as args}]] [[part-type index] args]) layers)
        dataset-folder (io/file datasets-path (name body-type))
        [ds-patterns ds-shading] (mapv #(edn/read-string (slurp (io/file dataset-folder (str % ".edn")))) ["patterns" "shading"])
        parts-folder (io/file dataset-folder "parts")
        part-types (into (sorted-set) (mapv #(-> % (first) (first)) layers))
        ds-parts (reduce #(assoc %1 %2 (edn/read-string (slurp (io/file parts-folder (str (name %2) ".edn"))))) {} part-types)
        [patterns shading] (mapv #(->> layers (mapv second) (filterv %) (mapv %) (into (sorted-set))) [:pattern :shading])]
    (when-let [errors (validate-against-dataset ds-parts ds-patterns ds-shading layers patterns shading)]
      (throw (ExceptionInfo. "invalid schematic: indicies out of range" errors)))
    (let [good-parts (mapv #(vector (get-in ds-parts (first %)) (second %) (first (first %))) layers)
          good-shading (mapv (partial get ds-shading) shading)
          good-patterns (mapv (partial get ds-patterns) patterns)
          bg-patterns (if bg-pattern [(get ds-patterns bg-pattern)] [])
          pattern-labels (select-keys (mapv :label ds-patterns) patterns)
          shading-labels (select-keys (mapv :label ds-shading) shading)
          bg-pattern-label (:label (first bg-patterns))
          bg-pattern-ref (when bg-pattern-label (label-ref bg-pattern-label))
          full-layers (mapv (partial build-layer pattern-labels shading-labels body-resize head-shift) good-parts)
          {:keys [min-x min-y width height] :as dim} (build-dim good-parts padding scale-image body-resize)
          group-args (if-let [matrix (scale-matrix scale-image body-resize)] {:transform matrix} {})
          bg-group (reduce
                     #(if-not (empty? %2)
                        (conj %1 [:rect {:x min-x :y min-y :width width :height height :fill %2}])
                        %1)
                     [:g]
                     [bg-color bg-pattern-ref])]
      [:svg
       (assoc (build-svg-args dim) :xmlns "http://www.w3.org/2000/svg")
       (vec
         (concat
           [:defs]
           (mapv build-shading good-shading)
           (mapv build-pattern (into good-patterns bg-patterns))
           (->> good-parts
                (mapv #(vals (first %)))
                (flatten)
                (concat good-shading good-patterns)
                (filterv :defs)
                (mapv :defs)
                (reduce gradient-defs []))))
       bg-group
       (into [:g group-args] full-layers)])))
