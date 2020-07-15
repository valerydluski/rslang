import styled from 'styled-components';
import backgroundImage from '../../../../assets/img/background.png';
import { DEVICE } from '../../../../config';

const AudiocallStyled = styled.div`
  background: url(${backgroundImage});
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px;
  box-sizing: border-box;
  @media ${DEVICE.tablet} {
    padding: 40px 20px;
  }
`;

export default AudiocallStyled;
