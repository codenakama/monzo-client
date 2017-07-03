import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "react-router";
import Routes from "./routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./store/reducers";

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById("root")
);

export default store;
