import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Translate, I18n } from 'react-redux-i18n';
import emailValidator from '../../../../utils/validators/emailValidator';
import passwordValidator from '../../../../utils/validators/passwordValidator';
import Input from '../../../UI/Input/Input';
import LoginFormWrapperStyled from '../../Login/LoginForm/Styled/LoginFormWrapperStyled';
import Logo from '../../../UI/Logo/Logo';
import LoginPageTitle from '../../Login/LoginPageTitle/LoginPageTitle';
import FormNameStyled from '../../Login/LoginForm/Styled/FormNameStyled';
import FormStyled from '../../Login/LoginForm/Styled/FormStyled';
import PatternStyled from '../../Login/LoginForm/Styled/PatternStyled';
import StyledFormNamesContainer from '../../Styled/StyledFormNamesContainer';

const RegistrationForm = (props) => {
  const { handleSubmit } = props;
  return (
    <LoginFormWrapperStyled>
      <Logo className="login-form_logo" />
      <LoginPageTitle />
      <StyledFormNamesContainer>
        <FormNameStyled>{I18n.t('Auth.signUp')}</FormNameStyled>
        <Link to="/login">
          <Translate value="Buttons.login" />
        </Link>
      </StyledFormNamesContainer>
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
          <Translate value="Buttons.OK" />
        </button>
      </FormStyled>
      <PatternStyled />
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
