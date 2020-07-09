import styled from 'styled-components';
import audioIco from '../../Icon/audioIco.svg';

const StyledRoundButton = styled.button`
  width: 42px;
  height: 42px;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  background: #404497;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    background: #fec246;
  }

  &.learn_sound-button {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    background: url(${audioIco});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default StyledRoundButton;
