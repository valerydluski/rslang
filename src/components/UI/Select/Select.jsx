import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  DIRECTION_ROW,
  TOGGLE_BUTTON_HEIGHT,
  OPTION_SIZE,
  OPTION_MARGIN,
  OPTIONS_IN_ROW
} from './constants';

const StyledSelect = styled.div`
  width: ${(OPTION_SIZE + OPTION_MARGIN) * OPTIONS_IN_ROW}px;
  height: ${props => (!props.isOpen
    ? `${TOGGLE_BUTTON_HEIGHT}px`
    : props.direction === DIRECTION_ROW
      ? `${TOGGLE_BUTTON_HEIGHT + Math.ceil(props.number / OPTIONS_IN_ROW) * (OPTION_SIZE + OPTION_MARGIN)}px`
      : `${TOGGLE_BUTTON_HEIGHT + (props.number * (OPTION_SIZE + OPTION_MARGIN))}px`)
  };
  padding: 5px;
  overflow: hidden;
  position: absolute;
  top: ${props => props.position.top};
  left: ${props => props.position.left};
  border: 1px solid #000000;
  z-index: 100;
  transition: height .3s;
`;

const Button = styled.button`
  height: ${TOGGLE_BUTTON_HEIGHT}px;
  width: 100%;
`;

const OptionsArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.direction === DIRECTION_ROW ? 'row' : 'column')};
  flex-wrap: wrap;
`;

const Option = styled.button`
  margin-top: ${OPTION_MARGIN}px;
  flex-shrink: 0;
  margin-right: ${props => (props.direction === DIRECTION_ROW ? `${OPTION_MARGIN}px` : '0')};
  width: ${props =>(props.direction === DIRECTION_ROW ? `${OPTION_SIZE}px` : '100%')};
  height: ${OPTION_SIZE}px;
  &:nth-child(${OPTIONS_IN_ROW}n) {
    margin-right: 0;
  }
  background-color: ${props => (props.isBehind ? '#cecece' : '#59bfef')};
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0px;
`;

const Select = (props) => {

  const options = [];
  for (let i = 1; i <= props.optionsNumber; i++) {
    options.push(i);
  }

  return (
    <StyledSelect
      isOpen={props.isOpen}
      position={props.position}
      number={props.optionsNumber}
    >
      <div>
        <Button
          onClick={props.onToggle}
        >
          {props.openBtnName}
        </Button>
      </div>
      <OptionsArea
        direction={props.direction}
      >
        {options.map((number, index) => {
          return (
            <Option
              key={index}
              isBehind={number < props.value}
              onClick={props.onOptionClick}
              direction={props.direction}
            >
              {number}
            </Option>
          )
        })}
      </OptionsArea>
    </StyledSelect>
  )
}

Select.propTypes = {
  value: PropTypes.number,
  optionsNumber: PropTypes.number,
  openBtnName: PropTypes.string,
  direction: PropTypes.string,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  onOptionClick: PropTypes.func,
  position: PropTypes.exact({
    top: PropTypes.string,
    left: PropTypes.string
  })
}

export default Select;
