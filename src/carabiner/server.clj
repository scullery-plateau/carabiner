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
            [carabiner.json :refer [j2e]]))

(defn- build-svg [code]
  (let [docs (j2e (json/parse-string code keyword))
        svgs (core/build-svgs-from-tile-docs docs)]
    (vals svgs)))

(defn- build-img [code]
  (let [docs (j2e (json/parse-string code keyword))
        svgs (core/build-svgs-from-tile-docs docs)]
    (map core/svg-to-64 (vals svgs))))

(defn build-route [path func]
  (api/context
    path []
    (sweet/resource
      {:description ""
       :post        {:summary    ""
                     :parameters {:body s/Any}
                     :responses  {200 {:schema s/Any}}
                     :handler    (fn [{body :body}]
                                   (let [code (slurp body)]
                                     (http/content-type
                                       (http/ok (func code))
                                       "application/json")))}})))

(defn build-app []
  (-> {}
      (sweet/api
        (build-route "/svg" build-svg)
        (build-route "/img" build-img)
        (sweet/GET "/" [] (resp/redirect "/index.html")))
      (sweet/routes
        (route/resources "/")
        (route/not-found "404 Not Found")))
  )

(defn -main [& [port]]
  (let [my-app (build-app)
        port (Integer. ^int (or port (env :port) 5000))]
    (server/run-server my-app {:port port :join? false})))