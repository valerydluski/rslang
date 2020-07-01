import styled from 'styled-components';
import {
  PUZZLE_HEIGHT,
  PUZZLE_PADDING,
  PLAYFIELD_HEIGHT,
  PLAYFIELD_WIDTH,
} from '../../../../containers/EnglishPuzzle/Game/constants';

const StyledPuzzle = styled.span`
  display: flex;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  align-items: center;
  height: ${PUZZLE_HEIGHT}px;
  width: ${(props) => props.width}px;

  box-sizing: border-box;
  flex-shrink: 0;
  clip-path: polygon(
    calc(100% - ${(props) => (props.isLast ? 0 : PUZZLE_PADDING)}px) 0%,
    100% 50%,
    calc(100% - ${(props) => (props.isLast ? 0 : PUZZLE_PADDING)}px) 100%,
    0% 100%,
    ${(props) => (props.isFirst ? 0 : PUZZLE_PADDING)}px 50%,
    0% 0%
  );
  background-size: ${PLAYFIELD_WIDTH}px ${PLAYFIELD_HEIGHT}px;
  background-image: url('${(props) => props.url}');
  background-position: ${(props) => -props.bgXOffset}px ${(props) => -props.bgYOffset}px;
  color: #000000;
  text-shadow: 1px 1px 2px #ffffff,
  -1px -1px 2px #ffffff;
  padding: 0 ${PUZZLE_PADDING}px;
  margin-left: -${PUZZLE_PADDING}px;
  position: relative;

  &::after {
    content: '';
    display: ${(props) => (props.isRowFill ? 'block' : 'none')};
    position: absolute;
    background-color: ${(props) => (props.isCorrect ? 'green' : 'red')};
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
  }
`;

export default StyledPuzzle;
