import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    name,
    type,
    readOnlyInput,
    placeholder,
    size,
    input,
    autoFocus,
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
        size={size}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
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
  size: PropTypes.string,
  input: PropTypes.shape().isRequired,
  touched: PropTypes.bool,
  meta: PropTypes.shape(),
  autoFocus: PropTypes.bool,
  label: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  readOnlyInput: false,
  placeholder: '',
  size: '20',
  touched: false,
  meta: {},
  autoFocus: false,
  label: '',
};

export default Input;
