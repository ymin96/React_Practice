import React from "react";
import ReactDOM from "react-dom";
import "./doit_ui/app.css";
import CoinApp from "./08/CoinApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<CoinApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
