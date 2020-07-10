import styled from 'styled-components';

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
  margin: 0 50%;
  transform: translate(-50%, 0);
  text-align: center;
}
  @keyframes falling {
    0% {
      top: -20px;
    }
    100% {
      top: calc(100vh - 180px);
    }
  }
`;

export default FallingWordStyled;
