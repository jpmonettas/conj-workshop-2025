(ns mine-sweeper.main
  (:require [clojure.java.io :as io]
            [mine-sweeper.core :as ms])
  (:import [javafx.stage Stage]
           [javafx.scene Scene Node]
           [javafx.scene.image Image ImageView]
           [javafx.scene.layout BorderPane HBox VBox Pane StackPane]
           [javafx.event EventHandler]
           [javafx.scene.input MouseEvent MouseButton]
           [javafx.scene.canvas Canvas GraphicsContext]
           [javafx.geometry Insets]
           [javafx.scene.control Label]
           [javafx.scene.text Font]
           [javafx.application Platform]
           [javafx.scene.paint Color]))

(def *game-state (atom nil))

(def mine-img (Image. (io/input-stream (io/resource "images/mine.png"))))
(def flag-img (Image. (io/input-stream (io/resource "images/flag.png"))))
(def smile-img (Image. (io/input-stream (io/resource "images/smile.png"))))
(def smile-sunglasses-img (Image. (io/input-stream (io/resource "images/smile-sunglasses.png"))))

(def cell-size 30)
(def canvas-offset 3)
(def cells-canvas-width (+ canvas-offset (* cell-size ms/cells-width)))
(def cells-canvas-height (+ canvas-offset (* cell-size ms/cells-height)))

(defn init-toolkit []
  (let [p (promise)]
    (try
      (Platform/startup (fn [] (deliver p true)))
      (catch Exception _ (deliver p false)))
    (if @p
      (println "JavaFX toolkit initialized")
      (println "JavaFX toolkit already initialized"))))

(defn add-class [^Node node class]
  (.add (.getStyleClass node) class))

(defn redraw-cells [^GraphicsContext gc {:keys [cells]}]
  (let [draw-cell (fn [x y flat?]
                    (if flat?
                      (do
                        (.setFill gc Color/GRAY)
                        (.fillRect gc x y cell-size cell-size)
                        (.setFill gc (Color/web "#c3c3c3"))
                        (.fillRect gc (+ 1 x) (+ 1 y) (- cell-size 2) (- cell-size 2)))
                      (do
                        (.setFill gc Color/WHITE)
                        (.fillRect gc x y cell-size cell-size)
                        (.setFill gc (Color/web "#828282"))
                        (.fillRect gc (+ 2 x) (+ 2 y) cell-size cell-size)
                        (.setFill gc (Color/web "#c3c3c3"))
                        (.fillRect gc (+ 2 x) (+ 2 y) (- cell-size 4) (- cell-size 4)))))]

    (doseq [{:keys [x y revealed? flag? mine? hint-cnt]} cells]
      (let [cell-x (+ canvas-offset (* x cell-size))
            cell-y (+ canvas-offset (* y cell-size))]
        (if (not revealed?)
          (do
            (draw-cell cell-x cell-y false)
            (when flag?
              (.setFill gc Color/BLACK)
              (.drawImage gc flag-img (+ 4 cell-x) (+ 4 cell-y) (- cell-size 8) (- cell-size 8))))

          (do
            (draw-cell cell-x cell-y true)
            (cond
              hint-cnt
              (do
                (.setFill gc (case hint-cnt
                               1 Color/BLUE
                               2 Color/GREEN
                               3 Color/RED
                               4 Color/DARKBLUE
                               5 Color/BROWN
                               6 Color/BLACK
                               7 Color/BLACK
                               8 Color/BLACK))
                (.fillText gc (str hint-cnt) (+ 10 cell-x) (+ 17 cell-y)))

              mine?
              (.drawImage gc mine-img (+ 4 cell-x) (+ 4 cell-y) (- cell-size 8) (- cell-size 8)))))))))

(defonce reset-game nil)

(defn -main [& _]
  (init-toolkit)
  (Platform/setImplicitExit false)
  (Platform/runLater
   (fn []
     (try
       (let [stage (doto (Stage.)
                     (.setTitle "Minesweeper"))
             canvas (Canvas. cells-canvas-width cells-canvas-height)
             canvas-pane (Pane. (into-array Node [canvas]))
             _ (add-class canvas-pane "canvas-pane")
             _ (add-class canvas-pane "box-hole")
             gc (.getGraphicsContext2D canvas)
             segment-font (Font/loadFont (io/input-stream (io/resource "fonts/digital-7.ttf")) 48.0)
             flags-lbl (doto (Label. "000")
                         (.setFont segment-font))
             _ (add-class flags-lbl "segment-label")
             smile-img-view (doto (ImageView.)
                              (.setFitWidth 40)
                              (.setFitHeight 40))
             smile-pane (doto (StackPane. (into-array Node [smile-img-view]))
                          (.setPrefWidth 50)
                          (.setPrefHeight 50))
             _ (add-class smile-pane "box-relief")
             _ (add-class smile-pane "smile-pane")
             time-pane (doto (Label. "000")
                         (.setFont segment-font))
             _ (add-class time-pane "segment-label")
             header-pane (HBox. 150 (into-array Node [flags-lbl smile-pane time-pane]))
             _ (add-class header-pane "box-hole")
             _ (add-class header-pane "header-pane")
             main-pane (doto (BorderPane.)
                         (.setTop header-pane)
                         (.setCenter canvas-pane))
             _ (BorderPane/setMargin canvas-pane (Insets. 10 0 0 0))
             _ (add-class main-pane "main-pane")
             _ (add-class main-pane "box-relief")
             window-width 573
             window-height 681
             scene (Scene. main-pane
                           window-width
                           window-height)]
         (.add (.getStylesheets scene) (str (io/resource "css/jfx_styles.css")))
         (alter-var-root #'reset-game (constantly
                                       (fn reset-game []
                                         (let [gs (reset! *game-state (ms/create-game))]
                                           (.setImage smile-img-view smile-img)
                                           (redraw-cells gc gs)
                                           (.setText flags-lbl (str "0" (:remaining-flags gs)))))))
         (.setOnMouseClicked smile-img-view
                             (reify EventHandler
                               (handle [_ mev]
                                 (when (= MouseButton/PRIMARY (.getButton ^MouseEvent mev))
                                   (reset-game)))))
         (.setOnMouseClicked canvas
                             (reify EventHandler
                               (handle [_ mev]
                                 (let [^MouseEvent mev mev
                                       x (int (quot (.getX mev) cell-size))
                                       y (int (quot (.getY mev) cell-size))
                                       {:keys [remaining-flags] :as state'} (cond
                                                                              (= MouseButton/PRIMARY (.getButton mev))
                                                                              (let [{:keys [status] :as state'} (swap! *game-state ms/reveal x y)]
                                                                                (if (= :lost status)
                                                                                  (ms/reveal-all-cells state')
                                                                                  state'))

                                                                              (= MouseButton/SECONDARY (.getButton mev))
                                                                              (let [{:keys [status] :as state'} (swap! *game-state ms/toggle-flag x y)]
                                                                                (when (= :won status) (.setImage smile-img-view smile-sunglasses-img))
                                                                                state'))]
                                   (redraw-cells gc state')
                                   (.setText flags-lbl (str "0" remaining-flags))))))
         (.setScene stage scene)

         (-> stage .show)

         (reset-game))

       (catch Exception e
         (.printStackTrace e))))))
