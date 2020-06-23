import React from 'react';
import PropTypes from 'prop-types';
import Option from './Styled/Option';
import StyledSelect from './Styled/StyledSelect';
import ToggleButton from './Styled/ToggleButton';
import OptionsArea from './Styled/OptionsArea';

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
  const options = [];
  for (let i = 1; i <= props.optionsNumber; i += 1) {
    options.push(i);
  }

  return (
    <StyledSelect isOpen={isOpen} position={position} number={optionsNumber}>
      <div>
        <ToggleButton onClick={onToggle}>{openBtnName}</ToggleButton>
      </div>
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
  value: PropTypes.number.isRequired,
  optionsNumber: PropTypes.number.isRequired,
  openBtnName: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  position: PropTypes.exact({
    top: PropTypes.string,
    left: PropTypes.string,
  }).isRequired,
};

export default Select;
