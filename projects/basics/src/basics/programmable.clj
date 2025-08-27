(ns basics.programmable
  (:require [flow-storm.runtime.indexes.api :as idx-api]
            [flow-storm.runtime.debuggers-api :as dbg-api]))

;; We access the repl api by requiring `flow-storm.runtime.indexes.api`

(defn my-sum [a b]
  (+ a b))

(comment

  ;; - Let's start by recording something simple
  (my-sum 40 2)

  ;; - Now let's switch recording OFF and for convenience define a thread-id with the one we recorded on
  (def thread-id 66)

  ;; - We can retrieve the timeline by flow-id and thread-id
  (def timeline (idx-api/get-timeline 0 thread-id))

  ;; - The timeline implements a bunch of Clojure's collections interfaces
  ;;   so you can use most functions on them
  (count timeline)

  (seq timeline)

  (get timeline 0)

  (->> timeline
       (map idx-api/as-immutable))

  (def expr (get timeline 2))

  (idx-api/get-expr-val expr)

  (idx-api/get-sub-form timeline 4)

  ;; We can make the UI jump to a point in time from the repl
  ;; which is the same as going to the flow, opening the thread and then
  ;; typing the idx on the "timeline current step" box.
  (dbg-api/goto-location 0 {:thread/id thread-id
                            :thread/idx 4})

  )
