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
      // eslint-disable-next-line react/jsx-props-no-spreading
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
  input: PropTypes.shape().isRequired,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  readOnlyInput: false,
  placeholder: '',
  sizeInput: '',
};

export default Input;
