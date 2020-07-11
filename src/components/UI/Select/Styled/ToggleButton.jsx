import styled from 'styled-components';

import { TOGGLE_BUTTON_HEIGHT } from './constants';

const ToggleButton = styled.button`
  display: block;
  height: ${TOGGLE_BUTTON_HEIGHT}px;
  margin-bottom: 2px;
  width: 100%;
  text-align: left;
  font-size: 10px;
  font-weight: bold;
  color: #b2b2b2;
  background-color: transparent;
  padding: 0;
  padding-left: 5px;
  border: 0;
  outline: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default ToggleButton;
