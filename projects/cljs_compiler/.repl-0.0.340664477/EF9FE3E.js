goog.provide('clojure.browser.repl.client');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('clojure.browser.repl');
clojure.browser.repl.client.start = (function clojure$browser$repl$client$start(url){
return goog.events.listen(window,"load",(function (){
return clojure.browser.repl.start_evaluator.call(null,url);
}));
});
