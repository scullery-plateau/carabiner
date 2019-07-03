(ns carabiner.common.xml
  (:require [clojure.string :as str]
            [clojure.xml :as xml]))

(defn expand [[tag & content]]
  (let [content (if (nil? content) [] content)
        [attrs content] (if (map? (first content))
                          [(first content) (rest content)]
                          [{} content])
        taglist (str/split (name tag) #"\.")
        tag (keyword (first taglist))
        classes (rest taglist)
        class-str (str/join " " classes)
        attrs (if (empty? classes)
                attrs
                (if (contains? attrs :class)
                  (update attrs :class str " " class-str)
                  (assoc attrs :class class-str)))]
    {:tag tag :attrs attrs :content (mapv #(if (vector? %) (expand %) %) content)}))

(defn toXml [expanded]
  (with-out-str (xml/emit expanded)))