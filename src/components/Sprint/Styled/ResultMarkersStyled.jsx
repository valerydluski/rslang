import styled from 'styled-components';
import CorrectIcon from '../../UI/Icon/checkmark.svg';
import WrongIcon from '../../UI/Icon/icon-false.svg';
import { DEVICE } from '../../../config';

const MarkerStyled = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${DEVICE.tablet} {
    width: 36px;
    height: 36px;
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    left: -67px;
    top: 26px;
    width: 68px;
    height: 2px;
    background: #c4c4c4;
    z-index: -1;

    @media ${DEVICE.tablet} {
      width: 40px;
      left: -37px;
    }
  }
  &:after {
    content: '';
    position: absolute;
    display: block;
    left: 49px;
    top: 26px;
    width: 68px;
    height: 2px;
    background: #c4c4c4;
    z-index: -1;

    @media ${DEVICE.tablet} {
      width: 40px;
      left: 34px;
    }
  }
`;

const CorrectMarkerStyled = styled(MarkerStyled)`
  background-image: url(${CorrectIcon});
`;

const WrongMarkerStyled = styled(MarkerStyled)`
  background-image: url(${WrongIcon});
`;

export { CorrectMarkerStyled, WrongMarkerStyled };
