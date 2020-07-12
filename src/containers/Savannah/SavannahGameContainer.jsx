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

const wordAudio = new Audio();
let currentGameWords = [];
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
    toggleWordStatus(false);
    toggleGameMode(false);
    currentGameWords = [];
    currentMainWord = '';
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [wordsCollection]);

  if (isWordsLoading) return <LoadingSpinner />;

  function finishGame() {
    addWordsWithMistakesToStore(wrongAnsweredWords);
    toggleGameMode(true);
    saveStatistic({
      Level: level,
      Page: page,
      wordsCollection,
      wrongWordsState: wrongAnsweredWords,
      gameName,
    });
  }

  if (!currentWordIndex && !isWordFinished && !currentGameWords.length) {
    currentGameWords = shuffleArray(wordsCollection);
  }

  const newGame = () => {
    toggleGameMode(false);
    const { newLevel, newPage } = newRound(level, page, maxPage);
    if (newLevel !== level) updateLevel(newLevel);
    if (newPage !== page) updatePage(newPage);
  };

  const currentWord = currentGameWords[currentWordIndex];

  if (!isWordFinished) {
    if (currentMainWord !== currentWord.word) {
      currentMainWord = currentWord.word;
      currentStepWords = currentGameWords.slice();
      currentStepWords.splice(currentWordIndex, 1);
      currentStepWords = shuffleArray(currentStepWords).slice(0, 3);
      currentStepWords.push(currentGameWords[currentWordIndex]);
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
      />
    );
  }

  function switchToNextWord() {
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
    selectedWord = selectedWordIndex === null ? null : currentStepWords[selectedWordIndex].word;
    const word = currentStepWords[selectedWordIndex];
    const isCorrect = selectedWordIndex === null ? false : word.word === currentWord.word;
    if (!isCorrect) {
      changeWrongAmount(wrongAmount + 1);
      addWordToWrong([...wrongAnsweredWords, currentWord.word]);
    } else {
      addWordToCorrect([...correctAnsweredWords, currentWord]);
    }
    playResultAudio(isCorrect);
    toggleWordStatus(true);
  };

  const onFallingEnd = () => {
    processAnswer(null);
  };

  return (
    <SavannahGameContainerStyled>
      <SavannahLivesContainer wrongAmount={wrongAmount} wholeLives={initialErrorsAmount} />
      <FallingWordStyled
        animationDuration={secondsForOneWord}
        onAnimationEnd={() => onFallingEnd()}
        key={currentWord.word}
        animationState={isWordFinished ? 'paused' : 'running'}
      >
        {currentWord.word}
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
        currentWord={currentWord.word}
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
  maxPage: PropTypes.number,
  gameName: PropTypes.string,
  saveStatistic: PropTypes.func,
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
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
  gameName: GAME_NAME.savannah,
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
    level: state.changeRound.SavannahLevel,
    page: state.changeRound.SavannahPage,
    maxPage: state.maxPage.maxPage,
    gameName: GAME_NAME.savannah,
    secondsForOneWord: state.userSettings.settings.savannahTimeForWord,
    initialErrorsAmount: state.userSettings.settings.savannahMaxErrorCounter,
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,
  saveStatistic: saveFullStatistic,
  updateLevel: changeSavannahLevel,
  updatePage: changeSavannahPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavannaGameContainer);
