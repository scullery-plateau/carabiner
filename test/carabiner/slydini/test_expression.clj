(ns carabiner.slydini.test-expression
  (:require [carabiner.slydini.expression :as sly]
            [clojure.pprint :as pp]
            [clojure.test :refer :all]
            [schema.coerce :as coerce]
            [schema.core :as s]))


(deftest test-expression
  (let [exp  (read-string "(\"a\" < \"b\")")]
    (s/validate sly/Expression exp)
    (pp/pprint {:exp exp :result (sly/resolve-expression {} exp)}))
  (println "")
  (let [exp (read-string "(str \"I'm only \" 4 \" years old\")")]
    (s/validate sly/Expression exp)
    (pp/pprint {:exp exp :result (sly/resolve-expression {} exp)}))
  (println "")
  (let [exp (read-string "(if true 7 6)")]
    (s/validate sly/Expression exp)
    (pp/pprint {:exp exp :result (sly/resolve-expression {} exp)}))
  (println "")
  (let [exp (read-string "(str \"I'm only \" (if (\"a\" < \"b\") 7 6) \" years old\")")]
    (s/validate sly/Expression exp)
    (pp/pprint {:exp exp :result (sly/resolve-expression {} exp)}))
  (println "")
  (let [exp  (read-string "(2 < \"b\")")]
    (s/validate sly/Expression exp)
    (pp/pprint {:exp exp :result (sly/resolve-expression {} exp)}))
  (println "")
  (let [exp (read-string "(str \"I'm only \" (if (\"a\" < 2) 7 6) \" years old\")")]
    (s/validate sly/Expression exp)
    (pp/pprint {:exp exp :result (sly/resolve-expression {} exp)}))
  (println "")
  (let [exp  (read-string "(a.b or 2)")]
    (s/validate sly/Expression exp)
    (pp/pprint {:exp exp :result (sly/resolve-expression {} exp)}))
  (println "")
  (let [exp  (read-string "(2 or a.b)")]
    (s/validate sly/Expression exp)
    (pp/pprint {:exp exp :result (sly/resolve-expression {} exp)}))
  (println "")
  (let [exp  (read-string "(2 or (2 < \"a\"))")]
    (s/validate sly/Expression exp)
    (pp/pprint {:exp exp :result (sly/resolve-expression {} exp)}))
  (println "")
  (let [exp  (read-string "((2 < \"a\") or 2)")]
    (s/validate sly/Expression exp)
    (pp/pprint {:exp exp :result (sly/resolve-expression {} exp)}))
  )
