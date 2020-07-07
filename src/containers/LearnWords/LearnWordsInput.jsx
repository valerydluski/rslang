import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  InputContainer,
  InputStyled,
  InputWordsAnimatedContainer,
  InputWordsBgContainer,
  InputLetterContainer,
} from './Styled/LearnWordsInput';
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
    answer,
    isShowResult,
    attemptsNumber,
  } = props;

  const [isCorrect, changeCorrect] = useState(false);
  const [isAnimationOn, changeAnimation] = useState(false);

  const width = getStringWidth(word);

  if (isShowResult) {
    changeCorrect(isCorrect);
    if (!isCorrect) {
      changeAnimation(true);
    }
  }

  return (
    <InputContainer>
      <InputWordsBgContainer attemptsNumber={attemptsNumber} isCorrect={isCorrect} width={width}>
        {word.split('').map((letter, index) => {
          const key = `${letter}${index}`;
          return <InputLetterContainer key={key}>{letter}</InputLetterContainer>;
        })}
      </InputWordsBgContainer>
      <InputWordsAnimatedContainer
        width={width}
        isAnimationOn={isAnimationOn}
        onAnimationEnd={() => changeAnimation(false)}
      >
        {word.split('').map((letter, index) => {
          const key = `${letter}${index}`;
          return (
            <InputLetterContainer key={key} isIncorrect={letter !== answer[index]}>
              {letter}
            </InputLetterContainer>
          );
        })}
      </InputWordsAnimatedContainer>
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
  answer: PropTypes.string,
  isShowResult: PropTypes.bool,
  attemptsNumber: PropTypes.number,
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
  answer: '',
  isShowResult: false,
  attemptsNumber: 0,
};

export default LearnWordsInput;
