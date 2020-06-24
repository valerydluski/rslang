import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Word from '../../components/Audiocall/StyledWords';
import errorSound from '../../assets/audio/error.mp3';
import correctSound from '../../assets/audio/correct.mp3';

const WordsContainerStyled = styled.div`
  display: flex;
  margin: 0 auto 50px;
  padding: 20px 30px;
  justify-content: space-between;
  width: 60%;
  border-top: 1px solid #c4c4c4;
  user-select: none;
`;

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
      if ((!isCorrect && index === correctIndex) || (isAutoSolved && word.word === correctWord)) {
        type = '';
      }
      return <Word key={word.word} wordStyleType={type} translation={word.wordTranslate} />;
    }

    return <Word key={word.word} index={index} translation={word.wordTranslate} />;
  });

  const playResultSound = (isOk) => {
    const wordAudio = new Audio();
    wordAudio.src = isOk ? correctSound : errorSound;
    wordAudio.play();
  };

  const clickHandler = (e) => {
    if (e.target.matches('[data-index]')) {
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
