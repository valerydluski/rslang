import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIDontKnowWords } from '../../redux/Games/action';
import ResultModal from '../Modal/ResultModal';
import shuffleArray from '../../utils/shuffleArray';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { changeMakeSentenceLevel, changeMakeSentencePage } from '../../redux/ChangeRounds/action';
import InitialSentenceContainer from './InitialSentenceContainer';
import { GAME_MAX_PAGE, GAME_NAME, LINK_FOR_AUDIO } from '../../config';
import GameFieldsContainer from './GameFieldsContainer';
import newRound from '../../utils/newRound';
import { saveFullStatistic } from '../../redux/Statistic/action';
import errorSound from '../../assets/audio/error.mp3';
import correctSound from '../../assets/audio/correct.mp3';

let currentGameWords = [];
const audio = new Audio();

const MakeSentenceGame = ({
  wordsCollection,
  addWordsWithMistakesToStore,
  isWordsLoading,
  updateLevel,
  updatePage,
  page,
  level,
  maxPage,
  gameName,
  saveStatistic,
  gameMode,
}) => {
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);
  const [isGameFinished, toggleGameMode] = useState(false);
  const [isAutoSolve, toggleAutoSolveMode] = useState(false);
  const [isCheckShow, toggleShowCheck] = useState(false);

  const resetGameData = () => {
    changeIndex(0);
    addWordToWrong([]);
    toggleWordStatus(false);
    toggleGameMode(false);
    toggleAutoSolveMode(false);
    toggleShowCheck(false);
    currentGameWords = [];
  };

  useEffect(() => {
    resetGameData();
    return resetGameData();
  }, [wordsCollection]);

  if (isWordsLoading) return <LoadingSpinner />;

  if (!currentWordIndex && !isWordFinished && !currentGameWords.length) {
    currentGameWords = shuffleArray(wordsCollection);
  }

  const newGame = () => {
    resetGameData();
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

  if (isGameFinished) {
    addWordsWithMistakesToStore(wrongAnsweredWords);
    if (gameMode) {
      saveStatistic({
        Level: level,
        Page: page,
        wordsCollection,
        wrongWordsState: wrongAnsweredWords,
        gameName,
      });
    }
    return (
      <ResultModal
        showProperties={['word', 'wordTranslate']}
        audioForPlay="audio"
        newGame={newGame}
        restartGame={resetGameData}
      />
    );
  }

  const playResultSound = (isOk) => {
    audio.src = isOk ? correctSound : errorSound;
    audio.load();
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {}).catch(() => {});
    }
  };

  const switchToNextSentence = () => {
    if (isCheckShow) toggleShowCheck(false);
    if (isAutoSolve) toggleAutoSolveMode(false);
    if (currentWordIndex === wordsCollection.length - 1) toggleGameMode(true);
    else changeIndex(currentWordIndex + 1);
    toggleWordStatus(false);
  };

  const autoSolve = () => {
    addWordToWrong([...wrongAnsweredWords, currentGameWords[currentWordIndex].word]);
    toggleAutoSolveMode(true);
    toggleWordStatus(true);
    playResultSound();
  };

  const audioSrc = `${LINK_FOR_AUDIO}${currentGameWords[currentWordIndex].audioExample}`;
  const sentence = currentGameWords[currentWordIndex].textExample;
  const sentenceTranslation = currentGameWords[currentWordIndex].textExampleTranslate;

  const checkSentence = (answerParts) => {
    const result = answerParts.join(' ') === sentenceTranslation;
    toggleShowCheck(true);
    if (result) {
      toggleWordStatus(true);
      playResultSound(true);
    } else {
      playResultSound();
      addWordToWrong([...wrongAnsweredWords, currentGameWords[currentWordIndex].word]);
    }
  };

  return (
    <>
      {isGameFinished ? <ResultModal showProperties={['word', 'translation']} /> : null}
      <InitialSentenceContainer
        audioSrc={audioSrc}
        sentence={sentence}
        mainWordTranslation={currentGameWords[currentWordIndex].wordTranslate}
      />
      <GameFieldsContainer
        key={currentGameWords[currentWordIndex].word}
        sentenceTranslationParts={shuffleArray(sentenceTranslation.split(' '))}
        toggleWordStatus={toggleWordStatus}
        sentenceTranslation={sentenceTranslation}
        autoSolve={autoSolve}
        isAutoSolve={isAutoSolve}
        switchToNextSentence={switchToNextSentence}
        isWordFinished={isWordFinished}
        playResultSound={playResultSound}
        checkSentence={checkSentence}
        isCheckShow={isCheckShow}
      />
    </>
  );
};

MakeSentenceGame.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  addWordsWithMistakesToStore: PropTypes.func,
  isWordsLoading: PropTypes.bool,
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  level: PropTypes.string,
  page: PropTypes.string,
  maxPage: PropTypes.number,
  gameName: PropTypes.string,
  saveStatistic: PropTypes.func.isRequired,
  gameMode: PropTypes.bool.isRequired,
};

MakeSentenceGame.defaultProps = {
  wordsCollection: [],
  addWordsWithMistakesToStore: () => {},
  isWordsLoading: false,
  updatePage: () => {},
  updateLevel: () => {},
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
  gameName: GAME_NAME.makeSentence,
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.loader.loading,
    gameMode: state.gamesReducer.gameMode,
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,
  updateLevel: changeMakeSentenceLevel,
  updatePage: changeMakeSentencePage,
  saveStatistic: saveFullStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeSentenceGame);
