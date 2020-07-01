import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const LoginPageTitleStyled = styled.div`
  grid-area: title;
  align-self: center;
  justify-self: start;
  margin-left: 150px;

  @media ${DEVICE.laptopL} {
    width: calc(100% - 210px);
  }

  @media ${DEVICE.laptop} {
    margin-left: 60px;
    width: calc(100% - 120px);
  }

  @media ${DEVICE.mobileL} {
    margin-left: 0;
    width: 100%;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 19.6212px;
    line-height: 24px;
    margin: 0;
    margin-bottom: 10px;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 47.3752px;
    line-height: 56px;
    text-transform: uppercase;
    margin: 0;

    @media ${DEVICE.laptop} {
      font-size: 35px;
      line-height: 45px;
    }

    @media ${DEVICE.tablet} {
      font-size: 26px;
      line-height: 35px;
    }
  }
`;

export default LoginPageTitleStyled;
