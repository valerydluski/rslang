import React from 'react';
import '../../pages/games/Savannah/style.css';

const WordToGuess = (props) => {
  const { words, color } = props;
  return (
    <div>
      <p
        className="english_word"
        id="title"
        style = {{backgroundColor : color}}
        data-index-translate={words.id}
        data-index-match={words.wordTranslate}
        data-index-test={props.id}
      >
        {words.word}
      </p>
    </div>
  );
};

export default WordToGuess;