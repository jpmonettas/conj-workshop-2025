(ns mine-sweeper.core
  (:require [mine-sweeper.utils :as u]))

(def cells-width 18)
(def cells-height 18)
(def mines-cnt 40)

(defonce rng-seed 5321
  #_(rand-int 10000))

(defn set-seed
  "Utility function for setting the PRNG seed"
  [seed]
  #?(:clj  (alter-var-root #'rng-seed (constantly seed))
     :cljs (set! rng-seed seed)))

(defn- generate-mines
  "Randomly generate n different coordinates to position mines
  using a seeded PRNG. Returns a vector of coords like [[x0 y0] ...]"
  ([n] (let [rand-gen (u/seeded-rand-int-gen rng-seed)]
         (println "Generating mines with seed : " rng-seed)
         (generate-mines n #{} rand-gen)))
  ([n mines-pos rand-gen] 
   (if (= n (count mines-pos))
     mines-pos
     (recur n (conj mines-pos [(rand-gen cells-width) (rand-gen cells-height)]) rand-gen))))

(defn- cell
  "Returns the cell at x,y from cells."
  [cells x y]
  (when (and (<= 0 x (dec cells-width))
             (<= 0 y (dec cells-height)))
    (let [pos (+ (* cells-width y) x)] 
      (get cells pos))))
 
(defn- update-cell
  "Update the game cell at x,y by applying f."
  [game x y f]
  (if (and (<= 0 x (dec cells-width))
           (<= 0 y (dec cells-height)))
    (let [pos (+ (* cells-width y) x)]
      (update-in game [:cells pos] f))
    game))

(defn- neighbours
  "Return all x,y neighbours cells."
  [cells x y]
  (doall
   (keep (fn [[a b]]
           (when-let [c (cell cells (+ x a) (+ y b))]
             c))
         [[-1 -1] [0 -1] [+1 -1]
          [-1  0]        [+1  0]
          [-1 +1] [0 +1] [-1 +1]])))

(defn- hint-cells
  "Hint all cells next to mines with negihbouring mines count."
  [cells]
  (mapv (fn [{:keys [x y mine?] :as cell}]
          (if mine?
            cell
            (let [mines-cnt (->> (neighbours cells x y)
                                 (filter :mine?)
                                 count)] 
              (cond-> cell
                (pos? mines-cnt) (assoc :hint-cnt mines-cnt)))))
        cells))

(defn- reveal-cell
  "Reveal a game cell at x,y."
  [{:keys [cells] :as game} x y]
  (let [{:keys [flag?]} (cell cells x y)] 
    (cond-> (update-cell game x y #(assoc % :revealed? true, :flag? false))
      flag? (update :remaining-flags inc))))

(defn reveal-all-cells
  "Reveals all cells in the game."
  [game]
  (reduce (fn [g {:keys [x y]}]
            (reveal-cell g x y)) 
   game
   (:cells game)))

(defn- unflag-cell
  "Removes the flag of a cell"
  [game x y]
  (update-cell game x y #(assoc % :flag? false)))

(defn- flag-cell
  "Adds a flag to a cell"
  [game x y]
  (update-cell game x y #(assoc % :flag? true)))

(defn- recursive-reveal
  "Recursively reveals game cells at x,y expanding while they
  are clear cells."
  [{:keys [cells] :as game} x y]
  (let [cell-ngs (neighbours cells x y)]
    (reduce (fn [g {:keys [x y hint-cnt mine? revealed? flag?]}]
              (if (or mine? revealed? flag?)
                g
                (cond-> (reveal-cell g x y) 
                  (not hint-cnt) (recursive-reveal x y))))
            game
            cell-ngs))) 

(defn- check-winning
  "If the game status is in a winning position, sets :status :won,
  otherwise returns the game untouched."
  [{:keys [cells] :as game}]
  (let [won? (->> cells
                  (filter :mine?)
                  (every? :flag?))]
    (if won?
      (assoc game :status :won)
      game)))

;;;;;;;;;;;;;;
;; Game API ;;
;;;;;;;;;;;;;;

(defn create-game
  "Build the game initial state with all mines and hints"
  [] 
  (let [mines-pos (generate-mines mines-cnt)
        cells (->> (for [y (range cells-height)
                         x (range cells-width)]
                     {:x x, :y y
                      :revealed? false
                      :flag? false
                      :mine? (contains? mines-pos [x y])})
                   (into [])
                   hint-cells)]
    {:cells cells
     :status :playing
     :remaining-flags mines-cnt}))

(defn reveal
  "Tries to reveal a game cell at x,y following the game rules."
  [{:keys [cells] :as game} x y]
  (let [c (cell cells x y)]
    (cond

      (:mine? c)
      (assoc game :status :lost)
      
      (:revealed? c)
      game

      (:hint-cnt c)
      (reveal-cell game x y)

      :else ;; we are clicking on an empty space, expand
      (-> game
          (reveal-cell x y)
          (recursive-reveal x y)))))

(defn toggle-flag
  "Toggles a flag at x,y"
  [{:keys [remaining-flags cells] :as game} x y]
  (let [c (cell cells x y)]
    (cond
      (:flag? c)
      (-> game
          (unflag-cell x y)
          (update :remaining-flags inc))
      
      (and (not (:flag? c))
           (pos? remaining-flags)
           (not (:revealed? c)))
      (-> game
          (flag-cell x y)
          (update :remaining-flags dec)
          check-winning)

      :else game)))

(comment

  ;; $ npm install
  ;; $ npx shadow-cljs watch :dev
  ;; $ npx shadow-cljs cljs-repl :dev
  
  ;; Open http://localhost:8021
  
  ;; Run the script in $ ./run-debugger
  
  ;; Refresh the page to connect it to FlowStorm
  

  ;; - Switch recording ON and click on the smile icon to restart the game
  ;; - Since this is single threaded, some good ways to have an overview of the recordings
  ;;   are using the "Call tree" or the "Functions list", play with them
  ;; - Check out the "Call tree" and create-game (under initialize-db) to see how the main game structure looks
  ;;   - Then inspect the return
  ;;   - And click down into :cells
  ;;   - A custom data window will help us visualizing the cells
  ;;   - Try on you cljs repl to tap these cells

  (tap> [{:x 0 :y 0 :flag? true :mine? true}
         {:x 1 :y 1 :hint-cnt 1}
         {:x 2 :y 2}])
  
  (tap> [{:x 0 :y 0}
         {:x 1 :y 1}
         {:x 0 :y 0}])
  
  ;;   - Let's jump into create-game code and step it

  ;; - Try to record some recursive reveals
  ;; - Quick jump to `reveal` and add a print on the `recursive-reveal` call `x` and `y`
  ;; - Quick jump to `reveal-cell` and add a print to the expression `(cell cells x y)`
  ;; - Now go to "More tools -> Printers" and hit refresh
  ;; - You can double click on any "print" to make the stepper jump to that position
  ;; - Now we have a debug log without modifying our code
  ;;   - Clear the recordings, play some, then refresh the printers window

  ;; BUG HUNTING TIME!
  ;; Bug description :
  ;; - Play a little bit until you hit a mine (so it reveals the board)
  ;;   - Notice how various hints are missing or wrong
  ;;   - Can you figure out what is going on?
  ;;   - TIP 1: You can record the creation of a new world and look at `hint-cells`  
  ;;   - TIP 2: You can use the `same-coord` power stepper on (neighbours cells x y) expression
  
  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ;; Instructions for running the game with Clojure instead ;;
  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  ;; - Open dev/dev.clj
  ;; - Load the file
  ;; - Run :dbg
  ;; - Follow the instructinos above

  
  )
