/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = ({ component: Component, isLogin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default NavigationLink;

NavigationLink.propTypes = {
  component: PropTypes.shape().isRequired,
  isLogin: PropTypes.bool.isRequired,
};
