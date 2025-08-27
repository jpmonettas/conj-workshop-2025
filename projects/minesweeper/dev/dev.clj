(ns dev
  (:require [mine-sweeper.main :as main]
            [mine-sweeper.core :as ms]
            [visualizers]))

(comment
  (main/-main)

  (ms/set-seed 5321)
  (main/reset-game)
  )
