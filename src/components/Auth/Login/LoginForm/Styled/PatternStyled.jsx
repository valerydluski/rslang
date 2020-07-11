import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const PatternStyled = styled.div`
  grid-area: background;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;

  @media ${DEVICE.laptopL} {
    background-size: cover;
    background-position: left;
  }

  @media ${DEVICE.tablet} {
    margin-top: 20px;
    background-size: contain;
    background-position: center;
  }

  @media ${DEVICE.mobileL} {
    background-size: contain;
  }
`;

export default PatternStyled;
