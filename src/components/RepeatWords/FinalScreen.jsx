import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../UI/TextField/TextField';

export default function FinalScreen(props) {
  const { noWords, wordsCount } = props;
  const str = `words count = ${wordsCount}`;
  return noWords ? <TextField text="Нету больше слов" /> : <TextField text={str} />;
}

FinalScreen.propTypes = {
  noWords: PropTypes.bool,
  wordsCount: PropTypes.number,
};

FinalScreen.defaultProps = {
  noWords: false,
  wordsCount: 0,
};
