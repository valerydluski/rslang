import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    name,
    type,
    readOnlyInput,
    placeholder,
    sizeInput,
    input,
    meta: { error, touched },
    label,
  } = props;

  return (
    <div>
      <input
        type={type}
        name={name}
        readOnly={readOnlyInput}
        placeholder={placeholder}
        size={sizeInput}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
      />
      {error && touched && <span>{error}</span>}
      {label && <label htmlFor={label}>{label}</label>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  readOnlyInput: PropTypes.bool,
  placeholder: PropTypes.string,
  sizeInput: PropTypes.string,
  input: PropTypes.shape().isRequired,
  touched: PropTypes.bool,
  meta: PropTypes.shape(),
  label: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  readOnlyInput: false,
  placeholder: '',
  sizeInput: '',
  touched: false,
  meta: {},
  label: '',
};

export default Input;
