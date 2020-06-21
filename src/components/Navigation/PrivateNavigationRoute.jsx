/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import getLoginStatus from '../../utils/getLoginStatus';

const PrivateNavigationRoute = ({ component: Component, ...rest }) => {
  const isLogin = getLoginStatus();

  return (
    <Route
      {...rest}
      render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateNavigationRoute;

PrivateNavigationRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
};
