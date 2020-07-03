import React from 'react';
import '../../pages/games/Savannah/style.css';
import errorSound from '../../assets/audio/error.mp3';
import shuffleArray from '../../utils/shuffleArray';
import correctSound from '../../assets/audio/correct.mp3';

let catchedEvent;
let result;
let mistakes = 0;
let color;

const playResultSound = (isOk) => {
  const wordAudio = new Audio();
  wordAudio.src = isOk ? correctSound : errorSound;
  wordAudio.play();
};

const clickHandler = (event) => {
  catchedEvent = event.target;
  if (
    event.target.dataset.indexTranslate === document.getElementById('title').dataset.indexTranslate
  ) {
    event.target.style.backgroundColor = 'green';
    result = true;
    playResultSound(result);
  } else {
    event.target.style.backgroundColor = 'red';
    result = false;
    mistakes += 1;
  }
  playResultSound(result);
  
};



const SavannahComponentTranslation = (props) => {
  const {
    wordsForRender,
    correctWord,
    UserAnswer,
    isWordFinished,
    isCorrect,
    selectedIndex,
    correctIndex,
    translations,
    color
  } = props;

  const wordsCards = shuffleArray(wordsForRender).map((word, index) => {
    return (
      <p
        onClick={clickHandler}
        style = {{backgroundColor : color}}
        className="translation game_words"
        key={word.id}
        data-index={index}
        data-index-translate={word.id}
      >
        {word.wordTranslate}
      </p>
    );
  });

  return <div className="game_words_container">{wordsCards}</div>;
};

export {
  clickHandler,
  SavannahComponentTranslation,
  mistakes,
  result,
  playResultSound,
  catchedEvent,
};
