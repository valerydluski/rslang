import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  InputContainer,
  InputStyled,
  InputWordsBgContainer,
  InputLetterContainer,
} from './Styled/RepeatWordsInput';
import getStringWidth from '../../utils/getStringWidth';
import { showResult } from '../../redux/RepeatWords/actions';

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
    showResultHander,
    audiosDuration,
    isInputActive,
  } = props;

  const inputRef = useRef(null);

  const FONT_SIZE = 30;
  const DEFAUL_TIME_SHOW = 2000;
  const MILLISEC_IN_SEC = 1000;
  const CORRECTION_FACTOR = 500;

  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;
    if (isShowResult) {
      const duration =
        audiosDuration < 0
          ? DEFAUL_TIME_SHOW
          : audiosDuration * MILLISEC_IN_SEC - CORRECTION_FACTOR;
      setShow(true);
      timer = setTimeout(() => {
        setShow(false);
        showResultHander(false);
      }, duration);
    } else {
      setShow(false);
    }
    return () => clearTimeout(timer);
  }, [isShowResult, showResultHander, audiosDuration]);

  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);

  const hideResult = () => {
    setShow(false);
  };

  const width = getStringWidth(word, FONT_SIZE);

  return (
    <InputContainer style={{ display: 'inline' }}>
      <InputWordsBgContainer showResult={show} width={width} onClick={hideResult}>
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
  showResultHander: PropTypes.func.isRequired,
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
  showResultHander: showResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepeatWordsInput);
