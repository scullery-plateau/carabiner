(ns carabiner.common.doc-test
  (:require [clojure.test :refer :all]
            [clj-htmltopdf.core :as pdf]
            ))

(deftest test-publish
  (pdf/->pdf
    [:div
     [:h1 "HTML to PDF"]
     [:p "Glorious!"]]
    "output.pdf"
    {:doc
     {:title    "My Awesome PDF"
      :author   "Gered"
      :subject  "Only Testing"
      :keywords "clojure,html,to,pdf"}
     :page
     {:margin      "1.0in"
      :size        :letter
      :orientation :portrait
      :margin-box  {:top-left            {:element "my-top-left-box"}
                    :top-right           {:paging [:page " of " :pages]}
                    :bottom-center       {:element "the-bottom-center-box"}
                    :bottom-right-corner {:text "this is in the corner!"}}}
     :styles {}
     })

  (pdf/->pdf
    [:div
     [:h2 "SVG test"]
     [:svg {:xmlns "http://www.w3.org/2000/svg" :version "1.1"}
      [:rect {:x 25 :y 25 :width 200 :height 200 :fill "lime" :stroke-width 4 :stroke "pink"}]
      [:circle {:cx 125 :cy 125 :r 75 :fill "orange"}]
      [:polyline {:points "50,150 50,200 200,200 200,100" :stroke "red" :stroke-width 4 :fill "none"}]
      [:line {:x1 50 :y1 50 :x2 200 :y2 200 :stroke "blue" :stroke-width 4}]]
     [:hr]
     [:svg {:xmlns "http://www.w3.org/2000/svg" :width 100 :height 100}
      [:circle {:cx 50 :cy 50 :r 40 :stroke "green" :stroke-width 4 :fill "yellow"}]]
     [:hr]
     [:svg {:xmlns "http://www.w3.org/2000/svg" :width 300 :height 200}
      [:rect {:width "100%" :height "100%" :fill "red"}]
      [:circle {:cx 150 :cy 100 :r 80 :fill "green"}]
      [:text {:x 150 :y 125 :font-size 60 :text-anchor "middle" :fill "white"} "SVG"]]]
    "svg.pdf")

  (pdf/->pdf
    [:div
     [:div#margin-box-top-left "this is my custom header"]
     [:div#margin-box-bottom-center
      [:table
       [:tr
        [:td "footer column A"]
        [:td "footer column B"]
        [:td "footer column C"]]]]
     [:h1 "My PDF Title"]
     [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
     [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
     [:h3 "Sub Title"]
     [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
     [:pre "(defn say-hello! [name]\n  (println \"Hello,\" name))"]
     [:p.page-break-after "Going onto page 2 next ... !"]
     [:table
      [:thead
       [:tr
        [:th {:width "6%"} "#"]
        [:th {:width "32%"} "Name"]
        [:th {:width "32%"} "Username"]
        [:th {:width "32%"} "Role"]]]
      [:tbody
       [:tr
        [:th "1"]
        [:th "Gered"]
        [:th "gered"]
        [:th "Developer"]]
       [:tr
        [:th "2"]
        [:th "Bob"]
        [:th "bob"]
        [:th "Sales Associate"]]
       [:tr
        [:th "3"]
        [:th "Sue"]
        [:th "sue"]
        [:th "Designer"]]
       [:tr
        [:th "4"]
        [:th "Joe"]
        [:th "joe"]
        [:th "Manager"]]]]
     [:ul
      [:li "first item"]
      [:li "second item"]
      [:li "third item"]]
     [:ol
      [:li "more items"]
      [:li "for you"]
      [:li "to see!"]]
     [:img {:src "https://clojure.org/images/clojure-logo-120b.png"}]]
    "report.pdf"
    {:doc    {:title    "My Awesome PDF"
              :author   "Gered"
              :subject  "Only Testing"
              :keywords "clojure,html,to,pdf"}
     :page   {:margin      "1.0in"
              :size        :letter
              :orientation :portrait
              :margin-box  {:top-left            {:element "margin-box-top-left"}
                            :top-right           {:paging [:page " of " :pages]}
                            :bottom-center       {:element "margin-box-bottom-center"}
                            :bottom-right-corner {:text "corner!"}}}
     :styles {:font-size "12pt"
              :color     "#000"}
     :debug  {:display-html?    true
              :display-options? true}})
  )