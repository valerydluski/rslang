import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SprintGameContainerStyled from './Styled/SprintGameContainerStyled';
import { WordStyled, TranslationStyled } from './Styled/WordInfoStyled';
import SprintControlsContainer from './SprintControlsContainer';
import randomIntegerGenerator from '../../utils/randomIntegerGenerator';
import shuffleArray from '../../utils/shuffleArray';

let currentGameWords;

const SprintGameContainer = (props) => {
  const { wordsCollection, finishGameHandler, wrongAnsweredWords, addWordToWrong } = props;
  const [currentWordIndex, changeWordIndex] = useState(0);
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [correctAnsweredWords, addWordToCorrect] = useState([]);
  const [isAnswerCorrect, setAnswer] = useState(true);

  if (!currentWordIndex) currentGameWords = shuffleArray(wordsCollection);

  const currentWord = currentGameWords[currentWordIndex];
  const currentRightAnswer = Boolean(randomIntegerGenerator(0, 1));
  let supposedAnswerWord;

  if (!currentRightAnswer) {
    let supposedAnswerWordIndex = randomIntegerGenerator(0, wordsCollection.length - 1);
    supposedAnswerWord = wordsCollection[supposedAnswerWordIndex];
    if (supposedAnswerWord.word === currentWord.word) {
      supposedAnswerWordIndex =
        supposedAnswerWordIndex > 0 ? supposedAnswerWordIndex - 1 : supposedAnswerWordIndex + 1;
      supposedAnswerWord = wordsCollection[supposedAnswerWordIndex];
    }
  } else {
    supposedAnswerWord = currentGameWords[currentWordIndex];
  }

  const processAnswer = (receivedAnswer) => {
    const isResultCorrect = receivedAnswer === currentRightAnswer;
    toggleWordStatus(true);
    setAnswer(isResultCorrect);
    if (!isResultCorrect) {
      addWordToWrong([...wrongAnsweredWords, currentWord.word]);
    } else addWordToCorrect([...correctAnsweredWords, currentWord]);
    if (currentWordIndex === currentGameWords.length - 1) {
      finishGameHandler(wrongAnsweredWords, correctAnsweredWords);
    } else changeWordIndex(currentWordIndex + 1);
  };
  return (
    <SprintGameContainerStyled>
      <WordStyled>{currentWord.word}</WordStyled>
      <TranslationStyled>{supposedAnswerWord.wordTranslate}</TranslationStyled>
      {isWordFinished ? (
        <SprintControlsContainer
          isAnswerCorrect={isAnswerCorrect}
          isWordFinished={isWordFinished}
          clickHandler={processAnswer}
        />
      ) : (
        <SprintControlsContainer clickHandler={processAnswer} />
      )}
    </SprintGameContainerStyled>
  );
};

SprintGameContainer.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  wrongAnsweredWords: PropTypes.instanceOf(Array),
  finishGameHandler: PropTypes.func,
  addWordToWrong: PropTypes.func,
};

SprintGameContainer.defaultProps = {
  wordsCollection: [],
  wrongAnsweredWords: [],
  finishGameHandler: () => {},
  addWordToWrong: () => {},
};

export default SprintGameContainer;
