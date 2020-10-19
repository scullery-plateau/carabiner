(ns carabiner.common.xml
  (:require [clojure.string :as str]
            [clojure.xml :as xml]
            [clojure.zip :as zip]
            [clojure.pprint :as pp])
  (:import (java.io ByteArrayInputStream)))

(defn compress [{:keys [tag attrs content] :as value}]
  (if (map? value)
    (let [content (or content [])
          content (map compress content)
          content (if attrs (cons attrs content) content)]
      (into [tag] content))
    (str/trim value)))

(defn encode-entities [text]
  (let [chars (into (sorted-set) text)
        ints (mapv int chars)
        selected (filterv (partial <= 128) ints)
        c-map (reduce #(assoc %1 (char %2) (str "&#" %2 ";")) {} selected)]
    (str/escape text c-map)))

(defn from-xml [xml-str]
  (-> xml-str
      (encode-entities)
      (.getBytes)
      (ByteArrayInputStream.)
      (xml/parse)
      (zip/xml-zip)
      (first)
      (compress)))

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

(defn to-xml [expanded]
  (with-out-str (xml/emit expanded)))

(defn to-html [expanded]
  (str "<!DOCTYPE html>"
    (with-out-str (xml/emit-element expanded))))