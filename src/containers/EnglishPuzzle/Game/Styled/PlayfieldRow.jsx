import styled from 'styled-components';
import {
  PUZZLE_PADDING,
  PUZZLE_HEIGHT,
  PUZZLE_HEIGHT_LAPTOP,
  PUZZLE_PADDING_LAPTOP,
} from '../constants';
import { DEVICE } from '../../../../config';

const PlayfieldRow = styled.div`
  width: 100%;
  height: ${PUZZLE_HEIGHT}px;
  padding-left: ${PUZZLE_PADDING}px;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: ${(props) => (props.isDraggingOver ? '#7968dc' : 'none')};
  transition: 0.3s linear;
  position: relative;
  z-index: 10;

  @media ${DEVICE.laptop} {
    height: ${PUZZLE_HEIGHT_LAPTOP}px;
    padding-left: ${PUZZLE_PADDING_LAPTOP}px;
  }
`;

export default PlayfieldRow;
