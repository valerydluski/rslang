import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import emailValidator from '../../../../utils/validators/emailValidator';
import passwordValidator from '../../../../utils/validators/passwordValidator';
import Input from '../../../UI/Input/Input';
import LoginFormWrapperStyled from './Styled/LoginFormWrapperStyled';
import FormStyled from './Styled/FormStyled';
import Logo from '../../../UI/Logo/Logo';
import LoginPageTitle from '../LoginPageTitle/LoginPageTitle';
import FormNameStyled from './Styled/FormNameStyled';

const formName = 'Sign in';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <LoginFormWrapperStyled>
      <Logo className="login-form_logo" />
      <LoginPageTitle />
      <FormNameStyled>{formName}</FormNameStyled>
      <FormStyled onSubmit={handleSubmit}>
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
        <button className="button_sign-in" type="submit" aria-label="Sign In">
          OK
        </button>
      </FormStyled>
    </LoginFormWrapperStyled>
  );
};

const ReduxLoginForm = reduxForm({
  form: 'login',
})(LoginForm);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ReduxLoginForm;
