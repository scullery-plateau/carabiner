(ns carabiner.server
  (:require [clojure.spec.alpha :as spec]
            [compojure.api.sweet :as sweet]
            [compojure.api.core :as api]
            [compojure.route :as route]
            [ring.util.http-response :as http]
            [ring.util.response :as resp]
            [environ.core :refer [env]]
            [org.httpkit.server :as server]
            [schema.core :as s]
            [carabiner.schema :as cs]
            [carabiner.common.schema :as ccs]
            [carabiner.spritely.core :as sp]
            [carabiner.cobblestone.core :as cb]
            [carabiner.cobblestone.schema :as cbs])
  (:import (java.io ByteArrayInputStream)
           (clojure.lang ExceptionInfo)))

(defn apply-headers [response headers]
  (reduce-kv #(resp/header %1 %2 %3) response headers))

(defn build-route
  ([path func schema]
   (api/context
     path []
     (sweet/resource
       {:description ""
        :post        {:summary    ""
                      :parameters {:body s/Str}
                      :consumes   ["text/plain"]
                      :produces   ["application/json"]
                      :responses  {200 {:schema schema}}
                      :handler    (fn [{body :body}]
                                    (let [args (slurp body)]
                                    (try
                                      (http/content-type
                                        (http/ok (func args))
                                        "application/json")
                                    (catch ExceptionInfo e
                                      (if (= "Errors parsing rogue94 full-map." (.getMessage e))
                                      (http/content-type
                                        (http/bad-request {
                                          :message (.getMessage e)
                                          ;:problems (mapv #(select-keys % [:path :pred :val]) (:spec/problems (.getData e)))
                                          :problems (::spec/problems (.getData e))
                                          })
                                        "application/json")
                                        (throw e)
                                        )))))}}))))

(defn build-compressor [path func schema]
  (api/context
    path []
    (sweet/resource
      {:description ""
       :post
       {:summary    ""
        :parameters {:body-params schema}
        :consumes   ["application/json"]
        :produces   ["text/plain"]
        :responses  {200 {:schema s/Str}}
        :handler    (fn [{obj :body-params}]
                      (http/content-type
                        (http/ok (func obj))
                        "text/plain"))}})))

(defn download-file-headers [content-type {:keys [filename]} response-body]
  (merge
    {"Content-Length" (count response-body)
     "Content-Type" content-type}
    (if-not (empty? filename) {"Content-Disposition" (str "filename=" filename)} {})))

(defn build-download
  ([path func content-type params-schema header-fn]
   (api/context
     path []
     (sweet/resource
       {:description ""
        :get         {:summary    ""
                      :parameters {:query-params params-schema}
                      :produces   [content-type]
                      :responses  {200 {}}
                      :handler    (fn [{:keys [query-params]}]
                                    (let [result (func query-params)]
                                      (-> (http/ok (ByteArrayInputStream. result))
                                          (apply-headers (header-fn content-type query-params result)))))}}))))

(defn build-app []
  (-> {:swagger
       {:ui   "/swagger/ui"
        :spec "/swagger.json"
        :data {:info {:title       "Scullery Plateau"
                      :description "Table Top gaming "}
               :tags [{:name "spritely", :description "Spritely pixel art app"}
                      {:name "cobblestone", :description "Cobblestone tabletop battle map app"}]}}}
      (sweet/api
        (api/context
          "/spritely" []
          :tags ["spritely"]
          (build-route "/load" sp/load-spritely-file ccs/Art)
          (build-compressor "/save" sp/compress-data ccs/Art)
          (build-download "/savedata" sp/build-save-file "text/plain" cs/DownloadArgs download-file-headers)
          (build-download "/saveimg" sp/build-image "image/png" cs/ImgDownloadArgs download-file-headers))
        (api/context
          "/cobblestone" []
          :tags ["cobblestone"]
          (build-route "/load" cb/load-cobblestone-file cbs/CobblestoneData)
          (build-compressor "/save" cb/compress-data cbs/CobblestoneData)
          (build-download "/data" cb/build-save-file "text/plain" cs/DownloadArgs download-file-headers)
          (build-download "/map" cb/build-map-image "image/png" cs/ImgDownloadArgs download-file-headers)
          (build-download "/print" cb/build-printable "text/html" cs/DownloadArgs download-file-headers))
        (sweet/GET "/" [] (resp/redirect "/index.html")))
      (sweet/routes
        (route/resources "/")
        (route/not-found "404 Not Found"))))

(defn -main [& [port]]
  (let [my-app (build-app)
        port (Integer. ^int (or port (env :port) 5000))]
    (server/run-server my-app {
      :port port
      :join? false
      :max-line 131072
      })))
