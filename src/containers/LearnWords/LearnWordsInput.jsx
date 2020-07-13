import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  InputContainer,
  InputStyled,
  InputWordsBgContainer,
  InputLetterContainer,
} from './Styled/LearnWordsInput';
import getStringWidth from '../../utils/getStringWidth';
import { showResult } from '../../redux/LearnWords/actions';

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
    showResultHander,
    audiosDuration,
    isInputActive,
  } = props;

  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  const FONT_SIZE = 30;
  const DEFAUL_TIME_SHOW = 2000;
  const MILLISEC_IN_SEC = 1000;
  const CORRECTION_FACTOR = 500;

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
        readOnly={!isInputActive}
        autoComplete={autocomplete}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        width={width}
        ref={inputRef}
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
  attemptsNumber: PropTypes.number,
  isShowResult: PropTypes.bool,
  isInputActive: PropTypes.bool,
  showResultHander: PropTypes.func.isRequired,
  audiosDuration: PropTypes.number.isRequired,
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
  isInputActive: true,
  attemptsNumber: 0,
};

const mapStateToProps = (state) => {
  return {
    isShowResult: state.newLearnCardShow.showResult,
  };
};

const mapDispatchToProps = {
  showResultHander: showResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordsInput);
