import React from 'react';
import PropTypes from 'prop-types';
import {
  InputContainer,
  InputStyled,
  InputWordsContainer,
  InputLetterContainer,
} from './styled/LearnWordsInput';
import getStringWidth from '../../utils/getStringWidth';

const LearnWordsInput = (props) => {
  const {
    name,
    type,
    placeholder,
    size,
    input,
    autoFocus,
    meta: { error, touched },
    autocomplete,
    word,
    entered,
    onChangeHandler,
  } = props;

  const width = getStringWidth(word);

  return (
    <InputContainer>
      <InputWordsContainer>
        {word.map((letter, index) => {
          const key = `${letter}${index}`;
          return <InputLetterContainer key={key}>{letter}</InputLetterContainer>;
        })}
      </InputWordsContainer>
      <InputStyled
        type={type}
        name={name}
        placeholder={placeholder}
        size={size}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        autoComplete={autocomplete}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        width={width}
        onChange={onChangeHandler}
      />
      {error && touched && <span>{error}</span>}
    </InputContainer>
  );
};

LearnWordsInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  input: PropTypes.shape().isRequired,
  touched: PropTypes.bool,
  meta: PropTypes.shape(),
  autoFocus: PropTypes.bool,
  autocomplete: PropTypes.string,
  word: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

LearnWordsInput.defaultProps = {
  type: 'text',
  name: '',
  placeholder: '',
  size: '20',
  touched: false,
  meta: {},
  autoFocus: false,
  autocomplete: 'on',
  word: '',
  onChangeHandler: () => {},
};

export default LearnWordsInput;
