;; You can setup your global ~/.lein/profiles.clj (on linux and macOS)
;; or %USERPROFILE%\.lein\profiles.clj (on windows)
{:1.12-storm
 {:dependencies [[com.github.flow-storm/clojure "1.12.3-1"]
                 [com.github.flow-storm/flow-storm-dbg "4.5.9"]]
  :exclusions [org.clojure/clojure]
  :jvm-opts ["-Dflowstorm.theme=dark"]}

 :1.12-cljs-storm
 {:dependencies [[thheller/shadow-cljs "3.1.8"]
                 [com.github.flow-storm/clojurescript "1.12.42-2"]
                 [com.github.flow-storm/flow-storm-inst "4.5.9"]]
  :exclusions [org.clojure/clojurescript]}

 :fs-web-plugin
 {:dependencies [[com.github.flow-storm/flow-storm-web-plugin "1.0.3"]]
  :jvm-opts ["-Dclojure.storm.instrumentOnlyPrefixes.webPlugin=org.httpkit.server,ring.adapter.jetty,next.jdbc.result-set"
             "-Dflowstorm.plugins.namespaces.webPlugin=flow-storm.plugins.web.all"]}

 :fs-cljs-compiler-plugin
 {:dependencies [[com.github.flow-storm/flow-storm-cljs-compiler-plugin "1.0.0-beta5"]]
  :jvm-opts ["-Dclojure.storm.instrumentOnlyPrefixes.cljsCompilerPlugin=cljs."
             "-Dflowstorm.plugins.namespaces.cljsCompilerPlugin=flow-storm.plugins.cljs-compiler.all"]}

 :fs-async-flow-plugin
 {:dependencies [[com.github.flow-storm/flow-storm-async-flow-plugin "1.0.1-alpha3"]]
  :jvm-opts ["-Dclojure.storm.instrumentOnlyPrefixes.asyncFlowPlugin=clojure.core.async.flow"
             "-Dflowstorm.plugins.namespaces.asyncFlowPlugin=flow-storm.plugins.async-flow.all"]}

 :fs-flowbook-plugin
 {:dependencies [[com.github.flow-storm/flow-storm-flowbook-plugin "1.0.0-alpha1"]]
  :jvm-opts ["-Dflowstorm.plugins.namespaces.flowbookPlugin=flow-storm.plugins.flowbook.all"]}}
