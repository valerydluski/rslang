import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Translate, I18n } from 'react-redux-i18n';
import emailValidator from '../../../../utils/validators/emailValidator';
import passwordValidator from '../../../../utils/validators/passwordValidator';
import Input from '../../../UI/Input/Input';
import LoginFormWrapperStyled from './Styled/LoginFormWrapperStyled';
import FormStyled from './Styled/FormStyled';
import Logo from '../../../UI/Logo/Logo';
import LoginPageTitle from '../LoginPageTitle/LoginPageTitle';
import FormNameStyled from './Styled/FormNameStyled';
import PatternStyled from './Styled/PatternStyled';
import StyledFormNamesContainer from '../../Styled/StyledFormNamesContainer';
import SignInAnimation from '../../Animation/SignInAnimation';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <LoginFormWrapperStyled>
      <Logo className="login-form_logo" />
      <LoginPageTitle />
      <StyledFormNamesContainer>
        <FormNameStyled>{I18n.t('Auth.signIn')}</FormNameStyled>
        <Link to="/registration">
          <Translate value="Buttons.register" />
        </Link>
      </StyledFormNamesContainer>
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
        <button className="button_sign-in" type="submit" aria-label="Sign In">
          <Translate value="Buttons.OK" />
        </button>
      </FormStyled>
      <PatternStyled>
        <SignInAnimation />
      </PatternStyled>
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
