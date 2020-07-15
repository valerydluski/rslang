import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  InputContainer,
  InputStyled,
  InputWordsBgContainer,
  InputLetterContainer,
} from './Styled/RepeatWordsInput';
import getStringWidth from '../../utils/getStringWidth';
import getScreenWidth from '../../utils/getScreenWidth';
import { showResult } from '../../redux/RepeatWords/actions';

const breakpoints = [1024, 768, 0];
const sizes = [30, 22, 18];

const RepeatWordsInput = (props) => {
  const {
    name,
    type,
    placeholder,
    size,
    input,
    meta: { error, touched },
    autocomplete,
    word,
    answer,
    isShowResult,
    isInputActive,
  } = props;

  const inputRef = useRef(null);

  const [fontSize, changeFontSize] = useState(sizes[0]);

  const [show, setShow] = useState(false);

  const calculateFontSize = useCallback(() => {
    const screenWidth = getScreenWidth();
    const index = breakpoints.findIndex((bp) => screenWidth > bp);
    if (fontSize !== sizes[index]) {
      changeFontSize(sizes[index]);
    }
  }, [changeFontSize, fontSize]);

  useEffect(() => {
    calculateFontSize();
    window.addEventListener('resize', calculateFontSize);
    window.addEventListener('orientationchange', calculateFontSize);
  }, [calculateFontSize]);

  useEffect(() => {
    if (isShowResult) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isShowResult]);

  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);

  const hideResult = () => {
    if (isInputActive) {
      setShow(false);
    }
  };

  const width = getStringWidth(word, fontSize);

  return (
    <InputContainer width={width} style={{ display: 'inline-block' }} height={fontSize}>
      <InputWordsBgContainer showResult={show} width={width} onClick={hideResult} height={fontSize}>
        {word
          .toLowerCase()
          .split('')
          .map((letter, index) => {
            const key = `${letter}${index}`;
            return (
              <InputLetterContainer key={key} isIncorrect={letter !== answer[index]}>
                {letter}
              </InputLetterContainer>
            );
          })}
      </InputWordsBgContainer>
      <InputStyled
        type={type}
        name={name}
        placeholder={placeholder}
        size={size}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        autoComplete={autocomplete}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        readOnly={!isInputActive}
        width={width}
        height={fontSize}
        ref={inputRef}
      />
      {error && touched && <span>{error}</span>}
    </InputContainer>
  );
};

RepeatWordsInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  input: PropTypes.shape().isRequired,
  touched: PropTypes.bool,
  meta: PropTypes.shape(),
  autocomplete: PropTypes.string,
  word: PropTypes.string,
  answer: PropTypes.string,
  attemptsNumber: PropTypes.number,
  isShowResult: PropTypes.bool,
  isInputActive: PropTypes.bool,
  showResultHandler: PropTypes.func.isRequired,
  audiosDuration: PropTypes.number.isRequired,
};

RepeatWordsInput.defaultProps = {
  type: 'text',
  name: '',
  placeholder: '',
  size: '20',
  touched: false,
  meta: {},
  isInputActive: true,
  autocomplete: 'on',
  word: '',
  answer: '',
  isShowResult: false,
  attemptsNumber: 0,
};

const mapStateToProps = (state) => {
  return {
    isShowResult: state.repeatWords.showResult,
  };
};

const mapDispatchToProps = {
  showResultHandler: showResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepeatWordsInput);
