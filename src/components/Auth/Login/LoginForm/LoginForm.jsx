import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import LoginInput from '../LoginInput/LoginInput';
import emailValidator from '../../../../utils/validators/emailValidator';
import passwordValidator from '../../../../utils/validators/passwordValidator';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="login"
        key="login"
        type="text"
        placeholder="login"
        component={LoginInput}
        validate={emailValidator}
      />
      <Field
        name="password"
        key="password"
        type="password"
        placeholder="password"
        component={LoginInput}
        validate={passwordValidator}
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ReduxLoginForm;
