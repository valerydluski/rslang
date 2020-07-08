import styled from 'styled-components';
import background from '../../../../../assets/img/authBG.svg';
import mobileBG from '../../../../../assets/img/authBGmobile.svg';
import { DEVICE } from '../../../../../config';

const PatternStyled = styled.div`
  grid-area: background;
  width: 100%;
  background-repeat: no-repeat;
  height: 100%;
  // background-size: contain;
  // background-position: right;
  // background-image: url(${background});
  // color: #fafafa;
  // justify-self: end;

  @media ${DEVICE.laptopL} {
    background-size: cover;
    background-position: left;
  }

  @media ${DEVICE.tablet} {
    margin-top: 20px;
    background-image: url(${mobileBG});
    background-size: contain;
    background-position: center;
  }

  @media ${DEVICE.mobileL} {
    background-image: url(${mobileBG});
    background-size: contain;
  }
`;

export default PatternStyled;
