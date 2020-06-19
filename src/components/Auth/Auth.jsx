import React from 'react';
import ReduxLoginForm from './Login/LoginForm/LoginForm';

const Auth = (props) => {
  const { authToServer } = props;
  const onSubmit = (formData) => {
    authToServer(formData);
  };

  return <ReduxLoginForm onSubmit={onSubmit} />;
};

export default Auth;
