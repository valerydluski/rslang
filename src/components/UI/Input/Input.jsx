import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { name, type, readOnlyInput, placeholder, sizeInput, input } = props;

  return (
    <input
      type={type}
      name={name}
      readOnly={readOnlyInput}
      placeholder={placeholder}
      size={sizeInput}
      {...input}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  readOnlyInput: PropTypes.bool,
  placeholder: PropTypes.string,
  sizeInput: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  readOnlyInput: false,
  placeholder: '',
  sizeInput: '',
};

export default Input;
