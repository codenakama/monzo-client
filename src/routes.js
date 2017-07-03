import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import App from "./App";
import DashboardScreen from "./containers/DashboardScreen";

const Routes = props =>
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={DashboardScreen} />
    </Route>
  </Router>;

export default Routes;
