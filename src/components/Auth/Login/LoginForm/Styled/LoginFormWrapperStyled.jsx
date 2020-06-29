import styled from 'styled-components';

const LoginFormWrapperStyled = styled.div`
  max-width: 1920px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 20% 10% 50%;
  grid-template-areas:
    'logo background'
    'text background'
    'header background'
    'form background';
  min-height: 100vh;
  place-items: center;
`;

export default LoginFormWrapperStyled;
