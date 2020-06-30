import React from 'react';
import LoginPageTittleStyled from './Styled/LoginPageTitleStyled';

const smallTitle = 'Start your study today!';
const bigTitle = 'learning languages ​​is easy!';

const LoginPageTitle = () => {
  return (
    <LoginPageTittleStyled>
      <p>{smallTitle}</p>
      <h2>{bigTitle}</h2>
    </LoginPageTittleStyled>
  );
};

export default LoginPageTitle;
