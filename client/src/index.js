import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Componentes
import Home from "./components/Home";
import App from "./App";
import DetallePais from "./components/DetallePais";
import CrearActividad from "./components/CrearActividad";
import store from "./store/index.js";
import { Provider } from "react-redux";

import "./normalize.css";
import "./global.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/paises/:id">
            <DetallePais />
          </Route>

          <Route path="/actividades/crear">
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
