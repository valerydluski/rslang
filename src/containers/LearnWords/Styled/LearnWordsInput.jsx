import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: ${(props) => props.width + 10}px;
  height: ${(props) => props.height + 10}px;
  border: 2px solid transparent;
  display: inline-block;
`;

export const InputWordsBgContainer = styled.span`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  opacity: ${(props) => (props.showResult ? '1' : '0')};
  z-index: ${(props) => (props.showResult ? '1' : '-1')};
  font-size: ${(props) => props.height}px;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
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
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.height}px;
  font-weight: bold;
  padding: 5px;
  color: #7d7d7d;
  border: 2px solid #7d7d7d;
`;
