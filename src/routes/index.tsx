import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import PrivateRoute from 'routes/PrivateRoute';
import UserRoute from 'routes/UserRoute';
import map from 'lodash/map';

import DashboardRoutes from 'pages/Dashboard';
import StockIRobotRoutes from 'pages/StockIRobot';
import AccountHistoryRoutes from 'pages/Account';

const RoutesHOC = (routes: any, DEFAULT_PATH: any) => {
  return function Component() {
    return (
      <Switch>
        {map(routes, route => {
          if (route.isPrivate) {
            return <PrivateRoute key={route.title} title={route.title} path={route.path} component={route.component} defaultPath={DEFAULT_PATH} />;
          }
          return <UserRoute key={route.title} title={route.title} defaultPath={DEFAULT_PATH} path={route.path} component={route.component} />;
        })}
        <Redirect to={DEFAULT_PATH} />
      </Switch>
    );
  };
};

export const dashboardRoutes = {};

export const routes = {
  DASHBOARD: {
    path: '/dashboard',
    title: 'Dashboard',
    component: DashboardRoutes,
    isPrivate: false
  },
  STOCKIROBOT: {
    path: '/stockirobot',
    title: 'StockIRobot',
    component: StockIRobotRoutes,
    isPrivate: false
  },
  ACCOUNTHISTORY: {
    path: '/account',
    title: 'AccountHistory',
    component: AccountHistoryRoutes,
    isPrivate: false
  }
};

export const DEFAULT_PATH = '/dashboard';
export const USER_LANDING_PAGE = '/';

const AppRoutes = RoutesHOC(routes, DEFAULT_PATH);
export default AppRoutes;
