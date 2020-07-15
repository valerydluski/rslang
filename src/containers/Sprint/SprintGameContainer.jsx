import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import SprintGameContainerStyled from './Styled/SprintGameContainerStyled';
import SprintScoreContainer from '../../components/Sprint/SprintScoreContainer';
import { WordStyled, TranslationStyled } from './Styled/WordInfoStyled';
import SprintControlsContainer from './SprintControlsContainer';
import randomIntegerGenerator from '../../utils/randomIntegerGenerator';
import { changeIDontKnowWords } from '../../redux/Games/action';
import ResultModal from '../Modal/ResultModal';
import { saveFullStatistic } from '../../redux/Statistic/action';

let correctAnsweredWords = [];

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
    newGame,
    gameMode,
    toggleGameMode,
    isTimeIsUp,
  } = props;
  const [currentWordIndex, changeWordIndex] = useState(0);
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [isAnswerCorrect, setAnswer] = useState(false);
  const [correctAnswers, changeAnswersAmount] = useState(0);
  const [scoreStep, changeScoreStep] = useState(10);
  const [score, changeScore] = useState(0);

  const restartGame = () => {
    toggleGameMode(false);
    changeWordIndex(0);
    toggleWordStatus(false);
    setAnswer(false);
    changeAnswersAmount(0);
    changeScoreStep(10);
    changeScore(0);
    correctAnsweredWords = [];
  };

  useEffect(() => restartGame(), [wordsCollection]);

  const finishGame = () => {
    const wrongWords = wordsCollection
      .filter((word) => !correctAnsweredWords.find((correctWord) => correctWord.word === word.word))
      .map((word) => word.word);
    addWrongWordsToStore(wrongWords);
    if (gameMode) {
      saveStatistic({
        Level: level,
        Page: page,
        wordsCollection,
        wrongWordsState: wrongWords,
        gameName,
      });
    }
  };

  if (isTimeIsUp) finishGame();

  if (isGameFinished) {
    return (
      <ResultModal
        showProperties={['word', 'wordTranslate']}
        audioForPlay="audio"
        newGame={newGame}
        restartGame={restartGame}
      />
    );
  }
  const currentWord = wordsCollection[currentWordIndex];
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
    supposedAnswerWord = wordsCollection[currentWordIndex];
  }

  const setResultScore = (isCorrect) => {
    let answers;
    if (isCorrect) {
      answers = correctAnswers + 1;
      changeAnswersAmount(correctAnswers + 1);
      changeScore(score + scoreStep);
    } else {
      changeAnswersAmount(0);
      changeScoreStep(10);
    }
    if (answers > 0 && answers % 4 === 0) {
      changeScoreStep(scoreStep * 2);
    }
  };

  const processAnswer = (receivedAnswer) => {
    const isResultCorrect = receivedAnswer === currentRightAnswer;
    toggleWordStatus(true);
    setAnswer(isResultCorrect);
    setResultScore(isResultCorrect);
    if (isResultCorrect) correctAnsweredWords.push(currentWord);
    if (currentWordIndex === wordsCollection.length - 1) {
      setTimeout(() => finishGameHandler(), 500);
      finishGame();
    } else changeWordIndex(currentWordIndex + 1);
  };
  return (
    <SprintGameContainerStyled>
      <SprintScoreContainer
        isAnswerCorrect={isAnswerCorrect}
        score={score}
        correctAnswers={correctAnswers}
      />
      <WordStyled>{currentWord.word}</WordStyled>
      <TranslationStyled>{supposedAnswerWord.wordTranslate}</TranslationStyled>
      {isWordFinished ? (
        <SprintControlsContainer
          isAnswerCorrect={isAnswerCorrect}
          isWordFinished={isWordFinished}
          processAnswer={processAnswer}
        />
      ) : (
        <SprintControlsContainer processAnswer={processAnswer} />
      )}
      <KeyboardEventHandler
        handleKeys={['right', 'left']}
        onKeyEvent={(key) => {
          processAnswer(key === 'right');
        }}
      />
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
  newGame: PropTypes.func,
  isTimeIsUp: PropTypes.bool,
  toggleGameMode: PropTypes.func,
  gameMode: PropTypes.bool.isRequired,
};

SprintGameContainer.defaultProps = {
  wordsCollection: [],
  isGameFinished: false,
  isTimeIsUp: false,
  finishGameHandler: () => {},
  addWrongWordsToStore: () => {},
  toggleGameMode: () => {},
  newGame: () => {},
};

const mapStateToProps = (state) => {
  return {
    gameMode: state.gamesReducer.gameMode,
  };
};

const mapDispatchToProps = {
  addWrongWordsToStore: changeIDontKnowWords,
  saveStatistic: saveFullStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(SprintGameContainer);
