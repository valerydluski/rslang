import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    classes,
    name,
    inputMax,
    startValue,
    typeInput,
    inputMin,
    readOnlyInput,
    placeholderInput,
    sizeInupt,
    onChangeInput,
  } = props;

  const [inputValue, setInputValue] = useState(startValue);

  const changeInputHandler = (event) => {
    setInputValue(event.target.value);
    onChangeInput(event.target.value);
  };

  return (
    <div className={classes}>
      <label htmlFor={name}>
        {name}
        <input
          type={typeInput}
          name={name}
          min={inputMin}
          max={inputMax}
          value={inputValue}
          readOnly={readOnlyInput}
          onChange={changeInputHandler}
          placeholder={placeholderInput}
          size={sizeInupt}
        />
      </label>
    </div>
  );
};

Input.propTypes = {
  typeInput: PropTypes.string,
  name: PropTypes.string,
  classes: PropTypes.string,
  inputMax: PropTypes.string,
  inputMin: PropTypes.string,
  startValue: PropTypes.string,
  readOnlyInput: PropTypes.bool,
  placeholderInput: PropTypes.string,
  sizeInupt: PropTypes.string,
  onChangeInput: PropTypes.func,
};

Input.defaultProps = {
  typeInput: 'text',
  name: '',
  classes: '',
  inputMax: '',
  inputMin: '',
  startValue: '',
  readOnlyInput: false,
  placeholderInput: '',
  sizeInupt: '',
  onChangeInput: () => {},
};

export default Input;
