import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Componentes
import Home from "./components/Home";
import App from "./App";
import DetallePais from "./components/DetallePais";
import CrearActividad from "./components/CrearActividad";
import Header from "./components/Header";
import store from "./store/index.js";
import { Provider } from "react-redux";
import Prueba from "./components/Map.js";

ReactDOM.render(
  <Provider store={store}>

    <React.StrictMode>
      <BrowserRouter>
        <Route path="/s">
          <Header />
        </Route>

        <Switch>
          <Route exact path="/">
            <App />
          </Route>

          <Route exact path="/test">
            <Prueba />
          </Route>

          <Route path="/s/home">
            <Home />
          </Route>

          {
            <Route path="/s/paises/:id">
              <DetallePais />
            </Route>
          }

          <Route path="/s/actividades/crear">
            <CrearActividad />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
