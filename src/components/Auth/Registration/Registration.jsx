import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ReduxRegistrationForm from './RegistrationForm/RegistrationForm';

const Registration = (props) => {
  const { registerToServer, isLogin } = props;

  if (isLogin) {
    return <Redirect to="/" />;
  }

  const onSubmit = (formData) => {
    registerToServer(formData);
  };

  return <ReduxRegistrationForm onSubmit={onSubmit} />;
};

Registration.propTypes = {
  registerToServer: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default Registration;
