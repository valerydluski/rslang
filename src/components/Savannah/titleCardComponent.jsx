import React from 'react';
import '../../pages/games/Savannah/style.css';
import PropTypes from 'prop-types';

const WordToGuess = (props) => {
  const { words } = props;
  return (
    <div>
      <p
        className="english_word"
        id="title"
        data-index-translate={words.id}
        data-index-match={words.wordTranslate}
      >
        {words.word}
      </p>
    </div>
  );
};

WordToGuess.propTypes = {
  words: PropTypes.instanceOf(Object),
};

WordToGuess.defaultProps = {
  words: [],
};

export default WordToGuess;
