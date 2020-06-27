import styled from 'styled-components';
import {
  DIRECTION_ROW,
  TOGGLE_BUTTON_HEIGHT,
  OPTION_SIZE,
  OPTION_MARGIN,
  OPTIONS_IN_ROW,
} from './constants';

const StyledSelect = styled.div`
  width: ${(OPTION_SIZE + OPTION_MARGIN) * OPTIONS_IN_ROW}px;
  height: ${(props) =>
    props.direction === DIRECTION_ROW
      ? TOGGLE_BUTTON_HEIGHT +
        Math.ceil(props.number / OPTIONS_IN_ROW) * (OPTION_SIZE + OPTION_MARGIN)
      : TOGGLE_BUTTON_HEIGHT + props.number * (OPTION_SIZE + OPTION_MARGIN)}px;
  ${(props) => (!props.isOpen ? `height: ${TOGGLE_BUTTON_HEIGHT}px;` : ``)}
  padding: 5px;
  overflow: hidden;
  position: absolute;
  top: ${(props) => props.position.top}px;
  left: ${(props) => props.position.left}px;
  border: 1px solid #c4c4c4;
  background-color: #ffffff;
  z-index: 100;
  transition: height 0.3s;
`;

export default StyledSelect;
