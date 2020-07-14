import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const LoginFormWrapperStyled = styled.div`
  max-width: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 10% 20% 10% 60%;
  grid-template-areas:
    'logo background'
    'title background'
    'header background'
    'form background';
  min-height: 100vh;
  place-items: center;
  background: #fafafa;
  box-sizing: border-box;
  min-height: 100%;
  max-height: 100%;

  @media (max-width: 1800px) {
    grid-template-columns: 40% 60%;
  }

  @media ${DEVICE.laptopL} {
    grid-template-columns: 50% 50%;
  }

  @media ${DEVICE.tablet} {
    grid-template-columns: 100%;
    grid-template-rows: 10% 25% 15% auto auto;
    grid-template-areas:
      'logo logo'
      'title title'
      'header header'
      'form form'
      'background background';
    width: 100%;
    padding: 20px;
  }
`;

export default LoginFormWrapperStyled;
