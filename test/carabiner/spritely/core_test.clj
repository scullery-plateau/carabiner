(ns carabiner.spritely.core-test
  (:require [clojure.test :refer :all]
            [carabiner.spritely.core :refer :all]
            [carabiner.common.xml :as x]
            [carabiner.common.img :as img]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [clojure.string :as str])
  (:import (java.io ByteArrayInputStream)
           (clojure.lang ExceptionInfo)))

(comment
  (deftest test-load-file
    (is (= "1\r\n2\r\n3\r\n" (with-out-str
                               (println 1)
                               (println 2)
                               (println 3)))))

  (deftest test-load-file-2
    (let [file "#000000,#ff0000,#00ff00,#0000ff\naaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa\naaabbbbaaaaaaaaa\naaabbbbaaaaaaaaa\naaabbbbaaaaaaaaa\naaabbbbaaaccccaa\naaaaaaaaaaccccaa\naaaaaaaaaaccccaa\naaaaaaaaaaccccaa\naaaaaaaaaaaaaaaa\naaaaaddddaaaaaaa\naaaaaddddaaaaaaa\naaaaaddddaaaaaaa\naaaaaddddaaaaaaa\naaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaa\n"
          json (load-spritely-file file)
          encoded (compress-data json)
          output (String. (build-save-file {:base64 encoded}))]
      (println file)
      (println json)
      (println encoded)
      (println output)
      (is (= (str/split-lines file) (str/split-lines output)))))

  (deftest test-json2file
    (let [expected ["#000000,#ff0000,#00ff00,#0000ff,#ff00ff,#ffff00" "aaaaa" "abaea" "aafaa" "acada" "aaaaa"]
          palette ["#000000" "#ff0000" "#00ff00" "#0000ff" "#ff00ff" "#ffff00"]
          pixels {"1x1" 1 "1x3" 2 "3x3" 3 "3x1" 4 "2x2" 5}
          args {:palette palette :pixels pixels :width 5 :height 5}
          lines (str/split-lines (json2file args))]
      (is (every? true? (mapv #(= %1 %2) expected lines)))
      (pp/pprint lines)))

  (deftest test-base64-roundtrip
    (let [expected ["#000000 #ff0000 #00ff00 #0000ff #ff00ff #ffff00" "aaaaa" "abaea" "aafaa" "acada" "aaaaa"]
          palette ["#000000" "#ff0000" "#00ff00" "#0000ff" "#ff00ff" "#ffff00"]
          pixels {"1x1" 1 "1x3" 2 "3x3" 3 "3x1" 4 "2x2" 5}
          args {:palette palette :pixels pixels :width 5 :height 5}
          base64 (compress-data args)
          out (build-save-file {:base64 base64})
          lines (str/split-lines (String. out))
          ]
      (is (every? true? (mapv #(= %1 %2) expected lines)))
      (pp/pprint lines))))

(deftest test-save-file-image
  (try
    (let [base64 "I0ZGRkZGRiAjOTM3MERCICM0QjAwODIgIzAwMDAwMA0KZGFhYWFhYWFhYWFhYWFhZA0KZGFhYWFhYWFhYWFhYWFhZA0KZGFhYWFhYWFhYWFhYWFhZA0KZGJiYmJiYmJiYmJiYmJiZA0KZGJjY2NjY2NjY2NjY2NiZA0KZGJjY2NjY2NjY2NjY2NiZA0KZGJjY2NjY2NjY2NjY2NiZA0KZGJjY2NjY2NjY2NjY2NiZA0KZGJjY2NjY2NjY2NjY2NiZA0KZGJjY2NjY2NjY2NjY2NiZA0KZGJjY2FhY2NjY2FhY2NiZA0KZGJjYWJiYWNjYWJiYWNiZA0KZGJhYmJiYmFhYmJiYmFiZA0KZGJiYmRkYmJiYmRkYmJiZA0KZGJiZGRkZGJiZGRkZGJiZA0KZGRkZGRkZGRkZGRkZGRkZA=="
          scale 5
          args {:base64 base64 :scale scale}]
      (io/copy (ByteArrayInputStream. (build-image args)) (io/file "resources/test/testimg.png")))
    (catch ExceptionInfo e
      (pp/pprint (.getData e)))
    (catch Exception e
      (pp/pprint e))))
