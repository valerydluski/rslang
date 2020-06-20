import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ReduxLoginForm from '../../components/Auth/Login/LoginForm/LoginForm';

const Login = (props) => {
  const { authToServer, isLogin, checkStatusSession } = props;

  checkStatusSession();

  const onSubmit = async (formData) => {
    await authToServer(formData);
  };

  if (isLogin) {
    return <Redirect to="/" />;
  }

  return <ReduxLoginForm onSubmit={onSubmit} />;
};

Login.propTypes = {
  authToServer: PropTypes.func.isRequired,
  checkStatusSession: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default Login;
