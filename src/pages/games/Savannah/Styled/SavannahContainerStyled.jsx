import styled from 'styled-components';
import background from '../../../../assets/img/background.png';

const SavannahContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  min-height: fit-content;
  box-sizing: border-box;
  padding: 30px;
  background-image: url(${background});
  background-size: 100% auto;
  &.movingBackground {
    background-repeat: repeat-y;
    animation: moveBackground 1s linear forwards;
    @keyframes moveBackground {
      0% {
        background-position-y: 0%;
      }
      100% {
        background-position-y: -20%;
      }
    }
  }
`;

export default SavannahContainerStyled;
