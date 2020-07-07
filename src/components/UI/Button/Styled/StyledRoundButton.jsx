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

  @media (max-width: 950px) {;
  margin-left: 4px;
  }

  @media (max-width: 850px) {
    margin-top: -25px;
  }

  @media (max-width: 767px) {
    margin-top: 0px;
    margin-left: 0;
    width: 74px;
    height: 74px;
    font-size: 23px;
  }

  @media (max-width: 450px) {
    width: 50px;
    height: 50px;
    font-size: 14px;
  }
`;

export default StyledRoundButton;
