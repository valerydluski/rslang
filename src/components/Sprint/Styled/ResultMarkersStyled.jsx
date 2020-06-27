import styled from 'styled-components';
import CorrectIcon from '../../UI/Icon/checkmark.svg';
import WrongIcon from '../../UI/Icon/icon-false.svg';

const MarkerStyled = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
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
  }
`;

const CorrectMarkerStyled = styled(MarkerStyled)`
  background-image: url(${CorrectIcon});
`;

const WrongMarkerStyled = styled(MarkerStyled)`
  background-image: url(${WrongIcon});
`;

export { CorrectMarkerStyled, WrongMarkerStyled };
