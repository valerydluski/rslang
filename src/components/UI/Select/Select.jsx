import React from 'react';
import PropTypes from 'prop-types';
import Option from './Styled/Option';
import StyledSelect from './Styled/StyledSelect';
import ToggleButton from './Styled/ToggleButton';
import OptionsArea from './Styled/OptionsArea';
import { DIRECTION_COLUMN, OPTIONS_IN_ROW } from './Styled/constants';

const Select = (props) => {
  const {
    isOpen,
    position,
    optionsNumber,
    onToggle,
    openBtnName,
    onOptionClick,
    direction,
    value,
  } = props;
  const options = Array.from({ length: optionsNumber }, (v, k) => k + 1);
  return (
    <StyledSelect direction={direction} isOpen={isOpen} position={position} number={optionsNumber}>
      <ToggleButton onClick={onToggle}>{openBtnName}</ToggleButton>
      <OptionsArea direction={direction}>
        {options.map((number) => {
          return (
            <Option
              key={number}
              isBehind={number < value}
              onClick={onOptionClick}
              direction={direction}
            >
              {number}
            </Option>
          );
        })}
      </OptionsArea>
    </StyledSelect>
  );
};

Select.propTypes = {
  value: PropTypes.number,
  optionsNumber: PropTypes.number,
  direction: PropTypes.string,
  isOpen: PropTypes.bool,
  position: PropTypes.exact({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  openBtnName: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};

Select.defaultProps = {
  value: 1,
  optionsNumber: OPTIONS_IN_ROW,
  direction: DIRECTION_COLUMN,
  isOpen: false,
  position: {
    top: 0,
    left: 0,
  },
};

export default Select;
