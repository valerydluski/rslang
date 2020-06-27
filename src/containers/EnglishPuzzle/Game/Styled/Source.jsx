import styled from 'styled-components';
import { PUZZLE_PADDING, PUZZLE_HEIGHT } from '../constants';

const Source = styled.div`
  display: flex;
  margin-top: 30px;
  width: 560px;
  height: ${PUZZLE_HEIGHT}px;
  justify-content: ${(props) => (props.isInCenter ? 'center' : 'flex-start')};
  padding-left: ${PUZZLE_PADDING}px;
  box-sizing: border-box;
  background-color: ${(props) => (props.isDraggingOver ? '#7968dc' : 'none')};
  transition: 0.3s linear;
`;

export default Source;
