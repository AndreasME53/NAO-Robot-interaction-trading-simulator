import React from 'react';
import { getSession } from 'utils/user';

import { Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import { connect } from 'react-redux';

/**
 * PrivateRoute is used to support the react router and it renders the routes
 * which is marked as private or is only accessible authenticated users
 * @param {React.Component} component
 */
const PrivateRoute = ({ component, ...rest }) => {
  const { defaultPath } = rest;

  const isAuthenticated = !!getSession();

  const routeComponent = props => (isAuthenticated ? React.createElement(component, props) : <Redirect to={{ pathname: defaultPath }} />);
  return <Route {...rest} render={routeComponent} pageTitle="" />;
};

const mapProps = (state: any) => {
  return {};
};

export default connect(mapProps, {})(PrivateRoute);
