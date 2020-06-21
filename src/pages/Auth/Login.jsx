import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ReduxLoginForm from '../../components/Auth/Login/LoginForm/LoginForm';
import getLoginStatus from '../../utils/getLoginStatus';

const Login = (props) => {
  const { authToServer, checkStatusSession } = props;

  checkStatusSession();

  const onSubmit = async (formData) => {
    await authToServer(formData);
  };

  if (getLoginStatus()) {
    return <Redirect to="/" />;
  }

  return <ReduxLoginForm onSubmit={onSubmit} />;
};

Login.propTypes = {
  authToServer: PropTypes.func.isRequired,
  checkStatusSession: PropTypes.func.isRequired,
};

export default Login;
