(ns carabiner.common.xml)

(defn expand [[tag & content]]
  (let [content (if (nil? content) [] content)
        [attrs content] (if (map? (first content))
                          [(first content) (rest content)]
                          [{} content])]
    {:tag tag :attrs attrs :content (map expand content)}))
