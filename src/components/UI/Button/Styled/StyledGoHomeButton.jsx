import styled from 'styled-components';
import iconExit from '../../Icon/iconExit.svg';
import iconExitHover from '../../Icon/iconExitHover.svg';
import { DEVICE } from '../../../../config';

const StyledGoHomeButton = styled.button`
  position: absolute;
  right: 30px;
  top: 30px;
  height: 50px;
  width: 50px;
  border: none;
  background: url(${iconExit});
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
  background-size: cover;
  z-index: 160;
  &:hover {
    background: url(${iconExitHover});
    background-size: cover;
  }
`;

export default StyledGoHomeButton;
