import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  padding: 5px 10px;
  width: ${(props) => props.width}px;
  display: inline-block;
  margi: 0 10px;
`;

export const InputWordsBgContainer = styled.span`
  width: ${(props) => props.width}px;
  opacity: ${(props) => (props.showResult ? '1' : '0')};
  z-index: ${(props) => (props.showResult ? '1' : '-1')};
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  background-color: transparent;
  border: 2px solid transparent;
  transition: 0.1s linear;
`;

export const InputLetterContainer = styled.span`
  color: ${(props) => (props.isIncorrect ? 'red' : 'green')};
  opacity: 0.5;
`;

export const InputStyled = styled.input`
  display: inline-block;
  width: ${(props) => props.width}px;
  padding: 5px 10px;
  color: #000;
  margi: 0 10px;
`;
