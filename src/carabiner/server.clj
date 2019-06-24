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
            [carabiner.common.img :as img])
  (:import (java.io ByteArrayInputStream)))

(defn- build-svg [code]
  (let [docs (j2e (json/parse-string code keyword))
        svgs (core/build-svgs-from-tile-docs docs)]
    (vals svgs)))

(defn- build-img [code]
  (let [docs (j2e (json/parse-string code keyword))
        svgs (core/build-svgs-from-tile-docs docs)]
    (map img/svg-to-64 (vals svgs))))

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

(defn build-post [func schema]
  {:post        {:summary    ""
                 :parameters {:body-params schema}
                 :consumes   ["application/json"]
                 :produces   ["text/plain"]
                 :responses  {200 {}}
                 :handler    (fn [{obj :body-params}]
                               (http/content-type
                                 (http/ok (func obj))
                                 "text/plain"))}})


(defn build-compressor [path func schema]
  (api/context
    path []
    (sweet/resource
      (merge
        {:description ""}
        (build-post func schema)))))

(defn default-header-fn [_ _] {})

(defn download-file-headers [content-type {:keys [filename]} response-body]
  (merge
    {"Content-Length" (count response-body)
     "Content-Type" content-type}
    (if-not (empty? filename) {"Content-Disposition" (str "filename=" filename)} {})))

(defn build-download-handler [base-func content-type header-fn]
  (fn [{:keys [query-params]}]
    (let [result (base-func query-params)]
      (-> (http/ok (ByteArrayInputStream. result))
          (apply-headers (header-fn content-type query-params result))))))

(defn build-get [func content-type addl-params header-fn]
  {:get {:summary    ""
         :parameters {:query-params (merge {:base64 s/Str (s/optional-key :filename) s/Str} addl-params)}
         :produces   [content-type]
         :responses  {200 {}}
         :handler    (build-download-handler func content-type header-fn)}})

(defn build-download
  ([path func content-type] (build-download path func content-type {} default-header-fn))
  ([path func content-type header-fn]
   (build-download path func content-type {} header-fn))
  ([path func content-type addl-params header-fn]
   (api/context
     path []
     (sweet/resource
       (merge
         {:description ""}
         (build-get func content-type addl-params header-fn))))))

(defn build-downloadable
  ([path schema compressor-fn downloader-fn content-type]
    (build-downloadable path schema compressor-fn downloader-fn content-type {} default-header-fn))
  ([path schema compressor-fn downloader-fn content-type header-fn]
   (build-downloadable path schema compressor-fn downloader-fn content-type {} header-fn))
  ([path schema compressor-fn downloader-fn content-type addl-params header-fn]
   (api/context
     path []
     (sweet/resource
       (merge
         {:description ""}
         (build-post compressor-fn schema)
         (build-get downloader-fn content-type addl-params header-fn))))))

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
          (build-route "/load" sp/load-spritely-file spc/SpritelyData)
          (build-compressor "/save" sp/compress-data spc/SpritelyData)
          (build-download "/savedata" sp/build-save-file "text/plain" download-file-headers)
          (build-download "/saveimg" sp/build-image "image/png" {:scale s/Int} download-file-headers))
        (api/context
          "/cobblestone" []
          :tags ["cobblestone"]
          (build-route "/load" cb/load-cobblestone-file cbs/CobblestoneData)
          (build-downloadable "/tile" cbs/TileData cb/compress-tile cb/build-tile-image "image/png" download-file-headers)
          (build-compressor "/save" cb/compress-data cbs/CobblestoneData)
          (build-download "/data" cb/build-save-file "text/plain" download-file-headers)
          (build-download "/map" cb/build-map-image "image/png" download-file-headers)
          (build-download "/print" cb/build-printable "text/html" download-file-headers))
        (sweet/GET "/" [] (resp/redirect "/index.html")))
      (sweet/routes
        (route/resources "/")
        (route/not-found "404 Not Found"))))

(defn -main [& [port]]
  (let [my-app (build-app)
        port (Integer. ^int (or port (env :port) 5000))]
    (server/run-server my-app {:port port :join? false})))
