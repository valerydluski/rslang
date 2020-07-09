import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { changeIDontKnowWords } from '../../redux/Games/action';
import ResultModal from '../Modal/ResultModal';
import shuffleArray from '../../utils/shuffleArray';
import { changeAppMode } from '../../redux/AppMode/action';
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

let currentGameWords;
let currentStepWords = [];
const wordAudio = new Audio();

const SavannaGameContainer = ({
  wordsCollection,
  addWordsWithMistakesToStore,
  switchAppMode,
  isWordsLoading,
  currentAppMode,
  gameName,
  saveStatistic,
  level,
  page,
  maxPage,
  updateLevel,
  updatePage,
  secondsForOneWord,
  initialErrorsAmont,
}) => {
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);
  const [correctAnsweredWords, addWordToCorrect] = useState([]);
  const [isGameFinished, toggleGameMode] = useState(false);
  const [wrongAmount, changeWrongAmount] = useState(0);
  const [selectedWord, changeSelectedWord] = useState(null);

  useEffect(() => {
    changeIndex(0);
    addWordToWrong([]);
    toggleWordStatus(false);
    toggleGameMode(false);
  }, [wordsCollection]);

  if (isWordsLoading) return <LoadingSpinner />;

  if (currentAppMode !== gameName || wordsCollection.length === 0) {
    switchAppMode(gameName);
    return null;
  }

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

  if (!currentWordIndex && !isWordFinished) {
    currentGameWords = shuffleArray(wordsCollection);
  }

  const newGame = () => {
    toggleGameMode(false);
    const { newLevel, newPage } = newRound(level, page, maxPage);
    if (newLevel !== level) updateLevel(newLevel);
    if (newPage !== page) updatePage(newPage);
  };

  if (!isWordFinished) {
    currentStepWords = currentGameWords.slice();
    currentStepWords.splice(currentWordIndex, 1);
    currentStepWords = shuffleArray(currentStepWords).slice(0, 3);
    currentStepWords.push(currentGameWords[currentWordIndex]);
    currentStepWords = shuffleArray(currentStepWords);
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

  const currentWord = currentGameWords[currentWordIndex];

  function switchToNextWord() {
    if (initialErrorsAmont - wrongAmount === 0) {
      finishGame();
    }
    if (currentWordIndex === wordsCollection.length - 1) finishGame();
    else {
      changeIndex(currentWordIndex + 1);
    }
  }

  if (isWordFinished) {
    setTimeout(() => {
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
    changeSelectedWord(currentStepWords[selectedWordIndex]);
    const word = currentStepWords[selectedWordIndex];
    const isCorrect = selectedWordIndex === false ? false : word.word === currentWord.word;
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
    changeSelectedWord(null);
    processAnswer(false);
  };

  return (
    <SavannahGameContainerStyled>
      <SavannahLivesContainer wrongAmount={wrongAmount} wholeLives={initialErrorsAmont} />
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
        selectedWord={selectedWord ? selectedWord.word : null}
        currentWord={currentWord.word}
      />
    </SavannahGameContainerStyled>
  );
};

SavannaGameContainer.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  addWordsWithMistakesToStore: PropTypes.func,
  switchAppMode: PropTypes.func,
  isWordsLoading: PropTypes.bool,
  currentAppMode: PropTypes.string,
  level: PropTypes.string,
  page: PropTypes.string,
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  maxPage: PropTypes.number,
  gameName: PropTypes.string,
  saveStatistic: PropTypes.func,
  secondsForOneWord: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  initialErrorsAmont: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

SavannaGameContainer.defaultProps = {
  wordsCollection: [],
  addWordsWithMistakesToStore: () => {},
  switchAppMode: () => {},
  isWordsLoading: false,
  currentAppMode: '',
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
    initialErrorsAmont: state.userSettings.settings.savannahMaxErrorCounter,
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
  saveStatistic: saveFullStatistic,
  updateLevel: changeSavannahLevel,
  updatePage: changeSavannahPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavannaGameContainer);
