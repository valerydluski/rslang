import React from 'react';

import { Field, reduxForm } from 'redux-form';

import LoginInput from '../LoginInput/LoginInput';

const LoginForm = () => {
  return (
    <form>
      <Field name="login" key="login" type="text" placeholder="login" component={LoginInput} />
      <Field
        name="password"
        key="password"
        type="password"
        placeholder="password"
        component={LoginInput}
      />
      <button type="submit" aria-label="Sign In">
        Sign In
      </button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({
  form: 'login',
})(LoginForm);

export default ReduxLoginForm;
