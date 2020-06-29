import styled from 'styled-components';

const LoginFormWrapperStyled = styled.div`
  max-width: 1920px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 10% 30% 10% 50%;
  grid-template-areas:
    'logo background'
    'title background'
    'header background'
    'form background';
  min-height: 100vh;
  place-items: center;
  background: #fafafa;
`;

export default LoginFormWrapperStyled;
