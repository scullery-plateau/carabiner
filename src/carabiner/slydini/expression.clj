(ns carabiner.slydini.expression
  (:require [clojure.spec.alpha :as spec]))

(defprotocol Any)

(defn count-is [my-count]
  #(= my-count (count %)))

(def binary-operations
  {'+ [{:left-operand Number :right-operand Number} Number +]
   '- [{:left-operand Number :right-operand Number} Number -]
   '* [{:left-operand Number :right-operand Number} Number *]
   '/ [{:left-operand Number :right-operand Number} Number /]
   (symbol "^") [{:left-operand Number :right-operand Number} Number #(Math/pow %1 %2)]
   '% [{:left-operand Number :right-operand Number} Number #(mod %1 %2)]
   '= [{:left-operand Any :right-operand Any} Boolean =]
   '<> [{:left-operand Any :right-operand Any} Boolean not=]
   '< [{:left-operand Comparable :right-operand Comparable} Boolean #(< (.compareTo %1 %2) 0)]
   '> [{:left-operand Comparable :right-operand Comparable} Boolean #(> (.compareTo %1 %2) 0)]
   '<= [{:left-operand Comparable :right-operand Comparable} Boolean #(<= (.compareTo %1 %2) 0)]
   '>= [{:left-operand Comparable :right-operand Comparable} Boolean #(>= (.compareTo %1 %2) 0)]
   'or [{:left-operand Any :right-operand Any} Any #(or %1 %2)]
   'and [{:left-operand Any :right-operand Any} Any #(and %1 %2)]
   })

(def ternary-operations
  {['? (symbol ":")] [{:left-operand Any :center-operand Any :right-operand Any} Any #(if %1 %2 %3)]})

(def functions
  {'str [{:args [Any] :var-args true} String #(apply str %&)]})

(spec/def ::variable-name symbol?)
(spec/def ::function-name (set (keys functions)))
(spec/def ::binary-operator (set (keys binary-operations)))
(spec/def ::ternary-left (set (map first (keys ternary-operations))))
(spec/def ::ternary-right (set (map second (keys ternary-operations))))

(spec/def ::operand
  (spec/or :number number?
           :string string?
           :boolean boolean?
           :variable-name ::variable-name
           :expression ::expression))

(spec/def ::expression
  (spec/or :binary ::binary-expression
           :ternary ::ternary-expression
           :function ::function-call))

(spec/def ::binary-expression
  (spec/and list?
            (spec/cat :left-operand ::operand
                      :operator ::binary-operator
                      :right-operand ::operand)))

(spec/def ::ternary-expression
  (spec/and list?
            (spec/cat :left-operand ::operand
                      :left-operator ::ternary-left
                      :center-operand ::operand
                      :right-operator ::ternary-right
                      :right-operand ::operand)))

(spec/def ::function-call
  (spec/and list?
            (spec/cat :function-name ::function-name
                      :args (spec/* ::operand))))
