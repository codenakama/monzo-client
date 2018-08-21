import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from '../components/ProtectedRoute';
import { default as DashboardScreen } from '../containers/DashboardScreen';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <ProtectedRoute component={DashboardScreen} />
      {/* <Route path="/login" component={LoginScreen} /> */}
    </Route>
  </Router>
);

export default Routes;
