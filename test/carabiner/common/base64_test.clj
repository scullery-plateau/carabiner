(ns carabiner.common.base64-test
  (:require [clojure.test :refer :all]
            [carabiner.common.base64 :as b64]))

(comment
  (deftest test-encode-decode
    (let [text "The quick brown fox jumped over the lazy dog."
          encoded (b64/encode-string text)
          decoded (b64/decode-to-string encoded)
          re-encoded (b64/encode-string decoded)
          re-decoded (b64/decode-to-string re-encoded)]
      (println encoded)
      (is (= text decoded))
      (is (= decoded re-decoded))
      (is (= text re-decoded))
      (is (= encoded re-encoded)))))
