import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import emailValidator from '../../../../utils/validators/emailValidator';
import passwordValidator from '../../../../utils/validators/passwordValidator';
import Input from '../../../UI/Input/Input';
import LoginFormWrapperStyled from '../../Login/LoginForm/Styled/LoginFormWrapperStyled';
import Logo from '../../../UI/Logo/Logo';
import LoginPageTitle from '../../Login/LoginPageTitle/LoginPageTitle';
import FormNameStyled from '../../Login/LoginForm/Styled/FormNameStyled';
import FormStyled from '../../Login/LoginForm/Styled/FormStyled';

const formName = 'Sign up';

const RegistrationForm = (props) => {
  const { handleSubmit } = props;
  return (
    <LoginFormWrapperStyled>
      <Logo className="login-form_logo" />
      <LoginPageTitle />
      <FormNameStyled>{formName}</FormNameStyled>
      <FormStyled onSubmit={handleSubmit}>
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
        <button className="button_sign-in" type="submit" aria-label="Sign In">
          OK
        </button>
      </FormStyled>
    </LoginFormWrapperStyled>
  );
};

const ReduxRegistrationForm = reduxForm({
  form: 'login',
})(RegistrationForm);

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ReduxRegistrationForm;
