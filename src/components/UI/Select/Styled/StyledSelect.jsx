import styled from 'styled-components';
import {
  DIRECTION_ROW,
  TOGGLE_BUTTON_HEIGHT,
  OPTION_SIZE,
  OPTION_PADDING,
  OPTIONS_IN_ROW,
  BORDER_WIDTH,
} from './constants';

const StyledSelect = styled.div`
  width: ${(props) => (props.direction === DIRECTION_ROW ? OPTION_SIZE * OPTIONS_IN_ROW : 75)}px;
  height: ${(props) =>
    props.direction === DIRECTION_ROW
      ? TOGGLE_BUTTON_HEIGHT +
        Math.ceil(props.number / OPTIONS_IN_ROW) * (OPTION_SIZE + 2 * OPTION_PADDING + BORDER_WIDTH)
      : TOGGLE_BUTTON_HEIGHT + props.number * (OPTION_SIZE + 2 * OPTION_PADDING + BORDER_WIDTH)}px;
  ${(props) => (!props.isOpen ? `height: ${TOGGLE_BUTTON_HEIGHT}px;` : ``)}
  padding: 2px;
  overflow: hidden;
  position: absolute;
  top: ${(props) => props.position.top}px;
  left: ${(props) => props.position.left}px;
  border: 1px solid #c4c4c4;
  background-color: #ffffff;
  transition: height 0.3s;
  z-index: 90;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 5px solid #c4c4c4;
    border-bottom-width: 0;
    border-right-color: transparent;
    border-left-color: transparent;
    transform: translateY(-50%) rotate(${(props) => (props.isOpen ? '0deg' : '-90deg')});
    transition: 0.3s linear;
    position: absolute;
    top: ${TOGGLE_BUTTON_HEIGHT / 2 + 2}px;
    right: 5px;
    z-index: 90;
  }
`;

export default StyledSelect;
