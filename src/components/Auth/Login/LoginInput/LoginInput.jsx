import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../UI/Input/Input';

const LoginInput = (props) => {
  const {
    input,
    type,
    placeholder,
    meta: { error, touched },
  } = props;
  return (
    <>
      <Input type={type} placeholder={placeholder} input={input} />
      {error && touched && <span>{error}</span>}
    </>
  );
};

LoginInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  meta: PropTypes.shape(),
  input: PropTypes.shape(),
};

LoginInput.defaultProps = {
  type: 'text',
  placeholder: '',
  error: '',
  touched: false,
  meta: {},
  input: {},
};

export default LoginInput;
