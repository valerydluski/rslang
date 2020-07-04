import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import AudioPlayButton from '../../../containers/Audiocall/AudioPlayButtons';
import FinishedWordInfo from '../../../components/Audiocall/FinishedWordInfo';
import WordsContainer from '../../../containers/Audiocall/WordsContainer';
import { DontKnowButton, NextButton } from '../../../components/Audiocall/AudiocallControls';
import { changeIDontKnowWords } from '../../../redux/Games/action';
import ResultModal from '../../../containers/Modal/ResultModal';
import shuffleArray from '../../../utils/shuffleArray';
import { changeAppMode } from '../../../redux/AppMode/action';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
import { checkStatusSession } from '../../../redux/Auth/Login/actions';
import { changeAudioCallLevel, changeAudioCallPage } from '../../../redux/ChangeRounds/action';
import { LINK_FOR_IMAGE, GAME_MAX_PAGE, GAME_NAME } from '../../../config';
import { saveFullStatistic } from '../../../redux/Statistic/action';

let currentGameWords;
let answerResult = {};

const AudioCall = ({
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
  checkStatusSession();

  if (isWordsLoading) return <LoadingSpinner />;

  if (currentAppMode !== gameName || wordsCollection.length === 0) {
    switchAppMode(gameName);
    return null;
  }

  if (!currentWordIndex && !isWordFinished) {
    currentGameWords = shuffleArray(wordsCollection);
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

  function switchToNextWord() {
    if (currentWordIndex === wordsCollection.length - 1) finishGame();
    else {
      changeIndex(currentWordIndex + 1);
      toggleWordStatus(false);
    }
  }

  let additionalWords = [];
  if (!isWordFinished) {
    additionalWords = currentGameWords.slice();
    additionalWords.splice(currentWordIndex, 1);
    additionalWords = shuffleArray(additionalWords).slice(0, 4);
    additionalWords.push(currentGameWords[currentWordIndex]);
    additionalWords = shuffleArray(additionalWords);
  }

  function autoSolve() {
    addWordToWrong([...wrongAnsweredWords, wordsCollection[currentWordIndex].word]);
    toggleWordStatus(true);
    answerResult.isCorrect = true;
    answerResult.words = additionalWords;
    answerResult.isAutoSolved = true;
  }

  function processUserAnswer(isCorrect, words, selectedIndex, correctIndex) {
    if (!isCorrect) addWordToWrong([...wrongAnsweredWords, wordsCollection[currentWordIndex].word]);
    answerResult = { isCorrect, words, selectedIndex, correctIndex };
    toggleWordStatus(true);
  }

  return (
    <div className="audio-call_container">
      <GoToHomePageButton />
      {isWordFinished ? (
        <>
          <FinishedWordInfo
            word={currentGameWords[currentWordIndex].word}
            audioSrc={currentGameWords[currentWordIndex].audio}
            imageSrc={`${LINK_FOR_IMAGE}${currentGameWords[currentWordIndex].image}`}
          />
          <WordsContainer
            isWordFinished={isWordFinished}
            isCorrect={answerResult.isCorrect}
            correctWord={currentGameWords[currentWordIndex].word}
            words={answerResult.words}
            selectedIndex={answerResult.selectedIndex}
            correctIndex={answerResult.correctIndex}
            isAutoSolved={answerResult.isAutoSolved}
          />
          <NextButton clickHandler={switchToNextWord} />
          {isGameFinished ? (
            <ResultModal showProperties={['word', 'wordTranslate']} audioForPlay="audio" />
          ) : null}
        </>
      ) : (
        <>
          <StatusMenu
            page={page}
            level={level}
            maxPage={maxPage}
            updateLevel={updateLevel}
            updatePage={updatePage}
          />
          <AudioPlayButton src={currentGameWords[currentWordIndex].audio} isBig={!isWordFinished} />
          <WordsContainer
            words={additionalWords}
            correctWord={currentGameWords[currentWordIndex].word}
            processUserAnswer={processUserAnswer}
            isWordFinished={isWordFinished}
          />
          <DontKnowButton clickHandler={autoSolve} />
        </>
      )}
    </div>
  );
};

AudioCall.propTypes = {
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

AudioCall.defaultProps = {
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
  gameName: GAME_NAME.audioCall,
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
    level: state.changeRound.AudioCallLevel,
    page: state.changeRound.AudioCallPage,
    maxPage: state.maxPage.maxPage,
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
  updateLevel: changeAudioCallLevel,
  updatePage: changeAudioCallPage,
  saveStatistic: saveFullStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioCall);
