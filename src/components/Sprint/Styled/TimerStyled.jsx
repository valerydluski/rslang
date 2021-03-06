import styled from 'styled-components';

const TimerStyled = styled.div`
  position: relative;

  * {
    box-sizing: border-box;
  }

  .timer {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    background: #fafafa;
  }

  .pie {
    width: 50%;
    height: 100%;
    transform-origin: 100% 50%;
    position: absolute;
    border: 2px solid #5a3dff;
  }

  .spinner {
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    z-index: 2;
    border-right: none;
    animation: rota ${(props) => props.animationDuration}s linear forwards;
  }
  .spinner:after {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fafafa;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    top: 10px;
    right: 10px;
    content: '';
    display: none;
  }

  .filler {
    border-radius: 0 100% 100% 0 / 0 50% 50% 0;
    left: 50%;
    opacity: 0;
    z-index: 1;
    animation: fill ${(props) => props.animationDuration}s steps(1, end) forwards;
    border-left: none;
  }

  .mask {
    width: calc(50% + 1px);
    height: calc(100% + 1px);
    position: absolute;
    background: inherit;
    opacity: 1;
    z-index: 3;
    animation: mask ${(props) => props.animationDuration}s steps(1, end) forwards;
    margin-left: -1px;
    margin-top: -1px;
  }

  @keyframes rota {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes mask {
    0% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  @keyframes fill {
    0% {
      opacity: 0;
    }
    50%,
    100% {
      opacity: 1;
    }
  }
`;

export default TimerStyled;
