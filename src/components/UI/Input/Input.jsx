import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { InputContainer, InputStyled, SpanStyled, LabelStyled } from './Styled/InputStyled';

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
    autocomplete,
    className,
    classNameSpan,
  } = props;

  return (
    <InputContainer>
      <InputStyled
        type={type}
        name={name}
        readOnly={readOnlyInput}
        placeholder={placeholder}
        size={size}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        autoComplete={autocomplete}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        className={className}
      />
      {error && touched && toast.warning(error) && (
        <SpanStyled className={classNameSpan}>{error}</SpanStyled>
      )}
      {label && <LabelStyled htmlFor={label}>{label}</LabelStyled>}
    </InputContainer>
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
  autocomplete: PropTypes.string,
  className: PropTypes.string,
  classNameSpan: PropTypes.string,
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
  autocomplete: 'on',
  className: '',
  classNameSpan: '',
};

export default Input;
