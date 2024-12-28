// Import scss
import './App.scss';
import 'axios-progress-bar/dist/nprogress.css';
import 'react-notifications/lib/notifications.css';

import React, { FC } from 'react';
import { NotificationContainer } from 'react-notifications';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Routes from 'routes';
import configureStore from 'store';
import history from 'utils/history';
import { loadProgressBar } from 'axios-progress-bar';
import { HeaderContainer } from 'pages/Dashboard/containers';

export const store = configureStore();
loadProgressBar();
const App: FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <HeaderContainer />
        <Routes />
      </Router>
      <NotificationContainer />
    </Provider>
  );
};

export default App;
