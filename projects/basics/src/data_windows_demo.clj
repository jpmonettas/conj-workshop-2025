(ns data-windows-demo
  (:require [flow-storm.api :as fsa]
            [flow-storm.debugger.ui.data-windows.visualizers :as viz]
            [flow-storm.runtime.values :as fs-values]
            [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [clojure.string :as str]
            [clojure.java.io :as io])
  (:import [javafx.scene.control Label]
           [javafx.scene.image Image ImageView]
           [javafx.scene.layout VBox GridPane]
           [java.io FileInputStream]))


;;;;;;;;;;;;;;;;;;;;;;;
;; Basic visualizers ;;
;;;;;;;;;;;;;;;;;;;;;;;

;; - Let's start by loading the namespace

(comment

  ;; - Move to the "Outputs" vertical tab where we can see taps
  ;;   We are going to use this to explore "Data Windows", but they are everywhere in FlowStorm
  ;; - Try different visualizations

  (tap> "Clojure rocks!")

  ;; - They support nested and infinite sequences
  (tap> {:a (filter odd? (range))})

  ;; - Also support meta navigation
  (tap> {:a ^:great {:name ^{:some-meta [1 2]}
                     {:other :hello
                      :bla "world"}}
         :b {:age 10}})

  )

;;;;;;;;;;;;;;;;;;;;;;;;
;; Custom visualizers ;;
;;;;;;;;;;;;;;;;;;;;;;;;

(def chess-board
  #{{:kind :king,  :player :white, :pos [0 5]}
    {:kind :rook,  :player :white, :pos [5 1]}
    {:kind :pawn,  :player :white, :pos [5 3]}
    {:kind :king,  :player :black, :pos [7 2]}
    {:kind :pawn,  :player :black, :pos [6 6]}
    {:kind :queen, :player :black, :pos [3 1]}})

(comment

  (tap> chess-board)

  )


;; - We can define custom visualizers
;; - They are composed of two decoupled parts (data-aspect-extractors (Runtime), and visualizers (UI))

(comment

  ;; - Let's register an aspect extractor for a set of maps that have a kind, player and pos
  ;;   that just returns the board
  (fs-values/register-data-aspect-extractor
   {:id :chess-board-data
    :pred (fn [val _]
            (and (set? val)
                 (let [{:keys [kind player pos]} (first val)]
                   (and kind player pos))))
    :extractor (fn [board _]
                 {:chess/board board})})

  ;; - Now we can register our chess board visualizer using JavaFX
  (viz/register-visualizer
   {:id :chess-board-viz

    ;; only be available if the chess-board data extractor run on this value
    :pred (fn [val] (contains? (::fs-values/kinds val) :chess-board-data))

    ;; use the chess/board info to render a board with java fx
    :on-create (fn [{:keys [chess/board]}]
                 (let [kind->sprite {:king "♚" :queen "♛" :rook "♜" :bishop "♝" :knight "♞" :pawn "♟"}
                       pos->piece (->> board
                                       (mapv #(vector (:pos %) %))
                                       (into {}))]
                   {:fx/node (let [gp (GridPane.)]
                               (doall
                                (for [row (range 8) col (range 8)]
                                  (let [cell-color (if (zero? (mod (+ col (mod row 2)) 2)) "#f0d9b5" "#b58863")
                                        {:keys [kind player]} (pos->piece [row col])
                                        cell-str (kind->sprite kind "")
                                        player-color (when player (name player))]
                                    (.add gp (doto (Label. cell-str)
                                               (.setStyle (format "-fx-background-color:%s; -fx-font-size:40; -fx-text-fill:%s; -fx-alignment: center;"
                                                                  cell-color player-color))
                                               (.setPrefWidth 50))
                                          (int col)
                                          (int row)))))
                               gp)}))})


  ;; we can make it the default if you need
  (viz/add-default-visualizer (fn [val-data] (contains? (:flow-storm.runtime.values/kinds val-data) :chess-board-data)) :chess-board-viz)

  )

;;;;;;;;;;;;;;;;;;;;
;; Datafy and nav ;;
;;;;;;;;;;;;;;;;;;;;

(def ds (jdbc/get-datasource {:dbtype "h2" :dbname "nav_example_db"}))

(comment

  #_(jdbc/execute! ds ["
create table person (
  id int auto_increment primary key,
  name varchar(32))"])

  #_(jdbc/execute! ds ["
create table emails (
  id int auto_increment primary key,
  person_id int,
  email varchar(255),
FOREIGN KEY (person_id) REFERENCES person(id))"])

  #_(jdbc/execute! ds ["insert into person(name) values('Rich Hickey')"])
  #_(jdbc/execute! ds ["insert into person(name) values('Alex Miller')"])

  #_(jdbc/execute! ds ["insert into emails(person_id,email) values(1,'rhickey@gmail.com')"])
  #_(jdbc/execute! ds ["insert into emails(person_id,email) values(1,'rhickey@nubank.com')"])
  #_(jdbc/execute! ds ["insert into emails(person_id,email) values(2,'alex@nubank.com')"])

  (tap> (jdbc/execute! ds ["select * from person"] {:builder-fn rs/as-unqualified-lower-maps}))
  (tap> (jdbc/execute! ds ["select * from emails"] {:builder-fn rs/as-unqualified-lower-maps}))

  ;; - Navigate inside one of the emails
  ;; - See a navigation button showing. This is because jdbc.next adds  datafy/nav based on foreign keys

  )

;;;;;;;;;;;;;;;;;
;; EQL queries ;;
;;;;;;;;;;;;;;;;;

;; - Enable "Config -> Pretty print previews"
;; - EQL queries are disable by default because they are still beta
;; - They are Entity Query Language, kind of like datomic pull

(comment
  (flow-storm.runtime.values/register-eql-query-pprint-extractor)
  (flow-storm.runtime.values/unregister-data-aspect-extractor :eql-query-pprint)
  )

(def example-data
  [{:name "Bob"
    :age 41
    :houses {1 {:rooms 5
                :address "A"}
             2 {:rooms 3
                :address "B"}}}
   {:name "Alice"
    :age 32
    :vehicles [{:type :car
                :wheels 4
                :seats #{{:kind :small :position :left}
                         {:kind :small :position :right}
                         {:kind :big :position :center}}}
               {:type :bike
                :wheels 2}]
    :trips (cycle [{:destination "Uruguay" ;; infinite!
                    :months-spent 11
                    :expenses [{:product 1
                                :price 10}
                               {:product 2
                                :price 20}]}
                   {:name "US"
                    :months-spent 1
                    :expenses [{:product 3
                                :price 30}
                               {:product 4
                                :price 40}]}])}])

