import styled from 'styled-components';

const StyledRoundButton = styled.button`
  width: 42px;
  height: 42px;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  background: #404497;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    background: #fec246;
  }
`;

export default StyledRoundButton;
