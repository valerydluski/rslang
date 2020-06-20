import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { NavLink } from 'react-router-dom';
import LoginInput from '../../UI/LoginInput/LoginInput';
import emailValidator from '../../../../utils/validators/emailValidator';
import passwordValidator from '../../../../utils/validators/passwordValidator';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        key="email"
        type="text"
        placeholder="email"
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
      <div>
        <NavLink to="/registration">Register</NavLink>
      </div>
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
