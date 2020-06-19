import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import LoginInput from '../../UI/LoginInput/LoginInput';
import emailValidator from '../../../../utils/validators/emailValidator';
import passwordValidator from '../../../../utils/validators/passwordValidator';

const RegistrationForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" key="name" type="text" placeholder="name" component={LoginInput} />
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
      <button type="submit" aria-label="Sign In">
        Sign Up
      </button>
    </form>
  );
};

const ReduxRegistrationForm = reduxForm({
  form: 'login',
})(RegistrationForm);

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ReduxRegistrationForm;
