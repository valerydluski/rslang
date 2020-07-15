import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { changeIDontKnowWords } from '../../redux/Games/action';
import ResultModal from '../Modal/ResultModal';
import shuffleArray from '../../utils/shuffleArray';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { changeSavannahLevel, changeSavannahPage } from '../../redux/ChangeRounds/action';
import { GAME_NAME, GAME_MAX_PAGE } from '../../config';
import { saveFullStatistic } from '../../redux/Statistic/action';
import SavannahGameContainerStyled from './Styled/SavannahGameContainerStyled';
import newRound from '../../utils/newRound';
import errorSound from '../../assets/audio/error.mp3';
import correctSound from '../../assets/audio/correct.mp3';
import SavannahLivesContainer from '../../components/Savannah/SavannahLivesContainer';
import FallingWordStyled from '../../components/Savannah/Styled/FallingWordStyled';
import SavannahWordsContainer from '../../components/Savannah/SavannahWordsContainer';
import GameModeToggle from '../GameModeToggle/GameModeToggle';
import StatusMenu from '../../components/StatusMenu/StatusMenu';

const wordAudio = new Audio();
let currentStepWords = [];
let selectedWord;
let timer;
let currentMainWord;

const SavannaGameContainer = ({
  wordsCollection,
  addWordsWithMistakesToStore,
  isWordsLoading,
  gameName,
  saveStatistic,
  level,
  page,
  maxPage,
  updateLevel,
  updatePage,
  secondsForOneWord,
  initialErrorsAmount,
  gameMode,
  moveBackground,
}) => {
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);
  const [correctAnsweredWords, addWordToCorrect] = useState([]);
  const [isGameFinished, toggleGameMode] = useState(false);
  const [wrongAmount, changeWrongAmount] = useState(0);

  useEffect(() => {
    changeIndex(0);
    addWordToWrong([]);
    addWordToCorrect([]);
    toggleWordStatus(false);
    toggleGameMode(false);
    changeWrongAmount(0);
    currentStepWords = [];
    currentMainWord = '';
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [wordsCollection]);

  const restartGame = () => {
    toggleGameMode(false);
    changeIndex(0);
    addWordToWrong([]);
    addWordToCorrect([]);
    toggleWordStatus(false);
    toggleGameMode(false);
    changeWrongAmount(0);
    currentMainWord = '';
  };

  if (isWordsLoading) return <LoadingSpinner />;

  function finishGame() {
    addWordsWithMistakesToStore(wrongAnsweredWords);
    toggleGameMode(true);
    if (gameMode) {
      const wrongWords = wordsCollection
        .filter(
          (word) => !correctAnsweredWords.find((correctWord) => correctWord.word === word.word)
        )
        .map((word) => word.word);
      saveStatistic({
        Level: level,
        Page: page,
        wordsCollection,
        wrongWordsState: wrongWords,
        gameName,
      });
    }
  }

  const currentWord = wordsCollection[currentWordIndex];

  const newGame = () => {
    toggleGameMode(false);
    let newLevel;
    let newPage;
    let obj;
    if (gameMode) {
      obj = newRound(level, page, maxPage);
      newLevel = obj.newLevel;
      newPage = obj.newPage;
      if (newLevel !== level) updateLevel(newLevel);
      if (newPage !== page) updatePage(newPage);
    } else {
      updateLevel(level);
    }
  };

  if (!isWordFinished) {
    if (currentMainWord !== currentWord.word) {
      currentMainWord = currentWord.word;
      currentStepWords = currentWord.similarWords.slice(0, 3);
      currentStepWords.push(currentWord.wordTranslate);
      currentStepWords = shuffleArray(currentStepWords);
    }
  }

  if (isGameFinished) {
    return (
      <ResultModal
        showProperties={['word', 'wordTranslate']}
        correctWords={correctAnsweredWords}
        audioForPlay="audio"
        newGame={newGame}
        restartGame={restartGame}
      />
    );
  }

  function switchToNextWord() {
    moveBackground(false);
    if (
      initialErrorsAmount - wrongAmount === 0 ||
      currentWordIndex === wordsCollection.length - 1
    ) {
      finishGame();
    } else {
      changeIndex(currentWordIndex + 1);
    }
  }

  if (isWordFinished) {
    timer = setTimeout(() => {
      toggleWordStatus(false);
      switchToNextWord();
    }, 1000);
  }

  const playResultAudio = (isCorrect) => {
    wordAudio.pause();
    wordAudio.src = isCorrect ? correctSound : errorSound;
    wordAudio.load();
    wordAudio.play();
  };

  const processAnswer = (selectedWordIndex) => {
    selectedWord = selectedWordIndex === null ? null : currentStepWords[selectedWordIndex];
    const word = currentStepWords[selectedWordIndex];
    const isCorrect = selectedWordIndex === null ? false : word === currentWord.wordTranslate;
    if (!isCorrect) {
      changeWrongAmount(wrongAmount + 1);
      addWordToWrong([...wrongAnsweredWords, currentWord.word]);
    } else {
      addWordToCorrect([...correctAnsweredWords, currentWord]);
      moveBackground(true);
    }
    playResultAudio(isCorrect);
    toggleWordStatus(true);
  };

  const onFallingEnd = () => {
    processAnswer(null);
  };

  return (
    <SavannahGameContainerStyled
      key={wordsCollection.reduce((string, word) => string + word.word, '')}
    >
      <GameModeToggle gameName={gameName} />
      <StatusMenu
        page={page}
        level={level}
        maxPage={maxPage}
        updateLevel={updateLevel}
        updatePage={updatePage}
      />
      <SavannahLivesContainer wrongAmount={wrongAmount} wholeLives={initialErrorsAmount} />
      <FallingWordStyled
        animationDuration={secondsForOneWord}
        onAnimationEnd={() => onFallingEnd()}
        key={currentWord.word}
        animationState={isWordFinished ? 'paused' : 'running'}
      >
        <span>{currentWord.word}</span>
      </FallingWordStyled>
      {!isWordFinished ? (
        <KeyboardEventHandler
          handleKeys={['1', '2', '3', '4']}
          onKeyEvent={(key) => {
            processAnswer(+key - 1);
          }}
        />
      ) : null}
      <SavannahWordsContainer
        currentStepWords={currentStepWords}
        isWordFinished={isWordFinished}
        processAnswer={processAnswer}
        selectedWord={selectedWord}
        currentWord={currentWord.wordTranslate}
      />
    </SavannahGameContainerStyled>
  );
};

