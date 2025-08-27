(defproject radio-snake "0.1.0-SNAPSHOT"
  :description "Radio Snake"
  :resource-paths ["src" "resources"]
  :dependencies [[org.apache.commons/commons-math3 "3.6.1"]
                 [org.clojure/core.async "1.9.808-alpha1"]
                 [org.openjfx/javafx-controls "21.0.4-ea+1"]
                 [org.openjfx/javafx-base "21.0.4-ea+1"]
                 [org.openjfx/javafx-graphics "21.0.4-ea+1"]]

  ;; This is not needed if you have them globally (recommended)!
  ;; Duplicated it here just because on VSCode it isn't easy to start a repl with
  ;; global aliases the first time
  :profiles
  {:dev {:jvm-opts [;; If our systems have to deal with many recordings like in this case, we can set
                    ;; some properties that will help with the perf of our system.
                    ;; Most of the following options can be accomplish from the UI also

                    ;; First we can disable auto updating the UI, we can do it with a click as we need
                    "-Dflowstorm.autoUpdateUI=false"

                    ;; We can disable the call tree if we aren't going to use it for some extra performance
                    "-Dflowstorm.callTreeUpdate=false"

                    ;; Not needed in this case but the UI has a timeout (defaults to 5sec) on how much it can wait
                    ;; for the runtime to compute something, it can be increased if we need it
                    "-Dflowstorm.uiTimeoutMillis=10000"

                    ;; We can set a heap limit in Megabytes. When the limit is reached FlowStorm will stop recording
                    ;; automatically
                    "-Dflowstorm.heapLimit=3000"

                    ;; We can skip instrumenting some namespaces we are not interested in instrumeting
                    "-Dclojure.storm.instrumentSkipPrefixes=radio-snake.samplers.file-replay,radio-snake.frames"]
         :resource-paths ["dev"]}

   :1.12-storm {:dependencies [[com.github.flow-storm/clojure "1.12.3-1"]
                               [com.github.flow-storm/flow-storm-dbg "4.5.9"]]
                :exclusions [org.clojure/clojure]
                :jvm-opts ["-Dflowstorm.theme=dark"]}

   :fs-async-flow-plugin
   {:dependencies [[com.github.flow-storm/flow-storm-async-flow-plugin "1.0.1-alpha3"]]
    :jvm-opts ["-Dclojure.storm.instrumentOnlyPrefixes.asyncFlowPlugin=clojure.core.async.flow"
               "-Dflowstorm.plugins.namespaces.asyncFlowPlugin=flow-storm.plugins.async-flow.all"]}})
