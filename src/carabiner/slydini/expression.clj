(ns carabiner.slydini.expression
  (:require [schema.core :as s]
            [clojure.string :as str]
            [clojure.pprint :as pp]
            [clojure.spec.alpha :as spec])
  (:import (clojure.lang ExceptionInfo)))

(defn build-resolve-error [throwable expression]
  (ExceptionInfo. ""
                  {:expression    expression
                   :error-message (.getMessage throwable)
                   :error-type    (str (.getSimpleName (type throwable)))
                   :stacktrace    (.getStackTrace throwable)}))

(defn format-resolve-error [{:keys [expression error-message error-type stacktrace]}]
  #_(when (= error-type "ClassCastException")
    (pp/pprint stacktrace))
  (str "ERROR: " error-type " - " error-message ": " expression))

(defprotocol Any)

(defn safe-compare [a b]
  (try
    (.compareTo (bigdec a) (bigdec b))
    (catch NumberFormatException e
      (.compareTo (str a) (str b)))))

(def binary-operations
  {'+           [{:left-operand Number :right-operand Number} Number +]
   '-           [{:left-operand Number :right-operand Number} Number -]
   '*           [{:left-operand Number :right-operand Number} Number *]
   '/           [{:left-operand Number :right-operand Number} Number /]
   (symbol "^") [{:left-operand Number :right-operand Number} Number #(Math/pow %1 %2)]
   '%           [{:left-operand Number :right-operand Number} Number #(mod %1 %2)]
   '=           [{:left-operand Any :right-operand Any} Boolean =]
   '<>          [{:left-operand Any :right-operand Any} Boolean not=]
   '<           [{:left-operand Comparable :right-operand Comparable} Boolean #(< (safe-compare %1 %2) 0)]
   '>           [{:left-operand Comparable :right-operand Comparable} Boolean #(> (safe-compare %1 %2) 0)]
   '<=          [{:left-operand Comparable :right-operand Comparable} Boolean #(<= (safe-compare %1 %2) 0)]
   '>=          [{:left-operand Comparable :right-operand Comparable} Boolean #(>= (safe-compare %1 %2) 0)]
   'or          [{:left-operand Any :right-operand Any} Any :macro]
   'and         [{:left-operand Any :right-operand Any} Any :macro]
   })

(def functions
  {'str [{:args [Any] :var-args true} String str]
   'if  [{:args [Any Any Any]} Any :macro]
   'floor [{:args [Number]} Number #(Math/floor %)]
   'ceil [{:args [Number]} Number #(Math/ceil %)]})

(def binary-operators (set (keys binary-operations)))

(def function-names (set (keys functions)))

(defn is-literal? [obj]
  (or
    (boolean? obj)
    (string? obj)
    (number? obj)))

(spec/def ::operand
  (spec/or :literal is-literal?
           :variable symbol?
           :expression (spec/and list?
                         (spec/or
                           :binary-operation (spec/cat
                                               :left-operand ::operand
                                               :operator binary-operators
                                               :right-operand ::operand)
                           :function (spec/cat
                                       :function-name function-names
                                       :args (spec/* ::operand))))))

(spec/def ::expression
  (let [operand (spec/or :literal is-literal? :variable symbol? :expression ::expression)]
    (spec/and list?
      (spec/or
        :binary-operation (spec/cat :left-operand operand
                                    :operator binary-operators
                                    :right-operand operand)
        :function (spec/cat :function-name function-names
                            :args (spec/* operand))))))

(defmulti resolve-conformed #(first %2))

(defmulti resolve-operand #(first %2))

(defmulti resolve-conformed-macro (fn [_ func-name & _] (keyword (name func-name))))

(defmethod resolve-conformed :binary-operation
  [context [_ {:keys [operator left-operand right-operand] :as expression}]]
  (let [function (last (get binary-operations operator))]
    (try
      (if (= :macro function)
        (resolve-conformed-macro context operator left-operand right-operand)
        (function
          (resolve-operand context left-operand)
          (resolve-operand context right-operand)))
      (catch ExceptionInfo e
        (throw e))
      (catch Throwable t
        (throw (build-resolve-error t expression))))))

(defmethod resolve-conformed :function
  [context [_ {:keys [function-name args] :as expression}]]
  (let [function (last (get functions function-name))]
    (try
      (if (= :macro function)
        (apply resolve-conformed-macro context function-name args)
        (apply function (mapv (partial resolve-operand context) args)))
      (catch ExceptionInfo e
        (throw e))
      (catch Throwable t
        (throw (build-resolve-error t expression))))))

(defmethod resolve-operand :literal [_ [_ operand]] operand)

(defmethod resolve-operand :variable [context [_ operand]]
  (get-in context (str/split (name operand) #"\.")))

(defmethod resolve-operand :expression [context [_ operand]]
  (resolve-conformed context operand))

(defmethod resolve-conformed-macro :or [context _ left-operand right-operand]
  (or (resolve-operand context left-operand) (resolve-operand context right-operand)))

(defmethod resolve-conformed-macro :and [context _ left-operand right-operand]
  (and (resolve-operand context left-operand) (resolve-operand context right-operand)))

(defmethod resolve-conformed-macro :if [context _ check then-do else-do]
  (if (resolve-operand context check)
    (resolve-operand context then-do)
    (resolve-operand context else-do)))

(defmethod resolve-conformed-macro :default [_ operator & args]
  (throw
    (ExceptionInfo. ""
      {:expression (into [operator] args)
       :error-type "BAD-MACRO"
       :error-message (str "No Implementation of 'resolve-macro' for operator:'" operator "'")})))

(defn resolve-conformed-expression [context conformed]
  (try
    (resolve-operand context conformed)
    (catch ExceptionInfo e
      (format-resolve-error (ex-data e)))
    (catch Throwable t
      (format-resolve-error (ex-data (build-resolve-error t conformed))))))
