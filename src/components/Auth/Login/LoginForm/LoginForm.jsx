import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import emailValidator from '../../../../utils/validators/emailValidator';
import passwordValidator from '../../../../utils/validators/passwordValidator';
import Input from '../../../UI/Input/Input';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
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
      <div>
        <Link to="/registration">Register</Link>
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
