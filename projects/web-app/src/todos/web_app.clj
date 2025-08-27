(ns todos.web-app
  (:require [org.httpkit.server :as http-server]
            [compojure.core :refer [GET POST routes]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.resource :refer [wrap-resource]]
            [hiccup.core :as h]
            [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]))

(def database (jdbc/get-datasource {:dbtype "h2" :dbname "todos"}))

(defn add-todo [todo-text]
  (jdbc/execute!
   database
   ["insert into todos(text,done) values(?,0)" todo-text]))

(defn mark-todo-done [todo-id]
  (jdbc/execute!
   database
   ["update todos set done=1 where id=?" todo-id]))

(defn all-todos []
  (->> (jdbc/execute!
        database
        ["select * from todos"]
        {:builder-fn rs/as-unqualified-lower-maps})
       (mapv (fn build-todo [todo] (update todo :done {0 false 1 true})))))

(defn render-main-page []
  (h/html
      [:html
       [:head
        [:link {:rel "stylesheet" :href "css/styles.css"}]]
       [:body
        [:h1 "TODOs app"]
        [:ul
         (->> (all-todos)
              (map (fn build-todo-item [{:keys [id text done]}]
                     (if done

                       ;; :li for done
                       [:li [:span text] [:span.complete "Complete"]]

                       ;; :li for not done
                       [:li
                        [:span text]
                        [:form {:action "/mark-done" :method "POST"}
                         [:input {:name "todo-id" :type "hidden" :value (str id)}]
                         [:input {:type "submit" :value "Mark as done"}]]])))
              doall)]

        [:form {:action "/add-todo" :method "POST" :class "add-todo-form"}
         [:label {:for "todo-text"} "New todo:"]
         [:input {:id "todo-text" :name "todo-text" :type "text"}]
         [:input {:type "submit" :value "Add todo"}]]]]))

(def handler
  (-> (routes
       (GET "/" req
         {:status 200
          :body (render-main-page)})

       (POST "/add-todo" req
         (let [todo-text (get-in req [:form-params "todo-text"])]
           (add-todo todo-text)
           {:status 200
            :body (render-main-page)}))

       (POST "/mark-done" req
         (let [todo-id (parse-long (get-in req [:form-params "todo-id"]))]
           (mark-todo-done todo-id)
           {:status 200
            :body (render-main-page)})))
      wrap-params
      (wrap-resource "/")))

(defn maybe-populate-db []
  (if (empty? (jdbc/execute! database ["select table_name from information_schema.tables where table_name='TODOS'"]))
    (do
      (println "Initializing and pre-populating db...")

      (jdbc/execute! database ["
create table todos (
  id int auto_increment primary key,
  text varchar(32),
  done int)"])

      (jdbc/execute! database ["insert into todos(text,done) values('Practice piano',0)"])
      (jdbc/execute! database ["insert into todos(text,done) values('Buy food',0)"])
      (jdbc/execute! database ["insert into todos(text,done) values('Review pull request',0)"]))

    (println "Db already populated.")))

(defonce stop-server nil)

(defn -main [& args]
  (if stop-server
    (println "Server already started, call (stop-server) to stop it")

    ;; else
    (do
      (println "Populating db ...")
      (maybe-populate-db)
      (println "Starting http server ...")
      (let [stop-srv (http-server/run-server
                      (fn handle [req] (#'handler req))
                      {:port 7744})]
        (alter-var-root #'stop-server
                        (constantly
                         (fn []
                           (stop-srv)
                           (alter-var-root #'stop-server (constantly nil))))))
      (println "Server started"))))

;;;;;;;;;;;;;;;;;;
;; For the repl ;;
;;;;;;;;;;;;;;;;;;

(comment

  ;; - Load the file
  ;; - Start FlowStorm's UI (`:dbg`)


  ;; - Start the http server
  (-main)

  ;; - Open a browser and navigate to `http://localhost:7744/`

  ;; - Let's overview the app. Handlers, rendering and DB querying.

  ;; - Switch BOTH RECORDINGS ON and re-load again `http://localhost:7744/` so we capture a page load

  ;; - We can start looking at the recordings with our general FlowStorm tooling, but let's introduce
  ;;   FlowStorm plugins.
  ;;   - Go to the `Web` vertical tab (there because we started with the web plugin)
  ;;   - Select the flow where you recorded everything, and hit refresh
  ;;   - Plugins are basically code that will use the repl api to identify interesting insights about
  ;;     your recordings and render them in a useful way. There is a chapter on the User's guid on
  ;;     how to create your own plugins.

  ;; - Now let's go back to the code stepper, and back to the beggining of our recordings.
  ;; - Just by stepping a little bit we get to the request. A nice trick we can do is to `def` the request
  ;;   so we can fire it again from the repl, like `(handler user/req)`

  ;; - Let's say you want to understand where `Buy food` seen on the screen is comming from
  ;;   - You can go to "More tools -> Search" and do a pr-str on `Buy food`
  ;;   - Double clicking on a search item will move the stepper to that point in time

  ;; - As we find interesting positions on the search result, we can bookmark them

  ;; - If you want to quickliy jump to some code as soon as we have a recording for it
  ;;   we can use a `(debugger)` or `(bookmark)` statement, they are the same thing

  ;; Try to record some "todos add" and "marking done" actions and look at them with the Web plugin
  ;; and the general FlowStorm tools.

  ;; - To stop the http server you can use
  (stop-server)


  ;; An example of handling a request from the repl assuming you def it in user/req
  (handler user/req)

  )
