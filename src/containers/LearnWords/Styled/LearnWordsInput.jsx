import styled from 'styled-components';

export const InputContainer = styled.div`
  margin: 10px 0;
  position: relative;
`;

export const InputWordsBgContainer = styled.span`
  width: ${(props) => props.width}px;
  opacity: ${(props) => (props.showResult ? '1' : '0')};
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  background-color: transparent;
  border: 2px solid transparent;
  transition: 0.3s linear;
`;

export const InputLetterContainer = styled.span`
  color: ${(props) => (props.isIncorrect ? 'red' : '#000')};
`;

export const InputStyled = styled.input`
  width: ${(props) => props.width}px;
  padding: 5px 10px;
  color: #000;
`;
