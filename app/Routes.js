import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import MainPage from './containers/MainPage';
import DashboardPage from './containers/DashboardPage';

export default () => (
  <App>
    <MainPage/>
    <Switch>
      <Route exact path={routes.DASHBOARD} component={DashboardPage} />
    </Switch>
  </App>
);
