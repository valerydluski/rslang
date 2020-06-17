import React from 'react';

import ReduxLoginForm from './Login/LoginForm/LoginForm';

const Auth = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return <ReduxLoginForm onSubmit={onSubmit} />;
};

export default Auth;
