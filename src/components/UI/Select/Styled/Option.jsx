import styled from 'styled-components';
import { DIRECTION_COLUMN, DIRECTION_ROW, OPTION_SIZE, OPTION_PADDING } from './constants';

const Option = styled.button`
  padding: ${OPTION_PADDING}px 0;
  padding-left: ${(props) => (props.direction === DIRECTION_COLUMN ? `5px` : '0')};
  flex-shrink: 0;
  width: ${(props) =>
    props.direction === DIRECTION_ROW ? `${OPTION_SIZE}px` : `calc(100% - 5px)`};
  height: ${OPTION_SIZE}px;
  color: ${(props) => (props.isBehind ? '#000000' : '#c4c4c4')};
  background-color: #ffffff;
  box-sizing: content-box;
  font-size: 0.5rem;
  display: flex;
  justify-content: ${(props) => (props.direction === DIRECTION_ROW ? `center` : 'flex-start')};
  align-items: center;
  border: 0px;
  border-top: 1px solid #c4c4c4;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Option;
