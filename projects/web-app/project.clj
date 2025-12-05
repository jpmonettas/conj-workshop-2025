(defproject todos-web-app "0.1.0-SNAPSHOT"
  :description "Todos Web App"
  :resource-paths ["src" "resources"]
  :dependencies [[http-kit/http-kit "2.8.0"]
                 [ring/ring "1.13.0"]
                 [compojure/compojure "1.7.1"]
                 [hiccup/hiccup "2.0.0-RC3"]
                 [com.github.seancorfield/next.jdbc "1.3.994"]
                 [com.h2database/h2 "2.2.224"]]

  ;; This is not needed if you have them globally (recommended)!
  ;; Duplicated it here just because on VSCode it isn't easy to start a repl with
  ;; global aliases the first time
  :profiles
  {:1.12-storm {:dependencies [[com.github.flow-storm/clojure "1.12.3-4"]
                               [com.github.flow-storm/flow-storm-dbg "4.5.9"]]
                :exclusions [org.clojure/clojure]
                :jvm-opts ["-Dflowstorm.theme=dark"]}

   :fs-web-plugin {:dependencies [[com.github.flow-storm/flow-storm-web-plugin "1.0.3"]]
                   :jvm-opts ["-Dclojure.storm.instrumentOnlyPrefixes.webPlugin=org.httpkit.server,ring.adapter.jetty,next.jdbc.result-set"
                              "-Dflowstorm.plugins.namespaces.webPlugin=flow-storm.plugins.web.all"]}})
