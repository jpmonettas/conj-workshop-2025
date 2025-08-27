(ns visualizers
  (:require #?@(:clj [[flow-storm.debugger.ui.data-windows.visualizers :as viz]
                      [flow-storm.debugger.ui.components :as ui]])
            [flow-storm.runtime.values :as fs-values])
  #?(:clj
     (:import [javafx.scene.control Label]
              [javafx.scene.layout GridPane])))

(fs-values/register-data-aspect-extractor
 {:id :minesweeper-cells
  :pred (fn [val _]
          (and (seqable? val)
               (let [m (first val)]
                 (map? m)
                 (contains? m :flag?)
                 (contains? m :revealed?)
                 (contains? m :x)
                 (contains? m :y))))
  :extractor (fn [cells _] {:minesweeper/cells cells})})

#?(:clj
   (viz/register-visualizer
    {:id :minesweeper-cells
     :pred (fn [val-data] (contains? (:flow-storm.runtime.values/kinds val-data) :minesweeper-cells))
     :on-create (fn [{:keys [minesweeper/cells]}]
                  {:fx/node (let [max-x (apply max (map :x cells))
                                  max-y (apply max (map :y cells))
                                  min-x (apply min (map :x cells))
                                  min-y (apply min (map :y cells))
                                  ^GridPane grid-pane (GridPane.)
                                  cells-map (->> cells
                                                 (map (fn [c] [[(:x c) (:y c)] c]))
                                                 (into {}))
                                  conflicting-cells? (not= (count cells-map) (count cells))]
                              (doseq [y (range min-y (inc max-y))]
                                (doseq [x (range min-x (inc max-x))]
                                  (let [{:keys [revealed? flag? mine? hint-cnt] :as cell} (cells-map [x y])
                                        cell-desc (str (if mine?     "M"                " ")
                                                       (if flag?     "F"                " ")
                                                       (if hint-cnt  (str "(" hint-cnt ")") " "))
                                        revealed-color (if revealed? "#9de3c6" "#c9a9c4")
                                        cell-lbl (if cell
                                                   (doto ^Label (ui/label :text cell-desc)
                                                     (.setStyle (format "-fx-border-color: magenta; -fx-background-color: %s;" revealed-color))
                                                     (.setPrefWidth 30)
                                                     (.setPrefHeight 30))
                                                   (doto ^Label (ui/label :text "")
                                                     (.setPrefWidth 30)
                                                     (.setPrefHeight 30)))]
                                    (GridPane/setColumnIndex cell-lbl (int (- x min-x)))
                                    (GridPane/setRowIndex cell-lbl (int (- y min-y)))
                                    (.add (.getChildren grid-pane) cell-lbl))))
                              (ui/border-pane
                               :top (ui/v-box :childs (cond-> [(ui/label :text (format "From [%d,%d] to [%d,%d]" min-x min-y max-x max-y))]
                                                        conflicting-cells? (into [(doto (ui/label :text "Conflicting cells!")
                                                                                    (.setStyle "-fx-text-fill: red"))])))
                               :center grid-pane))})}))

#?(:clj (viz/add-default-visualizer (fn [val-data] (contains? (:flow-storm.runtime.values/kinds val-data) :minesweeper-cells)) :minesweeper-cells))
