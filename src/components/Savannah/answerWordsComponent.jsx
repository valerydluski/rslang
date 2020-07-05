import React from 'react';
import PropTypes from 'prop-types';
import '../../pages/games/Savannah/style.css';
import { SavannahComponentTranslation } from './cardComponent';
import ResultModal from '../../containers/Modal/ResultModal';

const WordsForAnswer = (props) => {
  const { words, func, mistakesInGame, colorForWords } = props;
  return (
    <div onClick={func}>
      <SavannahComponentTranslation wordsForRender={words} color={colorForWords} />
      {mistakesInGame > 4 ? <ResultModal showProperties={['word', 'wordTranslate']} /> : null}
    </div>
  );
};

WordsForAnswer.propTypes = {
  words: PropTypes.instanceOf(Object),
  mistakesInGame: PropTypes.number,
  func: PropTypes.func,
  colorForWords: PropTypes.string,
};

WordsForAnswer.defaultProps = {
  words: {},
  mistakesInGame: 0,
  func: () => {},
  colorForWords: '',
};

export default WordsForAnswer;