SavannaGameContainer.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  addWordsWithMistakesToStore: PropTypes.func,
  isWordsLoading: PropTypes.bool,
  level: PropTypes.string,
  page: PropTypes.string,
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  moveBackground: PropTypes.func,
  maxPage: PropTypes.number,
  gameName: PropTypes.string,
  saveStatistic: PropTypes.func,
  gameMode: PropTypes.bool.isRequired,
  secondsForOneWord: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  initialErrorsAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

SavannaGameContainer.defaultProps = {
  wordsCollection: [],
  addWordsWithMistakesToStore: () => {},
  isWordsLoading: false,
  saveStatistic: () => {},
  updatePage: () => {},
  updateLevel: () => {},
  moveBackground: () => {},
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
  gameName: GAME_NAME.savannah,
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.loader.loading,
    level: state.changeRound.SavannahLevel,
    page: state.changeRound.SavannahPage,
    maxPage: state.maxPage.maxPage,
    gameName: GAME_NAME.savannah,
    secondsForOneWord: state.userSettings.settings.savannahTimeForWord,
    initialErrorsAmount: state.userSettings.settings.savannahMaxErrorCounter,
    gameMode: state.gamesReducer.gameMode,
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,
  saveStatistic: saveFullStatistic,
  updateLevel: changeSavannahLevel,
  updatePage: changeSavannahPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavannaGameContainer);
