import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const StyledRectangleButton = styled.button`
  width: 170px;
  height: 50px;
  border-width: 0;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  color: #ffffff;
  background-color: #7968dc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    background-color: #fec246;
  }
  &:active,
  &:focus {
    outline: 0;
  }

  @media ${DEVICE.laptop} {
    width: 90px;
    height: 30px;
    font-size: 10px;
  }
`;

export default StyledRectangleButton;
