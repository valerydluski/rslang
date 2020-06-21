import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import emailValidator from '../../../../utils/validators/emailValidator';
import passwordValidator from '../../../../utils/validators/passwordValidator';
import Input from '../../../UI/Input/Input';

const RegistrationForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" key="name" type="text" placeholder="name" component={Input} />
      <Field
        name="email"
        key="email"
        type="text"
        placeholder="email"
        component={Input}
        validate={emailValidator}
      />
      <Field
        name="password"
        key="password"
        type="password"
        placeholder="password"
        component={Input}
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
