import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Routing from "./components/Routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  rootElement
);
