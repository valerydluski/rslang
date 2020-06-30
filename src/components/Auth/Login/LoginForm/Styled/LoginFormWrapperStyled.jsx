import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

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
  box-sizing: border-box;
  min-height: 900px;

  @media ${DEVICE.tablet} {
    grid-template-columns: 65% 35%;
  }

  @media ${DEVICE.mobileL} {
    grid-template-rows: 10% 25% 10% 65%;
    grid-template-areas:
      'logo logo'
      'title title'
      'header header'
      'form form';
    width: 100%;
    padding: 20px;
    min-height: 650px;
  }
`;

export default LoginFormWrapperStyled;
