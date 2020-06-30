import styled from 'styled-components';

const StyledPuzzleRoundButton = styled.button`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: ${(props) => (props.isActive ? '#7968dc' : '#fec246')};
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s linear;
  &:first-child {
    margin-top: 0;
  }
`;

export default StyledPuzzleRoundButton;
