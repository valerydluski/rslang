import styled from 'styled-components';
import CorrectIcon from '../../../../components/UI/Icon/checkmark.svg';
import WrongIcon from '../../../../components/UI/Icon/icon-false.svg';

const MarkerStyled = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin: 0 auto -15px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    display: block;
    left: -66px;
    top: 26px;
    width: 178px;
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
