import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  padding: 5px 10px;
  width: ${(props) => props.width}px;
  display: inline-block;
`;

export const InputWordsBgContainer = styled.span`
  width: ${(props) => props.width}px;
  opacity: ${(props) => (props.showResult ? '1' : '0')};
  z-index: ${(props) => (props.showResult ? '1' : '-1')};
  position: absolute;
  top: 10px;
  left: 5px;
  padding: 5px 10px;
  background-color: transparent;
  border: 2px solid transparent;
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
`;
