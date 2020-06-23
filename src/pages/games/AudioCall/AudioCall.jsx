import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import AudioPlayButton from '../../../components/Audiocall/AudioPlayButtons';
import FinishedWordInfo from '../../../components/Audiocall/FinishedWordInfo';
import WordsContainer from '../../../containers/Audiocall/WordsContainer';
import { DontKnowButton, NextButton } from '../../../components/Audiocall/AudiocallControls';

const sourcesLink = 'https://raw.githubusercontent.com/kovanelly/rslang-data/master/';

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

const AudioCall = ({ wordsCollection }) => {
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);
  if (currentWordIndex === 0 && isWordFinished === false) {
    currentGameWords = shuffleArray(wordsCollection);
  }

  function finishGame() {
    console.log('finish');
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

  return (
    <div className="audio-call_container">
      <GoToHomePageButton />
      {isWordFinished ? (
        <>
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
        </>
      ) : (
        <>
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

AudioCall.defaultProps = {
  wordsCollection: [],
};

AudioCall.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.changeWordsCollection.wordsCollection,
  };
};

export default connect(mapStateToProps)(AudioCall);
