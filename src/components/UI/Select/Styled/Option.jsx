import styled from 'styled-components';
import { DIRECTION_ROW, OPTION_SIZE, OPTION_MARGIN, OPTIONS_IN_ROW } from './constants';

const Option = styled.button`
  margin-top: ${OPTION_MARGIN}px;
  flex-shrink: 0;
  margin-right: ${(props) => (props.direction === DIRECTION_ROW ? `${OPTION_MARGIN}px` : '0')};
  width: ${(props) => (props.direction === DIRECTION_ROW ? `${OPTION_SIZE}px` : '100%')};
  height: ${OPTION_SIZE}px;
  &:nth-child(${OPTIONS_IN_ROW}n) {
    margin-right: 0;
  }
  background-color: ${(props) => (props.isBehind ? '#cecece' : '#59bfef')};
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0px;
`;

export default Option;
