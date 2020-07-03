import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../Savannah/style.css';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import shuffleArray from '../../../utils/shuffleArray';
import {SavannahComponentTranslation, WordToGuess, mistakes, result, catchedEvent, playResultSound} from '../../../components/Savannah/cardComponent'
import ResultModal from '../../../containers/Modal/ResultModal';
import changeAppMode from '../../../redux/AppMode/action';
import {changeIDontKnowWords} from '../../../redux/Games/action';
import { changeSavannahLevel, changeSavannahPage } from '../../../redux/ChangeRounds/action';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';


let shuffledCollection;
let shuffledCollectionCopy;

let keyPressResult = false;
let keyEvent;
let keyMistakes = 0;
let isGameStarted = false;



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

  const switchToNextWord = () => {
    answerShuffle(currentWordIndex + 1);
    if (currentWordIndex <= 10) {
      changeIndex(currentWordIndex + 1);
    }
    else {
      changeIndex(0);
    }
    if (result === false) {
      addWordToWrong([...wrongAnsweredWords,shuffledCollection[currentWordIndex + 1].word]);
      addWordsWithMistakesToStore(wrongAnsweredWords);
    }
    if (catchedEvent) {
    catchedEvent.style.backgroundColor = 'white';
    }
    if (document.getElementsByClassName('translation')[keyEvent]) {
      document.getElementsByClassName('translation')[keyEvent].style.backgroundColor = 'white';
      }
  }

  const intervalSwitch = () => {
    setTimeout(switchToNextWord, 1000);
  }

  const buttonHandler = () => {
    document.addEventListener('keydown', (event) => {
    if (event.key > 0 && event.key < 5 && isGameStarted) {
      keyEvent = event.key - 1;
      if (document.getElementsByClassName('translation')[event.key - 1].textContent === document.getElementById('title').dataset.indexMatch) {
        keyPressResult = true;
        document.getElementsByClassName('translation')[event.key - 1].style.backgroundColor = 'green';
        }
        else {
          keyPressResult = false;
          document.getElementsByClassName('translation')[event.key - 1].style.backgroundColor = 'red';
          keyMistakes += 1;
        }
        playResultSound(keyPressResult);
        intervalSwitch(currentWordIndex);
      }
  })
  }

    const startGame = () => {
    setGameChange(true);
    isGameStarted = true;
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
    <button onClick={exitGame}></button>
    <div id = 'first'>
    <div>
      <WordToGuess className= 'english-word' words = {shuffledCollection[currentWordIndex]}/>
      </div>
      <div onClick={intervalSwitch}>
    <SavannahComponentTranslation wordsForRender = {shuffledCollectionCopy} />
    {mistakes + keyMistakes > 4 ? <ResultModal showProperties={['word', 'wordTranslate']} /> : null}
    </div>
    </div>
    </div>
    }

    else {
      structure = 
      <div className="savannah_container">
      {currentWordIndex > 9 || mistakes + keyMistakes > 4 ? <ResultModal showProperties={['word', 'wordTranslate']} /> : null}
      </div>
    }

    if(!gameStarted) {
      structure = 
     <div className="savannah_container">
   <button onClick={startGame}>Click here to start</button>
   </div>
   }

return (
  <div onClick={buttonHandler}>
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
