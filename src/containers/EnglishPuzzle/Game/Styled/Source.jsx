import styled from 'styled-components';
import {
  PUZZLE_PADDING,
  PUZZLE_HEIGHT,
  PLAYFIELD_WIDTH,
  PLAYFIELD_WIDTH_LAPTOP,
  PUZZLE_HEIGHT_LAPTOP,
} from '../constants';
import { DEVICE } from '../../../../config';

const Source = styled.div`
  order: 3;
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-gap: 20px;
  margin-top: 30px;
  width: ${(props) => (props.cols - 1) * 20 + PLAYFIELD_WIDTH}px;
  height: ${PUZZLE_HEIGHT}px;
  justify-content: ${(props) => (props.isInCenter ? 'center' : 'flex-start')};
  padding-left: ${PUZZLE_PADDING}px;
  box-sizing: border-box;
  background-color: ${(props) => (props.isDraggingOver ? '#7968dc' : 'none')};
  transition: 0.3s background linear;
  font-size: 17px;
  font-weight: bold;

  @media ${DEVICE.laptop} {
    width: ${(props) => (props.cols - 1) * 15 + PLAYFIELD_WIDTH_LAPTOP}px;
    height: ${PUZZLE_HEIGHT_LAPTOP}px;
    grid-gap: 15px;
    margin-top: 15px;
  }
`;

export default Source;
