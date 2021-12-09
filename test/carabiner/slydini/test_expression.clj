(ns carabiner.slydini.test-expression
  (:require [carabiner.slydini.expression :as sly]
            [clojure.pprint :as pp]
            [clojure.test :refer :all]
            [schema.coerce :as coerce]
            [schema.core :as s]
            [clojure.spec.alpha :as spec])
  (:import (clojure.lang ExceptionInfo)))


(deftest test-expression
  (let [exp (read-string "(\"a\" < \"b\")")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= true result)))
  (let [exp (read-string "(str \"I'm only \" 4 \" years old\")")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= "I'm only 4 years old" result)))
  (let [exp (read-string "(if true 7 6)")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= 7 result)))
  (let [exp (read-string "(str \"I'm only \" (if (\"a\" < \"b\") 7 6) \" years old\")")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= "I'm only 7 years old" result)))
  (let [exp (read-string "(2 < \"b\")")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= true result)))
  (let [exp (read-string "(str \"I'm only \" (if (\"a\" < 2) 7 6) \" years old\")")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= "I'm only 6 years old" result)))
  (let [exp (read-string "(a.b or 2)")
        ctx {"a" {"b" "c"}}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= "c" result)))
  (let [exp (read-string "(2 or a.b)")
        ctx {"a" {"b" "c"}}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= 2 result)))
  (let [exp (read-string "(2 or (2 < \"a\"))")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= 2 result)))
  (let [exp (read-string "((2 < \"a\") or 2)")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= true result)))
  (let [exp (read-string "(\"10\" < \"2\")")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= false result)))
  (let [exp (read-string "(str \"I'm only \" age \" years old\")")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= "I'm only 4 years old" (sly/resolve-expression {"age" 4} exp))))
  (let [exp (read-string "(str \"PI falls between \" (floor 22/7) \" and \" (ceil 22/7))")
        ctx {}
        conformed (spec/conform ::sly/operand exp)
        error (spec/explain-data ::sly/operand exp)
        result (sly/resolve-conformed-expression ctx conformed)]
    (is (= nil error))
    (is (= "PI falls between 3.0 and 4.0" result)))
  (let [exp (read-string "(1 + 2 - 3)")
        error (spec/explain-data ::sly/operand exp)]

    ))