(comment
  (tap> example-data)
  )

;; [*]
;; [:name]
;; [:name :age :vehicles]
;; [:name :age {:vehicles [:type]}]
;; [:name :age {:vehicles [?]}]
;; [:name {:vehicles [*]}]
;; [:name :age {:vehicles [:type {:seats [?]}]}]
;; [:name :age {:vehicles [:type {:seats [:kind]}]}]
;; [{:trips [:destination {:expenses [:price]}]}]

;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Realtime visualizers ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Now let's explore another feature of data windows, which allows us to see
;; values while they are changing.

(def scale 0.5) ;; define a scale we will soon redefine while the loop is running

(def *changing-ref (atom 0))

;; create a thread that loops and updates our atom
(def ref-update-thread nil)

(defn stop-thread []
  (when (and ref-update-thread (instance? Thread ref-update-thread))
    (.interrupt ref-update-thread)
    (alter-var-root #'ref-update-thread (constantly nil))))

(defn start-thread []
  (stop-thread) ;; make sure we don't run a new thread if there is one running already
  (let [t (doto (Thread.
                 (fn []
                   (loop [x 0]
                     (when-not (Thread/interrupted)
                       (Thread/sleep 3)
                       (reset! *changing-ref (* scale (Math/sin x)))
                       (recur (+ x 0.01))))))
            (.setName "Ref update thread")
            (.start))]
    (alter-var-root #'ref-update-thread (constantly t))))


(comment

  ;; Let's try something a little bit more fun, by creating a thread that
  ;; updates an atom with a sine wave

  ;; - Start the thread
  (start-thread)

  ;; Prob it
  (def stop-probe
    (fsa/probe-ref *changing-ref
                   (fn [v] v) ;; send the value to channel-1
                   (fn [v] 0) ;; leaves channel-2 always on zero
                   {}#_{:samp-rate 500}))

  ;; While everything is running try to redef the `scale` var with different values.

  ;; - You can now stop the probe and interrupt that thread
  (stop-probe)
  (stop-thread)

  )
