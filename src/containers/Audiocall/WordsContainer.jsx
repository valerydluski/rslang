import React from 'react';
import PropTypes from 'prop-types';
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
    backgroundOpacity,
    changeBackgroundOpacity,
    wordsAmount,
  } = props;

  const currentStepWords = words;

  const wordsCards = currentStepWords.map((word, index) => {
    if (isWordFinished) {
      let type = 'finished';
      if (index === selectedIndex && !isAutoSolved) {
        type = isCorrect ? 'correct' : 'wrong';
      }
      if ((!isCorrect && index === correctIndex) || (isAutoSolved && word.word === correctWord)) {
        type = '';
      }
      return <Word key={word.word} wordStyleType={type} translation={word.wordTranslate} />;
    }

    return <Word key={word.word} index={index} translation={word.wordTranslate} />;
  });

  const wordAudio = new Audio();

  const playResultSound = (isOk) => {
    wordAudio.src = isOk ? correctSound : errorSound;
    wordAudio.load();
    wordAudio.play();
  };

  const clickHandler = (e) => {
    if (e.target.matches('[data-index]')) {
      changeBackgroundOpacity(backgroundOpacity + 100 / wordsAmount);
      const selectedWordIndex = +e.target.dataset.index;
      const result = currentStepWords[selectedWordIndex].word === correctWord;
      playResultSound(result);
      const correctWordIndex = currentStepWords.findIndex((a) => a.word === correctWord);
      processUserAnswer(result, words, selectedWordIndex, correctWordIndex);
    }
  };

  return <WordsContainerStyled onClick={clickHandler}>{wordsCards}</WordsContainerStyled>;
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
  changeBackgroundOpacity: PropTypes.func,
  backgroundOpacity: PropTypes.number,
  wordsAmount: PropTypes.number,
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
  backgroundOpacity: 0,
  changeBackgroundOpacity: () => {},
  wordsAmount: 0,
};

export default WordsContainer;
