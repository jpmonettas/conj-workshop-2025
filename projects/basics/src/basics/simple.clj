(ns basics.simple)

;;;;;;;;;;;;;;;;;;;;;;;;;
;; Recursive functions ;;
;;;;;;;;;;;;;;;;;;;;;;;;;

(defn quick-sort [[pivot & coll]]
  (when pivot
    (let [smaller-than-pivot   (filterv (fn ltp [v] (< v pivot)) coll)
          bigger-than-pivot (filterv (fn gtp [v] (>= v pivot)) coll)]
      (concat (quick-sort smaller-than-pivot)
              [pivot]
              (quick-sort bigger-than-pivot)))))


(comment
  ;; - Notice on the Brower vertical tab how everything under `basics*` is automatically instrumented
  ;; - Try calling the function with recording OFF
  ;; - Try calling the function with recording ON
  ;; - One timeline should be recorded (a single thread run)
  ;; - It is good practice to switch recording OFF after you recorded what you want
  ;; - Play with the timeline counter and basics stepping controls (bottom row of buttons)
  ;; - See the values changing on the right "Data Window"
  ;; - Play with clicking expressions as a way of moving around
  ;; - Go inside the filter function
  ;; - Right click, "Jump to first record here" and friends
  ;; - Def some deeper coll as `c` to "bring it to the repl", then eval `user/c`
  ;; - Try the same-coord power stepper on `v` inside the filter fn
  ;; - Look at the `Locals` and `Stack` pane
  ;; - Click on the `bigger-than-pivot` expression at the bottom, then on `Locals` right click and "Define all"
  ;;   - You can now play with your editor evaluating sub expressions
  ;; - Go to the "Call tree view" (bottom left buttons) and look at the recursion
  ;;   - Single clicking on any call will show arguments and return values
  ;;   - Double clicking on any call will take us to the stepper at that point in time
  ;; - Got to the "Functions list view" (bottom left buttons)
  ;;   - Click on functions name to see their calls
  ;;   - Double click on a call to jump to that point in time
  ;; - Play with the basic workflow of clearing recordings (Ctrl+l or the trash icon) and recording again
  ;; - Play with recording on multiple flows

  (quick-sort '[3 4 2 7 8 0 9 8 2 3])
  (quick-sort '[3 4 2 7 ])
  user/c
  )

;;;;;;;;;;;;;;;;
;; Exceptions ;;
;;;;;;;;;;;;;;;;

(defn buggy [n]
  (->> (range n)
       (filter odd?)
       (partition-all 2)
       (map second)
       (drop 10)
       (reduce +)))

;; - From now on let's start by clearing our recordings and turning them OFF
;; - Run buggy with both inputs
;; - Switch recording ON and run the call that throws again
;; - Look at the Exceptions drowpdown and click on the exception
;; - Clicking back should take us to right before the exception
;; - CLICK AROUND TO SEE IF YOU CAN FIGURE OUT WHAT'S WRONG!
;; - You have "Config -> Auto jump to exceptions" to make this faster

(comment

  (buggy 72) ;; works
  (buggy 70) ;; throws

  )


;;;;;;;;;;;;;;;
;; Libraries ;;
;;;;;;;;;;;;;;;


(comment

  ;; - Let's require a new namespace and call some code
  ;; - Switch recording ON, and run the code again
  ;; - Why can't we go in b64/encode and our timeline is so small ?
  ;; - Jump to the "Browser" vertical tab
  ;; - See we are only instrumeting namespaces that starts with basics (which means basics*)
  ;; - Let's add `clojure.data.codec.base64` as a new instrumentation prefix, and accept the reload
  ;; - Clear the recordings and try to run the expression again
  ;; - Now we have a much bigger timeline, let's step in
  ;; - Checkout the "Quck jump" box. A quick way to jump to a function if you know at least part of the name
  ;; - Same can be done with the functions list filter (even more powerful if the function was called many times)
  ;; - Let's now jump into `encode!` and click on any expression outside and inside the loop
  ;;   - "Loop menus" allow us to jump to the iteration we want

  (require '[clojure.data.codec.base64 :as b64])

  (-> "Clojure rocks!!!"
      .getBytes
      b64/encode
      String.)

  )

;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Total order timeline ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;

(def c [3 4 2 7 8 0 9 8 2 3])

(comment
  ;; - First just switch the normal recording on and try the code below
  ;; - Switch multi-thread timeline recording ON
  ;; - Run the parallel quick-sort
  ;; - Open various threads timelines and step around
  ;; - Goto "More tools -> Multi-thread timeline browser" for seeing expression interleaving
  ;;   - Type `pivot` or `8` on the filter
  ;;   - Check "Only functions" and refresh

  (pmap quick-sort [(shuffle c)
                    (shuffle c)
                    (shuffle c)
                    (shuffle c)])
  )

;;;;;;;;;;;;;;;;;;
;; Uninstrument ;;
;;;;;;;;;;;;;;;;;;

(require '[clj-java-decompiler.core :refer [decompile]])

(comment

  ;; - What if you don't want instrumentation for whatever reason (like profiling)
  ;; - Let's define and decompile the sum function to check it is instrumented
  ;; - Now disable instrumentation (top left corner) and do it again

  (decompile
   (defn sum [a b]
     (+ a b)))

  )

;; - Note: for peolpe not used to these "decompilations" the Clojure compiler doesn't generate java code
;;   it generates JVM bytecode. We are running a bytecode to java decompiler here as a useful way to see the
;;   JVM classes being generated by the Clojure compiler under the hood.

;;;;;;;;;;;;;;;;;;;;
;; Snapshot value ;;
;;;;;;;;;;;;;;;;;;;;

(comment

  ;; - Make sure we re-enable instrumentation
  ;; - What happens if we are dealing with mutable references, let's record the following
  ;; - Now let's require the snapshots namespace and try again
  ;; - Take a look at snapshots.clj

  (let [a (java.util.ArrayList.)]
    (count a)
    (.add a "hello")
    (count a)
    (.add a "world")
    (.add a "!")
    a)


  (require 'snapshots)

  )
