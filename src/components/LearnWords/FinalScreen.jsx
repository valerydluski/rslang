import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../UI/TextField/TextField';

export default function FinalScreen(props) {
  const { noWords, wordsCount, newWordCount, rightAnswer } = props;
  const str = `words count = ${wordsCount}, new words = ${newWordCount}, right answer = ${rightAnswer}`;
  return noWords ? <TextField text="Нету больше слов" /> : <TextField text={str} />;
}

FinalScreen.propTypes = {
  noWords: PropTypes.bool,
  wordsCount: PropTypes.number,
  newWordCount: PropTypes.number,
  rightAnswer: PropTypes.number,
};

FinalScreen.defaultProps = {
  noWords: false,
  wordsCount: 0,
  newWordCount: 0,
  rightAnswer: 0,
};
