import React from 'react';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Word from '../../components/Audiocall/styled/StyledWords';
import errorSound from '../../assets/audio/error.mp3';
import correctSound from '../../assets/audio/correct.mp3';
import WordsContainerStyled from './styled/StyledWordsContainer';

const WordsContainer = (props) => {
  const {
    words,
    correctWord,
    processUserAnswer,
    isWordFinished,
    isCorrect,
    selectedIndex,
    correctIndex,
    isAutoSolved,
  } = props;

  const currentStepWords = words;

  const wordsCards = currentStepWords.map((word, index) => {
    if (isWordFinished) {
      let type = 'finished';
      if (index === selectedIndex && !isAutoSolved) {
        type = isCorrect ? 'correct' : 'wrong';
      }
      if ((!isCorrect && index === correctIndex) || (isAutoSolved && word === correctWord)) {
        type = '';
      }
      return (
        <Word key={`finished:${word}`} index={index} wordStyleType={type} translation={word} />
      );
    }

    return <Word key={word} index={index} translation={word} />;
  });

  const wordAudio = new Audio();

  const playResultSound = (isOk) => {
    wordAudio.src = isOk ? correctSound : errorSound;
    wordAudio.load();
    const playPromise = wordAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {}).catch(() => {});
    }
  };

  const clickHandler = (e, key) => {
    if (key || e.target.matches('[data-index]')) {
      const selectedWordIndex = key ? key - 1 : +e.target.dataset.index;
      const result = currentStepWords[selectedWordIndex] === correctWord;
      playResultSound(result);
      const correctWordIndex = currentStepWords.findIndex((a) => a === correctWord);
      processUserAnswer(result, words, selectedWordIndex, correctWordIndex);
    }
  };

  return (
    <>
      <WordsContainerStyled onClick={clickHandler}>{wordsCards}</WordsContainerStyled>
      <KeyboardEventHandler
        handleKeys={['1', '2', '3', '4', '5']}
        onKeyEvent={(key) => clickHandler(null, +key)}
      />
    </>
  );
};

WordsContainer.propTypes = {
  words: PropTypes.instanceOf(Array),
  correctWord: PropTypes.string,
  processUserAnswer: PropTypes.func,
  isWordFinished: PropTypes.bool,
  isCorrect: PropTypes.bool,
  selectedIndex: PropTypes.number,
  correctIndex: PropTypes.number,
  isAutoSolved: PropTypes.bool,
};

WordsContainer.defaultProps = {
  words: [],
  correctWord: '',
  processUserAnswer: () => {},
  isWordFinished: false,
  isCorrect: false,
  selectedIndex: null,
  correctIndex: null,
  isAutoSolved: false,
};

export default WordsContainer;
