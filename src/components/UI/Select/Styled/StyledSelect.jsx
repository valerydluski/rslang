import styled from 'styled-components';
import {
  DIRECTION_ROW,
  DIRECTION_COLUMN,
  TOGGLE_BUTTON_HEIGHT,
  OPTION_SIZE,
  OPTION_MARGIN,
  OPTIONS_IN_ROW,
} from './constants';

const StyledSelect = styled.div`
  width: ${(OPTION_SIZE + OPTION_MARGIN) * OPTIONS_IN_ROW}px;
  ${(props) =>
    props.isOpen && props.direction === DIRECTION_ROW
      ? `height: ${
          TOGGLE_BUTTON_HEIGHT +
          Math.ceil(props.number / OPTIONS_IN_ROW) * (OPTION_SIZE + OPTION_MARGIN)
        }px`
      : `height: ${TOGGLE_BUTTON_HEIGHT}px`}
  ${(props) =>
    props.isOpen && props.direction === DIRECTION_COLUMN
      ? `height: ${TOGGLE_BUTTON_HEIGHT + props.number * (OPTION_SIZE + OPTION_MARGIN)}px`
      : `height: ${TOGGLE_BUTTON_HEIGHT}px`}
  padding: 5px;
  overflow: hidden;
  position: absolute;
  top: ${(props) => props.position.top};
  left: ${(props) => props.position.left};
  border: 1px solid #000000;
  z-index: 100;
  transition: height 0.3s;
`;

export default StyledSelect;
