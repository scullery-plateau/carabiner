(ns carabiner.outfitter-old.metadata2
  (:require [clojure.java.io :as io]
            [clojure.data.json :as json]
            [clojure.xml :as xml]
            [clojure.zip :as zip]
            [clojure.string :as str]
            [cheshire.core :as cheshire]
            [clojure.pprint :as pp])
  (:import (java.io ByteArrayInputStream)))

(def body-types [:fit :hulk :superman :woman])

(def dataset-path (apply io/file ["front" "src" "outfitter" "datasets"]))

(defn transform-metadata [body-type]
  (let [json-file (io/file dataset-path (str (name body-type) ".json"))
        {parts :parts pattern-count :pattern-count shading-count :shading-count} (json/read-str (slurp json-file) :key-fn keyword)
        svg-file (io/file dataset-path (str (name body-type) ".svg"))
        svg-data (zip/xml-zip
                   (xml/parse
                     (ByteArrayInputStream.
                       (.getBytes
                         (slurp
                           svg-file)))))
        defs (-> svg-data first :content first :content)
        {g :g pattern :pattern linearGradient :linearGradient :as def-tags} (group-by :tag defs)
        id-reducer #(assoc %1 (get-in %2 [:attrs :id]) %2)
        [linearGradients pattern-defs part-defs] (map (partial reduce id-reducer {}) [linearGradient pattern g])
        base-ids (into (sorted-set) (concat (keys pattern-defs) (keys part-defs)))
        gradient-ids (into (sorted-set) (keys linearGradients))
        ids-to-gradients (reduce
                           (fn [out id]
                             (let [ids (filter #(str/starts-with? % id) gradient-ids)]
                               (if-not (empty? ids)
                                 (assoc out id ids)
                                 out)))
                           (sorted-map)
                           base-ids)
        parts (reduce-kv
                (fn [out part-type parts-for-type]
                  (assoc out part-type
                    (map
                      (fn [{layers :layers :as obj}]
                        (let [layer-ids (vals layers)
                              layer-gradient-ids (vals (select-keys ids-to-gradients layer-ids))
                              layer-parts (vals (select-keys part-defs layer-ids))
                              layer-gradients (vals (select-keys linearGradients layer-gradient-ids))
                              defs (apply str (map #(with-out-str (xml/emit-element %)) (concat layer-parts layer-gradients)))]
                          (assoc obj :defs defs)))
                      parts-for-type)))
                (sorted-map)
                parts)
        shading-ids (->> shading-count
                         range
                         (map #(str "shading-" (if (> 10 %) "0" "") %)))
        shadings (reduce
                   (fn [out id]
                      (let [shading-gradient-ids (get ids-to-gradients id)
                            shading-gradients (select-keys linearGradients shading-gradient-ids)
                            shading-part (get pattern-defs id)
                            all-xml (concat [shading-part] (vals shading-gradients))
                            all-xml-map (reduce
                                          #(assoc %1
                                             (-> %2 :attrs :id)
                                             (with-out-str (xml/emit-element %2)))
                                          {} all-xml)
                            defs (reduce str "" (vals all-xml-map))
                            ]
                        (assoc out id defs)))
                   (sorted-map)
                   shading-ids)
        pattern-ids (->> pattern-count
                         range
                         (map #(str "patterns-" (if (> 10 %) "0" "") %)))
        patterns (reduce
                   (fn [out id]
                     (let [pattern-gradient-ids (get ids-to-gradients id)
                           pattern-gradients (select-keys linearGradients pattern-gradient-ids)
                           pattern-part (get pattern-defs id)
                           all-xml (concat [pattern-part] (vals pattern-gradients))
                           defs (apply str (map #(with-out-str (xml/emit-element %)) all-xml))]
                       (assoc out id defs)))
                   (sorted-map)
                   pattern-ids)]
    (spit
      (io/file dataset-path (str (name body-type) "2.json"))
      (cheshire/generate-string
        {:patterns patterns
         :shadings shadings
         :parts parts}))))

(defn -main [& _]
  (doseq [body-type body-types]
    (println body-type)
    (transform-metadata body-type))
  (println "complete"))