import React from 'react';
import PropTypes from 'prop-types';
import ReduxLoginForm from './LoginForm/LoginForm';

const Login = (props) => {
  const { authToServer } = props;
  const onSubmit = (formData) => {
    authToServer(formData);
  };

  return <ReduxLoginForm onSubmit={onSubmit} />;
};

Login.propTypes = {
  authToServer: PropTypes.func.isRequired,
};

export default Login;
