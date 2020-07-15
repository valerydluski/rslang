import styled from 'styled-components';
import { DEVICE } from '../../../config';

const StartGamePageStyled = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  color: #000000;
  overflow: hidden;
  @media ${DEVICE.laptopL} {
    & > div:last-of-type {
      margin-top: -200px;
    }
    overflow: visible;
  }
`;

export default StartGamePageStyled;
