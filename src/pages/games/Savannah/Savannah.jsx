import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../Savannah/style.css';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import shuffleArray from '../../../utils/shuffleArray';
import {SavannahComponentTranslation, WordToGuess, mistakes, result, numberClickHandler} from '../../../components/Savannah/cardComponent'
import ResultModal from '../../../containers/Modal/ResultModal';
import changeAppMode from '../../../redux/AppMode/action';
import {changeIDontKnowWords} from '../../../redux/Games/action';
import { changeSavannahLevel, changeSavannahPage } from '../../../redux/ChangeRounds/action';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';

let shuffledCollection;
let shuffledCollectionCopy;

const Savannah = ({
  wordsCollection,
  switchAppMode,
  addWordsWithMistakesToStore,
  currentAppMode,
  updateLevel,
  updatePage,
  page,
  level,
  maxPage,
}) => {
  const [gameStarted, setGameChange] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [isGameFinished, changeGameMode] = useState(false);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);

  if (currentAppMode !== 'Savannah') {
    switchAppMode('Savannah');
    return null;
  }

  function answerShuffle(index) {
    shuffledCollectionCopy = shuffledCollection.slice();
    shuffledCollectionCopy.splice(index, 1);
    shuffledCollectionCopy = shuffleArray(shuffledCollectionCopy).slice(0, 3);
    shuffledCollectionCopy.push(shuffledCollection[index]);
    shuffledCollectionCopy = shuffleArray(shuffledCollectionCopy);
  }

  function switchToNextWord() {
    if (result === false) {
      addWordToWrong([...wrongAnsweredWords,shuffledCollection[currentWordIndex + 1].word]);
      addWordsWithMistakesToStore(wrongAnsweredWords);
    }
    if (currentWordIndex <= 10) {
      changeIndex(currentWordIndex + 1);
    }
    else {
      changeIndex(0);
    }
    answerShuffle(currentWordIndex + 1);
  }

    const startGame = () => {
    setGameChange(true);
    shuffledCollection = shuffleArray(wordsCollection);
    answerShuffle(currentWordIndex);
    }

    const exitGame = () => {
      setGameChange(false);
      }     

   let structure;
    if(gameStarted && currentWordIndex < 10) {
       structure = 
      <div className="savannah_container">
    <button onClick={exitGame} onKeyPress={switchToNextWord} ></button>
    <div id = 'first'>
    <div onAnimationEnd={switchToNextWord}>
      <WordToGuess className= 'english-word' words = {shuffledCollection[currentWordIndex]}/>
      </div>
      <div onClick={switchToNextWord}>
    <SavannahComponentTranslation wordsForRender = {shuffledCollectionCopy} />
    {mistakes > 4 ? <ResultModal showProperties={['word', 'wordTranslate']} /> : null}
    </div>
    </div>
    </div>
    }

    else {
      structure = 
      <div className="savannah_container" onKeyDown={numberClickHandler}>
      {currentWordIndex > 9 || mistakes > 4 ? <ResultModal showProperties={['word', 'wordTranslate']} /> : null}
      </div>
    }

    if(!gameStarted) {
      structure = 
     <div className="savannah_container">
   <button onClick={startGame}>Click here to start</button>
   </div>
   }

return (
  <div onKeyPress={numberClickHandler}>
    <GoToHomePageButton />
    <StatusMenu
            page={page}
            level={level}
            maxPage={maxPage}
            updateLevel={updateLevel}
            updatePage={updatePage}
          />
    {structure}
  </div>
)
}

SavannahComponentTranslation.defaultProps = {
  words: [],
  translations: [],
  correctWord: '',
  processUserAnswer: () => {},
  isWordFinished: false,
  isCorrect: false,
  selectedIndex: null,
  correctIndex: null,
  isAutoSolved: false,
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
    level: state.changeRound.AudioCallLevel,
    page: state.changeRound.AudioCallPage,
    maxPage: state.maxPage.maxPage.count,
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
  updateLevel: changeSavannahLevel,
  updatePage: changeSavannahPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Savannah);
