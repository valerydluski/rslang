import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../Savannah/style.css';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import shuffleArray from '../../../utils/shuffleArray';
import {SavannahComponentTranslation, WordToGuess, mistakes, result, numberClickHandler} from '../../../components/Savannah/cardComponent'
import ResultModal from '../../../containers/Modal/ResultModal';
import changeAppMode from '../../../redux/AppMode/action';
import {changeIDontKnowWords} from '../../../redux/Games/action';

const Bounce = styled.div`animation: 3s; ${keyframes`${slideInDown}`}`;
let shuffledCollection;


const Savannah = ({
  wordsCollection,
  switchAppMode,
  addWordsWithMistakesToStore,
  currentAppMode,
}) => {
  const [gameStarted, setGameChange] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [isGameFinished, changeGameMode] = useState(false);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);



  if (currentAppMode !== 'Savannah') {
    switchAppMode('Savannah');
    return null;
  }

  function switchToNextWord() {
    addWordsWithMistakesToStore(wrongAnsweredWords);
    if (result === false) {
      addWordToWrong([...wrongAnsweredWords,wordsCollection[currentWordIndex].word]);
    }
    if (currentWordIndex <= 10) {
      changeIndex(currentWordIndex + 1);
    }
    else {
      changeIndex(0);
    }
  }

    const startGame = () => {
    setGameChange(true);
    shuffledCollection = shuffleArray(wordsCollection);
    }

    const exitGame = () => {
      setGameChange(false);
      }     

   let structure;
    if(gameStarted && currentWordIndex < 10) {
       structure = 
      <div className="savannah_container">
    <h1>Savannah</h1>
    <button onClick={exitGame}>Exit</button>
    <div id = 'first'>
    <Bounce id = 'animation' onAnimationEnd={switchToNextWord}>
    <div className="english_word">
      <WordToGuess words = {wordsCollection[currentWordIndex]}/>
      </div>
      </Bounce>
      <div className="game_words" onClick={switchToNextWord}>
    <SavannahComponentTranslation wordsForRender = {wordsCollection.slice(currentWordIndex,currentWordIndex + 4)} />
    <button onClick={switchToNextWord} />
    {mistakes > 4 ? <ResultModal showProperties={['word', 'wordTranslate']} /> : null}
    </div>
    </div>
    </div>
    }

    else {
      structure = 
      <div className="savannah_container">
      {currentWordIndex > 9 || mistakes > 4 ? <ResultModal showProperties={['word', 'wordTranslate']} /> : null}
      </div>
    }

    if(!gameStarted) {
      structure = 
     <div className="savannah_container">
   <h1>Savannah</h1>
   <button onClick={startGame}>Click here to start</button>
   </div>
   }

return (
  <div onKeyPress={numberClickHandler} onKeyDown={switchToNextWord}>
    <GoToHomePageButton />
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
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Savannah);
