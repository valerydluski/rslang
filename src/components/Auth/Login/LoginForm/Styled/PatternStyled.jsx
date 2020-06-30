import styled from 'styled-components';
import background from '../../../../../assets/img/authBG.svg';
import { DEVICE } from '../../../../../config';

const PatternStyled = styled.div`
  grid-area: background;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-size: cover;
  background-image: url(${background});
  color: #000000;

  @media ${DEVICE.mobileL} {
    display: none;
  }
`;

export default PatternStyled;
