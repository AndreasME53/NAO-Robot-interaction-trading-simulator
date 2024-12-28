import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

/**
 * UserRoute is used to support the react router and it renders the routes
 * which is marked as private or is only accessible authenticated users
 * @param {React.Component} component
 */
const UserRoute = ({ component, ...rest }) => {
  const routeComponent = props => React.createElement(component, props);
  return <Route {...rest} render={routeComponent} pageTitle="" />;
};

const mapProps = (state: any) => {
  return {
    user: state
  };
};

export default connect(mapProps, {})(UserRoute);
