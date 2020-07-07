import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SprintGameContainerStyled from './Styled/SprintGameContainerStyled';
import { WordStyled, TranslationStyled } from './Styled/WordInfoStyled';
import SprintControlsContainer from './SprintControlsContainer';
import randomIntegerGenerator from '../../utils/randomIntegerGenerator';
import { changeIDontKnowWords } from '../../redux/Games/action';
import shuffleArray from '../../utils/shuffleArray';
import ResultModal from '../Modal/ResultModal';
import { saveFullStatistic } from '../../redux/Statistic/action';

let currentGameWords;

const SprintGameContainer = (props) => {
  const {
    wordsCollection,
    finishGameHandler,
    isGameFinished,
    addWrongWordsToStore,
    saveStatistic,
    level,
    page,
    gameName,
  } = props;
  const [currentWordIndex, changeWordIndex] = useState(0);
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);
  const [correctAnsweredWords, addWordToCorrect] = useState([]);
  const [isAnswerCorrect, setAnswer] = useState(true);

  if (!currentWordIndex) currentGameWords = shuffleArray(wordsCollection);
  if (isGameFinished) {
    addWrongWordsToStore(wrongAnsweredWords);
    saveStatistic({
      Level: level,
      Page: page,
      wordsCollection,
      wrongWordsState: wrongAnsweredWords,
      gameName,
    });
    return (
      <ResultModal
        correctWords={correctAnsweredWords}
        showProperties={['word', 'wordTranslate']}
        audioForPlay="audio"
      />
    );
  }
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
      finishGameHandler();
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
  isGameFinished: PropTypes.bool,
  finishGameHandler: PropTypes.func,
  addWrongWordsToStore: PropTypes.func,
  saveStatistic: PropTypes.func.isRequired,
  level: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  gameName: PropTypes.string.isRequired,
};

SprintGameContainer.defaultProps = {
  wordsCollection: [],
  isGameFinished: false,
  finishGameHandler: () => {},
  addWrongWordsToStore: () => {},
};

const mapDispatchToProps = {
  addWrongWordsToStore: changeIDontKnowWords,
  saveStatistic: saveFullStatistic,
};

export default connect(null, mapDispatchToProps)(SprintGameContainer);
