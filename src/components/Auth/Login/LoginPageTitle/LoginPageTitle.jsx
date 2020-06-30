import React from 'react';
import { Translate } from 'react-redux-i18n';
import LoginPageTittleStyled from './Styled/LoginPageTitleStyled';

const LoginPageTitle = () => {
  return (
    <LoginPageTittleStyled>
      <p>
        <Translate value="Auth.smallTitle" />
      </p>
      <h2>
        <Translate value="Auth.bigTitle" />
      </h2>
    </LoginPageTittleStyled>
  );
};

export default LoginPageTitle;
