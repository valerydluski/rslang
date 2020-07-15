import styled from 'styled-components';
import { DEVICE } from '../../../../config';

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

  @media ${DEVICE.laptop} {
    width: 25px;
    height: 25px;

    & > img {
      width: 15px;
      height: 15px;
    }
  }
`;

export default StyledPuzzleRoundButton;
