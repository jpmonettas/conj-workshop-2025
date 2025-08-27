(ns mine-sweeper.main
  (:require [mine-sweeper.core :as ms]
            [reagent.dom :as rdom]
            [re-frame.core :as re-frame]))

(re-frame/reg-event-db
 ::initialize-db
 (fn initialize-db [_ _]
   (ms/create-game)))

(re-frame/reg-event-db
 ::reveal
 (fn initialize-db [game [_ x y]]
   (ms/reveal game x y)))

(re-frame/reg-event-db
 ::toggle-flag
 (fn initialize-db [game [_ x y]]
   (ms/toggle-flag game x y)))

(re-frame/reg-sub
 ::game
 (fn cells-sub [game] game))

(defn cells-panel [cells status]
  (let [cells (if (= :lost status)
                (:cells (ms/reveal-all-cells {:cells cells}))
                cells)]
    [:div
     [:div {:style {:display :grid
                    :grid-template-columns (str "repeat(" ms/cells-width ", 30px)")
                    :grid-template-rows (str "repeat(" ms/cells-height ", 30px)")}}
      (for [y (range ms/cells-height)
            x (range ms/cells-width)]
        (let [{:keys [mine? revealed? hint-cnt flag?]} (ms/cell cells x y)]
          [:div.cell {:key (str "cell-" x "-" y)
                      :class (if revealed? "cell-revealed" ["box-relief" "cell-covered"])
                      :on-click (fn [_] (when (= :playing status) (re-frame/dispatch [::reveal x y])))
                      :on-context-menu (fn [e]
                                         (.preventDefault e)
                                         (when (= :playing status)
                                           (re-frame/dispatch [::toggle-flag x y])))}
           (if revealed?
             (cond
               mine? [:img.mine {:src "/images/mine.png"}]
               hint-cnt [:div {:style {:color (case hint-cnt
                                                1 :blue
                                                2 :green
                                                3 :red
                                                4 :darkblue
                                                5 :brown
                                                6 :black
                                                7 :black
                                                8 :black)}}
                         (str hint-cnt)])
             (when flag?
               [:img.flag {:src "/images/flag.png"}]))]))]]))

(defn main-panel []
  (let [{:keys [cells status remaining-flags]} @(re-frame/subscribe [::game])]
    [:div.outer.box-relief
     [:div.header-outer.box-hole
      [:div.flags-left.digital-pane (str "0" remaining-flags)]
      [:div [:img.smile.box-relief {:src (case status
                                           :won "/images/smile-sunglasses.png"
                                           "/images/smile.png")
                                    :on-click (fn [_] (re-frame/dispatch [::initialize-db]))}]]
      [:div.time-left.digital-pane "000"]]
     [:div.cells-outer.box-hole
      [cells-panel cells status]]]))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [main-panel] root-el)))

(defn ^:export init []
  (re-frame/dispatch-sync [::initialize-db])
  (mount-root)
  (js/console.log "System loaded"))

(comment
  (do
    (ms/set-seed 7199) ;; [6, 3]
    (re-frame/dispatch-sync [::initialize-db]))
  )
