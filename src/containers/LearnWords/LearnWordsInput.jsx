import React, { useState, useEffect } from 'react';
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
  } = props;

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isShowResult) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        showResultHander(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isShowResult, showResultHander]);

  const hideResult = () => {
    setShow(false);
  };

  const width = getStringWidth(word);

  return (
    <InputContainer>
      <InputWordsBgContainer showResult={show} width={width} onClick={hideResult}>
        {word.split('').map((letter, index) => {
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
  attemptsNumber: PropTypes.number,
  isShowResult: PropTypes.bool,
  showResultHander: PropTypes.func.isRequired,
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

const mapStateToProps = (state) => {
  return {
    isShowResult: state.newLearnCardShow.showResult,
  };
};

const mapDispatchToProps = {
  showResultHander: showResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordsInput);
