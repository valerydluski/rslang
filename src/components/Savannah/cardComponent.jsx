import React from 'react';
import '../../pages/games/Savannah/style.css';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import errorSound from '../../assets/audio/error.mp3';
import shuffleArray from '../../utils/shuffleArray';
import correctSound from '../../assets/audio/correct.mp3';
import heartSavannahBlack from '../../assets/img/heartSavannahBlack.svg';

let result;

const playResultSound = (isOk) => {
  const wordAudio = new Audio();
  wordAudio.src = isOk ? correctSound : errorSound;
  wordAudio.play();
};

const check = (key, func) => {
  func();
  if (
    document.getElementsByClassName('translation')[key - 1].textContent ===
    document.getElementById('title').dataset.indexMatch
  ) {
    result = true;
    document.getElementsByClassName('translation')[key - 1].style.backgroundColor = 'green';
  } else {
    result = false;
    document.getElementsByClassName('translation')[key - 1].style.backgroundColor = 'red';
  }
  playResultSound(result);
};

const KeyEventDetector = (props) => {
  const { func } = props;
  return (
    <div>
      <KeyboardEventHandler
        handleKeys={['1', '2', '3', '4']}
        onKeyEvent={(key) => check(key, func)}
      />
    </div>
  );
};

const clickHandler = (event) => {
  if (
    event.target.dataset.indexTranslate === document.getElementById('title').dataset.indexTranslate
  ) {
    event.target.style.backgroundColor = 'green';
    result = true;
    playResultSound(result);
  } else {
    event.target.style.backgroundColor = 'red';
    result = false;
  }
  playResultSound(result);
};

const SavannahComponentTranslation = (props) => {
  const { wordsForRender } = props;

  const wordsCards = shuffleArray(wordsForRender).map((word, index) => {
    return (
      <div key={word.id}>
        <p
          onClick={clickHandler}
          className="translation game_words"
          data-index-order={index}
          data-index-translate={word.id}
        >
          {word.wordTranslate}
        </p>
      </div>
    );
  });

  return <div className="game_words_container">{wordsCards}</div>;
};

const GameRating = (props) => {
  const { livesRemain } = props;

  const HeartsImages = livesRemain.map((word, index) => {
    return <img key={index} src={heartSavannahBlack} alt="lives remaining" />;
  });
  return <div>{HeartsImages}</div>;
};

SavannahComponentTranslation.propTypes = {
  wordsForRender: PropTypes.instanceOf(Object),
};

SavannahComponentTranslation.defaultProps = {
  wordsForRender: {},
};

GameRating.propTypes = {
  livesRemain: PropTypes.instanceOf(Array),
};

GameRating.defaultProps = {
  livesRemain: [],
};

KeyEventDetector.propTypes = {
  func: PropTypes.func,
};

KeyEventDetector.defaultProps = {
  func: () => {},
};

export {
  clickHandler,
  SavannahComponentTranslation,
  result,
  playResultSound,
  GameRating,
  KeyEventDetector,
};
