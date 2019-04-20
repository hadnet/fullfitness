import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import AppBar from './containers/AppBar';
import DashboardPage from './containers/DashboardPage';
import LoginPage from './containers/LoginPage';

export default () => (
  <App>
    <AppBar />
    <Switch>
      <Route path={routes.DASHBOARD} component={DashboardPage} />
      <Route path={routes.LOGIN} component={LoginPage} />
    </Switch>
  </App>
);
