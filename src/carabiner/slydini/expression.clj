(ns carabiner.slydini.expression
  (:require [schema.core :as s]
            [clojure.string :as str]
            [clojure.pprint :as pp])
  (:import (clojure.lang ExceptionInfo)))

(defprotocol Any)

(def binary-operations
  {'+           [{:left-operand Number :right-operand Number} Number +]
   '-           [{:left-operand Number :right-operand Number} Number -]
   '*           [{:left-operand Number :right-operand Number} Number *]
   '/           [{:left-operand Number :right-operand Number} Number /]
   (symbol "^") [{:left-operand Number :right-operand Number} Number #(Math/pow %1 %2)]
   '%           [{:left-operand Number :right-operand Number} Number #(mod %1 %2)]
   '=           [{:left-operand Any :right-operand Any} Boolean =]
   '<>          [{:left-operand Any :right-operand Any} Boolean not=]
   '<           [{:left-operand Comparable :right-operand Comparable} Boolean #(< (.compareTo %1 %2) 0)]
   '>           [{:left-operand Comparable :right-operand Comparable} Boolean #(> (.compareTo %1 %2) 0)]
   '<=          [{:left-operand Comparable :right-operand Comparable} Boolean #(<= (.compareTo %1 %2) 0)]
   '>=          [{:left-operand Comparable :right-operand Comparable} Boolean #(>= (.compareTo %1 %2) 0)]
   'or          [{:left-operand Any :right-operand Any} Any :macro]
   'and         [{:left-operand Any :right-operand Any} Any :macro]
   })

(def functions
  {'str [{:args [Any] :var-args true} String str]
   'if  [{:args [Any Any Any]} Any :macro]
   'floor [{:args [Number]} Number #(Math/floor %)]
   'ceil [{:args [Number]} Number #(Math/ceil %)]})

(def binary-operators (set (keys binary-operations)))
(s/defschema BinaryOperator (s/pred binary-operators "binary-operators"))
(def function-names (set (keys functions)))
(s/defschema FunctionName (s/pred function-names "function-names"))

(defn is-operand? [obj]
  (or
    (boolean? obj)
    (string? obj)
    (number? obj)
    (symbol? obj)))

(s/defschema Operand
  (s/pred is-operand? "is-operand?"))

(s/defschema Expression
  (s/constrained
    (s/if
      #(and (= 3 (count %)) (binary-operators (second %)))

      (vector
        (s/one (s/if list? (s/recursive #'Expression) Operand) "left-operand")
        (s/one BinaryOperator "operator")
        (s/one (s/if list? (s/recursive #'Expression) Operand) "right-operand"))

      (vector
        (s/one FunctionName "function-name")
        (s/if list? (s/recursive #'Expression) Operand)))

    list?))

(s/defschema BinaryExpression
  (vector
    (s/one (s/if list? Expression Operand) "left-operand")
    (s/one BinaryOperator "operator")
    (s/one (s/if list? Expression Operand) "right-operand")))

(s/defschema Function
  (vector
    (s/one FunctionName "function-name")
    (s/if list? Expression Operand)))

(defmulti resolve-macro (fn [_ func-name _] (keyword (name func-name))))

(defn build-resolve-error [throwable expression]
  (ExceptionInfo. ""
    {:expression expression
     :error-message (.getMessage throwable)
     :error-type (str (.getSimpleName (type throwable)))
     :stacktrace (.getStackTrace throwable)}))

(defn resolve-recursive [context expression]
  (cond
    (try
      (s/validate BinaryExpression expression)
      true
      (catch Throwable _ false))
    (let [[left-operand operator right-operand] expression
          function (last (get binary-operations operator))]
      (try
        (if (= :macro function)
          (resolve-macro context operator [left-operand right-operand])
          (function (resolve-recursive context left-operand) (resolve-recursive context right-operand)))
        (catch ExceptionInfo e
          (throw e))
        (catch Throwable t
          (throw (build-resolve-error t expression)))))

    (try
      (s/validate Function expression)
      true
      (catch Throwable _ false))
    (let [[function-name & args] expression
          function (last (get functions function-name))]
      (try
        (if (= :macro function)
          (resolve-macro context function-name args)
          (apply function (mapv (partial resolve-recursive context) args)))
        (catch ExceptionInfo e
          (throw e))
        (catch Throwable t
          (throw (build-resolve-error t expression)))))

    (symbol? expression) (select-keys context (str/split (name expression) #"\."))

    :else expression))

(defmethod resolve-macro :or [context _ [left-operand right-operand]]
  (or (resolve-recursive context left-operand) (resolve-recursive context right-operand)))

(defmethod resolve-macro :and [context _ [left-operand right-operand]]
  (and (resolve-recursive context left-operand) (resolve-recursive context right-operand)))

(defmethod resolve-macro :if [context _ [check then-do else-do]]
  (if (resolve-recursive context check) (resolve-recursive context then-do) (resolve-recursive context else-do)))

(defmethod resolve-macro :default [_ operator expression]
  (throw
    (ExceptionInfo. ""
      {:expression expression
       :error-type "BAD-MACRO"
       :error-message (str "No Implementation of 'resolve-macro' for operator:'" operator "'")})))

(defn format-resolve-error [{:keys [expression error-message error-type stacktrace]}]
  #_(when (= error-type "ClassCastException")
    (pp/pprint stacktrace))
  (str "ERROR: " error-type " - " error-message ": " expression))

(defn resolve-expression [context expression]
  (try
    (resolve-recursive context expression)
    (catch ExceptionInfo e
      (format-resolve-error (ex-data e)))
    (catch Throwable t
      (format-resolve-error (ex-data (build-resolve-error t expression))))))