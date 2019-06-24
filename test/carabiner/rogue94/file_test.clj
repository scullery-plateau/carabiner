(ns carabiner.rogue94.file-test
  (:require [clojure.test :refer :all]
            [carabiner.rogue94.file :as file]
            [clojure.pprint :as pp])
  (:import (clojure.lang ExceptionInfo)))

(deftest test-parsing-to-json-colville-simple
  (let [filedata (slurp "resources/cobblestone_sample/colvillesimple.map")
        results (try
                  {:result (file/parse-file filedata nil)}
                  (catch ExceptionInfo e
                    {:error (.getData e)}))]
    (pp/pprint results)
    ))