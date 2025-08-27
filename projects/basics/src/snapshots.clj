(ns snapshots
  (:require [flow-storm.runtime.values :refer [SnapshotP]]))

;; Important !!!
;; Be sure you define your snapshots in a non instrumented namespace

(extend-protocol SnapshotP
  java.util.ArrayList
  (snapshot-value [a]
    {:ref/type 'java.util.ArrayList
     :snapshot/items (into [] a)}))
