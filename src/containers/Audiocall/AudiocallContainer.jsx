import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AudioPlayButton from './AudioPlayButtons';
import FinishedWordInfo from '../../components/Audiocall/FinishedWordInfo';
import WordsContainer from './WordsContainer';
import { DontKnowButton, NextButton } from '../../components/Audiocall/AudiocallControls';
import { changeIDontKnowWords } from '../../redux/Games/action';
import ResultModal from '../Modal/ResultModal';
import shuffleArray from '../../utils/shuffleArray';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { changeAudioCallLevel, changeAudioCallPage } from '../../redux/ChangeRounds/action';
import { LINK_FOR_IMAGE, GAME_MAX_PAGE, GAME_NAME } from '../../config';
import { saveFullStatistic } from '../../redux/Statistic/action';
import newRound from '../../utils/newRound';
import StatusMenu from '../../components/StatusMenu/StatusMenu';
import GameContainerStyled from './styled/StyledGameContainer';
import StyledGameProgress from './styled/StyledGameProgress';

let currentGameWords;
let answerResult = {};
let currentMainWord = '';

const AudioCallContainer = ({
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
  gameProgressLine,
  changegameProgressLine,
  gameMode,
}) => {
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);
  const [isGameFinished, toggleGameMode] = useState(false);

  const resetGameData = () => {
    changeIndex(0);
    addWordToWrong([]);
    toggleWordStatus(false);
    toggleGameMode(false);
    changegameProgressLine(0);
    currentMainWord = '';
  };

  useEffect(() => {
    resetGameData();
  }, [wordsCollection]);

  if (isWordsLoading) return <LoadingSpinner />;

  if (!currentWordIndex && !isWordFinished) {
    currentGameWords = shuffleArray(wordsCollection);
  }

  function finishGame() {
    addWordsWithMistakesToStore(wrongAnsweredWords);
    toggleGameMode(true);
    if (gameMode) {
      saveStatistic({
        Level: level,
        Page: page,
        wordsCollection,
        wrongWordsState: wrongAnsweredWords,
        gameName,
      });
    }
  }

  function switchToNextWord() {
    if (currentWordIndex === wordsCollection.length - 1) finishGame();
    else {
      changeIndex(currentWordIndex + 1);
      toggleWordStatus(false);
    }
  }

  const currentWord = currentGameWords[currentWordIndex];

  let additionalWords = [];

  if (!isWordFinished) {
    if (currentMainWord !== currentWord.word) {
      currentMainWord = currentWord.word;
      additionalWords = [...currentWord.similarWords];
      additionalWords.push(currentWord.wordTranslate);
      additionalWords = shuffleArray(additionalWords);
    }
  }

  function autoSolve() {
    changegameProgressLine(gameProgressLine + 100 / wordsCollection.length);
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

  if (isGameFinished) {
    return (
      <ResultModal
        showProperties={['word', 'wordTranslate']}
        audioForPlay="audio"
        newGame={newGame}
        restartGame={resetGameData}
      />
    );
  }

  return (
    <>
      {isWordFinished ? (
        <>
          <StatusMenu
            page={page}
            level={level}
            maxPage={maxPage}
            updateLevel={updateLevel}
            updatePage={updatePage}
          />

          <GameContainerStyled>
            <FinishedWordInfo
              word={currentGameWords[currentWordIndex].word}
              audioSrc={currentGameWords[currentWordIndex].audio}
              imageSrc={`${LINK_FOR_IMAGE}${currentGameWords[currentWordIndex].image}`}
            />
            <StyledGameProgress gameProgressLine={gameProgressLine} />
            <WordsContainer
              isWordFinished={isWordFinished}
              isCorrect={answerResult.isCorrect}
              correctWord={currentGameWords[currentWordIndex].wordTranslate}
              words={answerResult.words}
              selectedIndex={answerResult.selectedIndex}
              correctIndex={answerResult.correctIndex}
              isAutoSolved={answerResult.isAutoSolved}
            />
            <NextButton switchToNextWord={switchToNextWord} />
          </GameContainerStyled>
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
          <GameContainerStyled>
            <AudioPlayButton
              src={currentGameWords[currentWordIndex].audio}
              isBig={!isWordFinished}
            />
            <StyledGameProgress gameProgressLine={gameProgressLine} />
            <WordsContainer
              words={additionalWords}
              correctWord={currentGameWords[currentWordIndex].wordTranslate}
              processUserAnswer={processUserAnswer}
              isWordFinished={isWordFinished}
              gameProgressLine={gameProgressLine}
              changegameProgressLine={changegameProgressLine}
              wordsAmount={wordsCollection.length}
            />
            <DontKnowButton clickHandler={autoSolve} />
          </GameContainerStyled>
        </>
      )}
    </>
  );
};

AudioCallContainer.propTypes = {
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
  changegameProgressLine: PropTypes.func,
  gameProgressLine: PropTypes.number,
  gameMode: PropTypes.bool.isRequired,
};

AudioCallContainer.defaultProps = {
  wordsCollection: [],
  addWordsWithMistakesToStore: () => {},
  isWordsLoading: false,
  updatePage: () => {},
  updateLevel: () => {},
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
  gameName: GAME_NAME.audioCall,
  gameProgressLine: 0,
  changegameProgressLine: () => {},
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.loader.loading,
    level: state.changeRound.AudioCallLevel,
    page: state.changeRound.AudioCallPage,
    maxPage: state.maxPage.maxPage,
    gameMode: state.gamesReducer.gameMode,
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,

  updateLevel: changeAudioCallLevel,
  updatePage: changeAudioCallPage,
  saveStatistic: saveFullStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioCallContainer);
