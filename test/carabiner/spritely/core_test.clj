(ns carabiner.spritely.core-test
  (:require [clojure.test :refer :all]
            [carabiner.spritely.core :refer :all]))

(deftest test-load-file
  (is (= "1\r\n2\r\n3\r\n" (with-out-str
                     (println 1)
                     (println 2)
                     (println 3)))))

(deftest test-load-file-2
  (let [file "#000000,#ff0000,#00ff00,#0000ff\naaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa\naaabbbbaaaaaaaaa\naaabbbbaaaaaaaaa\naaabbbbaaaaaaaaa\naaabbbbaaaccccaa\naaaaaaaaaaccccaa\naaaaaaaaaaccccaa\naaaaaaaaaaccccaa\naaaaaaaaaaaaaaaa\naaaaaddddaaaaaaa\naaaaaddddaaaaaaa\naaaaaddddaaaaaaa\naaaaaddddaaaaaaa\naaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa\n"
        json (load-spritely-file file)
        encoded (compress-data json)
        output (build-save-file {:base64 encoded})]
    (println file)
    (println json)
    (println encoded)
    (println output)))