import styled from 'styled-components';
import { DEVICE } from '../../../config';

const FallingWordStyled = styled.div`
  width: 180px;
  height: 180px;
  min-width: fit-content;
  border-radius: 100%;
  background: #6550de;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 180px;
  color: #ffffff;
  animation: falling ${(props) => props.animationDuration}s linear forwards;
  animation-play-state: ${(props) => props.animationState};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  span {
    padding: 0 5px;
  }
  @keyframes falling {
    0% {
      top: -20px;
    }
    100% {
      top: calc(100vh - 180px);
    }
  }

  @media ${DEVICE.laptop} {
    width: 120px;
    height: 120px;
    font-size: 20px;
    line-height: 120px;
    @keyframes falling {
      0% {
        top: -20px;
      }
      100% {
        top: calc(100vh - 120px);
      }
    }
  }
`;

export default FallingWordStyled;
