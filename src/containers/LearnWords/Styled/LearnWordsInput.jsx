import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scale(1.2);
  }

  to {
    transform: scale(1);
  }
`;

export const InputContainer = styled.div`
  margin: 10px 0;
  position: relative;
`;

export const InputWordsBgContainer = styled.span`
  display: ${(props) => (props.attemptsNumber === 0 ? 'none' : 'inline')};
  color: ${(props) => (props.isCorrect && props.attemptsNumber === 1 ? 'green' : 'blue')};
  width: ${(props) => props.width};
  text-decoration: underline;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 5px 10px;
  background-color: transparent;
`;

export const InputWordsAnimatedContainer = styled.span`
  width: ${(props) => props.width}px;
  display: ${(props) => (props.inAnimationOn ? 'inline' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 5px 10px;
  animation: ${scale} 0.3s linear;
`;

export const InputLetterContainer = styled.span`
  color: ${(props) => (props.isIncorrect ? 'red' : '#000')};
`;

export const InputStyled = styled.input`
  width: ${(props) => props.width}px;
  box-sizing: border-box;
  padding: 5px 10px;
  color: #000;
`;
