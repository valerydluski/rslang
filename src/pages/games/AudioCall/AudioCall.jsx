import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import AudioPlayButton from '../../../containers/Audiocall/AudioPlayButtons';
import FinishedWordInfo from '../../../components/Audiocall/FinishedWordInfo';
import WordsContainer from '../../../containers/Audiocall/WordsContainer';
import { DontKnowButton, NextButton } from '../../../components/Audiocall/AudiocallControls';
import { changeIDontKnowWords } from '../../../redux/Games/action';

function shuffleArray(arr) {
  const shuffledArray = [...arr];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

let currentGameWords;
let answerResult = {};

const AudioCall = ({ wordsCollection, addWordsWithMistakesToStore }) => {
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);
  const [isGameFinished, toggleGameMode] = useState(false);
  if (currentWordIndex === 0 && isWordFinished === false) {
    currentGameWords = shuffleArray(wordsCollection);
  }

  function finishGame() {
    addWordsWithMistakesToStore(wrongAnsweredWords);
    toggleGameMode(true);
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
    addWordToWrong([...wrongAnsweredWords, wordsCollection[currentWordIndex]]);
    toggleWordStatus(true);
    answerResult.isCorrect = true;
    answerResult.words = additionalWords;
    answerResult.isAutoSolved = true;
  }

  function processUserAnswer(isCorrect, words, selectedIndex, correctIndex) {
    if (!isCorrect) addWordToWrong([...wrongAnsweredWords, wordsCollection[currentWordIndex]]);
    answerResult = { isCorrect, words, selectedIndex, correctIndex };
    toggleWordStatus(true);
  }

  const sourcesLink = 'https://raw.githubusercontent.com/kovanelly/rslang-data/master/';
  if (!isGameFinished) {
    if (isWordFinished) {
      return (
        <div className="audio-call_container">
          <GoToHomePageButton />
          <FinishedWordInfo
            word={currentGameWords[currentWordIndex].word}
            audioSrc={currentGameWords[currentWordIndex].audio}
            imageSrc={`${sourcesLink}${currentGameWords[currentWordIndex].image}`}
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
        </div>
      );
    }
    return (
      <div className="audio-call_container">
        <GoToHomePageButton />
        <AudioPlayButton src={currentGameWords[currentWordIndex].audio} isBig={!isWordFinished} />
        <WordsContainer
          words={additionalWords}
          correctWord={currentGameWords[currentWordIndex].word}
          processUserAnswer={processUserAnswer}
          isWordFinished={isWordFinished}
        />
        <DontKnowButton clickHandler={autoSolve} />
      </div>
    );
  }
  return (
    <div className="audio-call_container">
      <GoToHomePageButton />
      <h1>Game finished</h1>
    </div>
  );
};
AudioCall.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  addWordsWithMistakesToStore: PropTypes.func,
};

AudioCall.defaultProps = {
  wordsCollection: [],
  addWordsWithMistakesToStore: () => {},
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioCall);
