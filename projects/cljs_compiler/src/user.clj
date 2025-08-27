(ns user
  (:require [cljs.main]))

;; - Start with :1.12-storm and :fs-cljs-compiler-plugin aliases/profiles

;; - start our :dbg
;; - On a terminal on projects/cljs_compiler run:
;;    - lein repl :connect localhost:`cat .nrepl-port` OR if you don't have lein, the longer
;;    - clj -Sdeps '{:deps {nrepl/nrepl {:mvn/version "1.3.0"}}}' -M -m nrepl.cmdline --connect --host localhost --port `cat .nrepl-port`
;;      - then on that repl run (cljs.main/-main "--repl"), it should start a cljs repl and open a browser
;; - Record the compilation of something like (defn my-sum [a b] (+ a b))
;; - Head to the "Cljs compiler" plugin and start exploring
