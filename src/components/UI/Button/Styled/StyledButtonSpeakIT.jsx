import styled, { keyframes } from 'styled-components';

const pulseShrink = keyframes`
  25% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`;

const ButtonSpeakITStyled = styled.button`
  position: relative;
  height: 53px;
  width: 290px;
  background-color: #6550de;
  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22.5488px;
  margin-left: 10px;
  outline-style: none;
  border: none;
  cursor: pointer;

  &:hover {
    animation: ${pulseShrink} 2s linear infinite;
  }

  &.big-button {
    width: 405px;
  }
`;

export default ButtonSpeakITStyled;
