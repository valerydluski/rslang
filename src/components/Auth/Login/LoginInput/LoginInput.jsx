import React from 'react';
import Input from '../../../UI/Input/Input';

const LoginInput = (props) => {
  const { type, placeholder, errorMessage } = props;
  return (
    <>
      <Input typeInput={type} placeholder={placeholder} />
      {errorMessage ? <span>{errorMessage}</span> : null}
    </>
  );
};

export default LoginInput;
