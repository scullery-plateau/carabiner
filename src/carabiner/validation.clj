(ns carabiner.validation
  (:require [clojure.set :as set]
            [clojure.string :as str]))

(defn verify-page-layout [indexed-chars mapped-spaces
                          {fromX :x fromY :y :keys [dim] page :p
                           {toX :x toY :y :or {toX 0 toY 0}} :to}]
  (let [{:keys [w h] :or {w (- 8 toX) h (- 10 toY)}} dim]
    (when (and
            (> 8 (+ w toX))
            (> 10 (+ h toY)))
      (let [selection-coords (set
                               (for
                                 [x (range w)
                                  fx (+ fromX x)
                                  tx (+ toX x)
                                  y (range h)
                                  fy (+ fromY y)
                                  ty (+ toY y)
                                  :let [z {:fx fx :fy fy :tx tx :ty ty}]
                                  :when (contains? indexed-chars {:x fx :y fy})]
                                 z))]
        (loop [coord-set selection-coords
               mapped mapped-spaces]
          (if (empty? coord-set)
            mapped
            (let [{:keys [fx fy tx ty]} (first coord-set)
                  from {:x fx :y fy}
                  to {:x tx :y ty :p page}]
              (if (or (contains? (:map mapped) from)
                      (contains? (:pages mapped) to))
                nil
                (recur
                  (rest coord-set)
                  (-> mapped
                      (update-in [:map] conj from)
                      (update-in [:pages] conj to)))))))))))

(defn verify-page-layouts [chars {:keys [content pages]}]
  (let [lines (str/split-lines content)
        indexed-chars (reduce-kv
                        (fn [indexed y line]
                          (reduce-kv
                            (fn [out x char]
                              (let [char (str char)]
                                (if (contains? chars (str))
                                  (assoc out {:x x :y y} char)
                                  out)))
                            indexed line))
                        {} lines)]
    (loop [pages pages
           mapped-spaces {:map #{} :pages #{}}]
      (if (empty? pages)
        true
        (when-let [spaces (verify-page-layout indexed-chars mapped-spaces (first pages))]
          (recur (rest pages) spaces))))))

(defn map-page-layouts [{:keys [maps chars]}]
  (every? (partial verify-page-layouts (set (keys chars))) (vals maps)))

(defn length-sixteen [coll]
  (= 16 (count coll)))

(defn tile-body-matches-index? [{:keys [index body]}]
  (let [index-chars (set (str/split index #""))
        body-lines (-> body
                       (str/split-lines)
                       (filter not-empty))
        body-chars (as-> body-lines b (str/join "" b) (str/split b #"") set)]
    (and
      (set/subset? body-chars index-chars)
      (every? length-sixteen body-lines)
      (length-sixteen body-lines))))

(defn match-tile-and-palette-names [{:keys [chars palettes tiles]}]
  (let [tile-names (set (keys tiles))
        palette-names (set (keys palettes))
        char-tiles (set (map first (vals chars)))
        char-palettes (set (map second (vals chars)))]
    (and
      (set/subset? char-palettes palette-names)
      (set/subset? char-tiles tile-names))))
