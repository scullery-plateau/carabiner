(ns carabiner.server
  (:require [compojure.api.sweet :as sweet]
            [compojure.api.core :as api]
            [ring.util.http-response :as http]
            [ring.util.response :as resp]
            [compojure.route :as route]
            [environ.core :refer [env]]
            [org.httpkit.server :as server]
            [schema.core :as s]
            [cheshire.core :as json]
            [carabiner.core :as core]
            [carabiner.json :refer [j2e]]
            [carabiner.spritely.core :as sp]
            [carabiner.spritely.schema :as spc]
            [carabiner.cobblestone.core :as cb]
            [carabiner.cobblestone.schema :as cbs]
            ))

(defn- build-svg [code]
  (let [docs (j2e (json/parse-string code keyword))
        svgs (core/build-svgs-from-tile-docs docs)]
    (vals svgs)))

(defn- build-img [code]
  (let [docs (j2e (json/parse-string code keyword))
        svgs (core/build-svgs-from-tile-docs docs)]
    (map core/svg-to-64 (vals svgs))))

(defn apply-headers [response headers]
  (reduce-kv #(resp/header %1 %2 %3) response headers))

(defn build-route
  ([path func] (build-route path func s/Any))
  ([path func schema]
   (api/context
     path []
     (sweet/resource
       {:description ""
        :post        {:summary    ""
                      :parameters {:body s/Any}
                      :consumes   ["text/plain"]
                      :produces   ["application/json"]
                      :responses  {200 {:schema schema}}
                      :handler    (fn [{body :body}]
                                    (let [args (slurp body)]
                                      (http/content-type
                                        (http/ok (func args))
                                        "application/json")))}}))))

(defn build-compressor [path func schema]
  (api/context
    path []
    (sweet/resource
      {:description ""
       :post        {:summary    ""
                     :parameters {:body-params schema}
                     :consumes   ["application/json"]
                     :produces   ["text/plain"]
                     :responses  {200 {:schema s/Str}}
                     :handler    (fn [{obj :body-params}]
                                   (http/content-type
                                     (http/ok (func obj))
                                     "text/plain"))}})))

(defn default-header-fn [_] {})

(defn build-download-handler [base-func content-type header-fn]
  (fn [{:keys [query-params]}]
    (let [result (base-func query-params)]
      (-> (http/ok result)
          (http/content-type content-type)
          (apply-headers (header-fn result))))))

(defn build-download
  ([path func content-type] (build-download path func content-type default-header-fn))
  ([path func content-type header-fn]
   (api/context
     path []
     (sweet/resource
       {:description ""
        :get         {:summary    ""
                      :parameters {:query-params {:base64 s/Str}}
                      :produces   [content-type]
                      :responses  {200 {:schema s/Any}}
                      :handler    (build-download-handler func content-type header-fn)}}))))

(defn build-downloadable [path schema compressor-fn downloader-fn content-type]
  (api/context
    path []
    (sweet/resource
      {:description ""
       :post        {:summary    ""
                     :parameters {:body-params schema}
                     :consumes   ["application/json"]
                     :produces   ["text/plain"]
                     :responses  {200 {:schema s/Str}}
                     :handler    (fn [{body :body}]
                                   (let [args (json/parse-string (slurp body) keyword)]
                                     (http/content-type
                                       (http/ok (compressor-fn args))
                                       "text/plain")))}
       :get         {:summary    ""
                     :parameters {:query-params {:base64 s/Str}}
                     :produces   [content-type]
                     :responses  {200 {:schema s/Any}}
                     :handler    (fn [{{:keys [base64]} :query-params}]
                                   (http/content-type
                                     (http/ok (downloader-fn base64))
                                     content-type))}})))

(defn build-app []
  (-> {:swagger
       {:ui   "/swagger/ui"
        :spec "/swagger.json"
        :data {:info {:title       "Scullery Plateau"
                      :description "Table Top gaming "}
               :tags [{:name "spritely", :description "Spritely pixel art app"}
                      {:name "cobblestone", :description "Cobblestone tabletop battle map app"}]}}}
      (sweet/api
        (build-route "/svg" build-svg)
        (build-route "/img" build-img)
        (api/context
          "/spritely" []
          :tags ["spritely"]
          (build-route "/load" sp/load-file spc/SpritelyData)
          (build-compressor "/save" sp/compress-data spc/SpritelyData)
          (build-download "/savedata" sp/build-save-file "text/plain")
          (build-download "/saveimg" sp/build-image "image/png"))
        (api/context
          "/cobblestone" []
          :tags ["cobblestone"]
          (build-route "/load" cb/load-file cbs/CobblestoneData)
          (build-downloadable "/tile" cbs/TileData cb/compress-data cb/build-tile-image "image/png")
          (build-compressor "/save" cb/compress-data cbs/CobblestoneData)
          (build-download "/data" cb/build-save-file "text/plain")
          (build-download "/map" cb/build-map-image "image/png")
          (build-download "/print" cb/build-printable "application/pdf"))
        (sweet/GET "/" [] (resp/redirect "/index.html")))
      (sweet/routes
        (route/resources "/")
        (route/not-found "404 Not Found")))
  )

(defn -main [& [port]]
  (let [my-app (build-app)
        port (Integer. ^int (or port (env :port) 5000))]
    (server/run-server my-app {:port port :join? false})))