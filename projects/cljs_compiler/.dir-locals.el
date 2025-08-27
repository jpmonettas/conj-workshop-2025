((clojure-mode . ((cider-clojure-cli-aliases . "1.12-storm:fs-cljs-compiler-plugin")
                  (cider-lein-parameters . "with-profile +1.12-storm,+fs-cljs-compiler-plugin repl :headless :host ::")
                  (cider-jack-in-nrepl-middlewares . ("refactor-nrepl.middleware/wrap-refactor"
                                                      "cider.nrepl/cider-middleware"
                                                      "flow-storm.nrepl.middleware/wrap-flow-storm")))))
