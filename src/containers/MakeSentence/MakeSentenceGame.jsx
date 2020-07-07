import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIDontKnowWords } from '../../redux/Games/action';
import ResultModal from '../Modal/ResultModal';
import shuffleArray from '../../utils/shuffleArray';
import { changeAppMode } from '../../redux/AppMode/action';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { checkStatusSession } from '../../redux/Auth/Login/actions';
import { changeMakeSentenceLevel, changeMakeSentencePage } from '../../redux/ChangeRounds/action';
import InitialSentenceContainer from './InitialSentenceContainer';
import { GAME_MAX_PAGE, GAME_NAME, LINK_FOR_AUDIO } from '../../config';
import GameFieldsContainer from './GameFieldsContainer';
import newRound from '../../utils/newRound';
import { saveFullStatistic } from '../../redux/Statistic/action';

let currentGameWords;

const MakeSentenceGame = ({
  wordsCollection,
  addWordsWithMistakesToStore,
  switchAppMode,
  isWordsLoading,
  currentAppMode,
  updateLevel,
  updatePage,
  page,
  level,
  maxPage,
  gameName,
  saveStatistic,
}) => {
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);
  const [isGameFinished, toggleGameMode] = useState(false);
  const [isAutoSolve, toggleAutoSolveMode] = useState(false);

  useEffect(() => {
    changeIndex(0);
    addWordToWrong([]);
    toggleWordStatus(false);
    toggleGameMode(false);
  }, [wordsCollection]);

  checkStatusSession();

  if (isWordsLoading) return <LoadingSpinner />;

  if (currentAppMode !== gameName || wordsCollection.length === 0) {
    switchAppMode(gameName);
    return null;
  }

  if (!currentWordIndex && !isWordFinished) {
    currentGameWords = shuffleArray(wordsCollection);
  }

  const newGame = () => {
    const { newLevel, newPage } = newRound(level, page, maxPage);
    if (newLevel !== level) updateLevel(newLevel);
    if (newPage !== page) updatePage(newPage);
  };

  if (isGameFinished) {
    addWordsWithMistakesToStore(wrongAnsweredWords);
    saveStatistic({
      Level: level,
      Page: page,
      wordsCollection,
      wrongWordsState: wrongAnsweredWords,
      gameName,
    });
    return (
      <ResultModal
        showProperties={['word', 'wordTranslate']}
        audioForPlay="audio"
        newGame={newGame}
      />
    );
  }

  const switchToNextSentence = () => {
    if (isAutoSolve) toggleAutoSolveMode(false);
    if (currentWordIndex === wordsCollection.length - 1) toggleGameMode(true);
    else changeIndex(currentWordIndex + 1);
    toggleWordStatus(false);
  };

  function autoSolve() {
    addWordToWrong([...wrongAnsweredWords, currentGameWords[currentWordIndex].word]);
    toggleAutoSolveMode(true);
    toggleWordStatus(true);
  }

  const audioSrc = `${LINK_FOR_AUDIO}${currentGameWords[currentWordIndex].audioExample}`;
  const sentence = currentGameWords[currentWordIndex].textExample;
  const sentenceTranslation = currentGameWords[currentWordIndex].textExampleTranslate;
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
      />
    </>
  );
};

MakeSentenceGame.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  addWordsWithMistakesToStore: PropTypes.func,
  switchAppMode: PropTypes.func,
  isWordsLoading: PropTypes.bool,
  currentAppMode: PropTypes.string,
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  level: PropTypes.string,
  page: PropTypes.string,
  maxPage: PropTypes.number,
  gameName: PropTypes.string,
  saveStatistic: PropTypes.func.isRequired,
};

MakeSentenceGame.defaultProps = {
  wordsCollection: [],
  addWordsWithMistakesToStore: () => {},
  switchAppMode: () => {},
  isWordsLoading: false,
  currentAppMode: '',
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
    currentAppMode: state.changeAppMode.appMode,
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
  updateLevel: changeMakeSentenceLevel,
  updatePage: changeMakeSentencePage,
  saveStatistic: saveFullStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeSentenceGame);
