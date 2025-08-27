(defproject big-demo "0.1.0-SNAPSHOT"
  :description "Basics"
  :dependencies [[org.clojure/data.codec "0.1.1"]
                 [com.clojure-goes-fast/clj-java-decompiler "0.3.6"]
                 [com.github.seancorfield/next.jdbc "1.3.994"]
                 [com.h2database/h2 "2.2.224"]]
  :resource-paths ["src" "resources"]

  ;; This is not needed if you have them globally (recommended)!
  ;; Duplicated it here just because on VSCode it isn't easy to start a repl with
  ;; global aliases the first time
  :profiles {:1.12-storm
             {:dependencies [[com.github.flow-storm/clojure "1.12.3-1"]
                             [com.github.flow-storm/flow-storm-dbg "4.5.9"]]
              :exclusions [org.clojure/clojure]
              :jvm-opts ["-Dflowstorm.theme=dark"]}})
