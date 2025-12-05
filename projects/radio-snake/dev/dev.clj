(ns dev
  (:require [fs-data-windows]
            [radio-snake.main :as main]
            [radio-snake.frames :as frames]
            [flow-storm.runtime.values :as rt-values]
            [flow-storm.api :as fsa])
  (:import [radio_snake.frames SamplesFrame]))

(defn start []
  (let [{:keys [start-fn stop-fn]} (main/rf-snake-main
                                    {:mocked-samples "./data/remote_200k.samples"
                                     :scopes #{#_:frame-source
                                               #_:am-demod
                                               #_:burst-splitter
                                               #_:normalizer}
                                     :scopes-push-val-fn fsa/data-window-push-val
                                     :scopes-val-update-fn fsa/data-window-val-update})]
    (start-fn)
    (def stop stop-fn)))

(comment

  ;; - Load the file, and start the UI (`:dbg`)
  ;; - Let's explore the scope DataWindow that comes with FlowStorm by uncommenting
  ;;   the keys under :scopes and then starting the system with (start) below
  ;; - Stop the system with (stop)
  ;; - Switch multi-thread recording ON and then start the system
  ;; - Wait until we see the snake make some turns and then stop recording
  ;;   and then safely stop the system also
  ;; - Head now to the "Async Flow" plugin and hit refresh
  ;; - We can see how the combination of the scope data window plus the plugin makes
  ;;   looking at these systems much easier.
  ;; - See there is no mention of FlowStorm namespaces in the entire codebase but
  ;;   this namespace

  (start)
  (stop)

  )

(extend-protocol rt-values/ScopeFrameP

  SamplesFrame
  (frame-samp-rate [fr] (:samp-rate fr))
  (frame-samples [fr] (:samples fr)))

(defmethod print-method SamplesFrame [^SamplesFrame sf ^java.io.Writer w]
  (.write w (str "Samp rate: " (rt-values/frame-samp-rate sf) ", Samples: " (count (rt-values/frame-samples sf)))))
