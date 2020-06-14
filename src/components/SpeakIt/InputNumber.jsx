import React from 'react';
import PropTypes from 'prop-types';

const InputNumber = (props) => {
  const { classes, name, inputMax, inputValue } = props;

  return (
    <div className={`${classes}`}>
      <label htmlFor={`${name}`}>
        {name}
        <input
          type="number"
          name={`${name}`}
          min="1"
          max={`${inputMax}`}
          value={`${inputValue || 1}`}
        />
      </label>
    </div>
  );
};

InputNumber.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.string,
  inputMax: PropTypes.string,
  inputValue: PropTypes.string,
};

InputNumber.defaultProps = {
  name: '',
  classes: '',
  inputMax: '6',
  inputValue: '1',
};
export default InputNumber;
