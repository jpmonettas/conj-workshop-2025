(ns mine-sweeper.utils)

;; All this ChatGPT PRNG is so we can have a seeded rand-int
;; that produces exactly the same in Clojure and ClojureScript for the same
;; seeds

;; LCG: X_{n+1} = (A*X + C) mod 2^31
(def A31 1103515245)
(def C31 12345)
(def M31 2147483648) ;; 2^31

(defn seeded-rand-int-gen
  "Given seed, returns (fn [N]) -> int in [0,N). N must be > 0."
  [seed]
  #?(:clj
     ;; JVM: keep state as 0..2^31-1 in a long, do 64-bit math, then mod 2^31.
     (let [state (volatile! (long (bit-and (int seed) 0x7fffffff)))]
       (fn [N]
         (let [n (int N)]
           (when (<= n 0)
             (throw (ex-info "N must be a positive integer" {:N N})))
           (let [x (vswap! state
                           (fn [^long s]
                             (let [sum (+
                                         (* (long A31) s)
                                         (long C31))
                                   r   (rem sum (long M31))]
                               (if (neg? r) (+ r M31) r))))
                 ;; x is 0..2^31-1 as long
                 u (int x)]
             (int (mod u n))))))

     :cljs
     ;; CLJS: keep state as BigInt 0n..(2^31-1n); never mix with Number.
     (let [A   (js/BigInt A31)
           C   (js/BigInt C31)
           ;; seed → BigInt → mod 2^31 via asUintN
           s0  (js/BigInt (int seed))
           state (volatile! (js/BigInt.asUintN 31 s0))]
       (fn [N]
         (let [n (int N)]
           (when (<= n 0)
             (throw (ex-info "N must be a positive integer" {:N N})))
           (let [x (vswap! state
                           (fn [s] (js/BigInt.asUintN 31 (+ (* A s) C))))
                 ;; safe to convert: x < 2^31 << 2^53
                 u (int (js/Number x))]
             (int (mod u n))))))))
