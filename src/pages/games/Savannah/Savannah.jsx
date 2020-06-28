import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../Savannah/style.css';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import shuffleArray from '../../../utils/shuffleArray';
import {SavannahComponent, SavannahComponentTranslation, WordToGuess, mistakes} from '../../../components/Savannah/cardComponent'
import ResultModal from '../../../containers/Modal/ResultModal';
import changeAppMode from '../../../redux/AppMode/action';

const Bounce = styled.div`animation: 3s ${keyframes`${slideInDown}`}`;

let gameWords = ['1'];
let gameWordsTranslations = ['1'];

const Savannah = ({
  wordsCollection,
  switchAppMode,
  currentAppMode,
}) => {
  const [gameStarted, setGameChange] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [isGameFinished, changeGameMode] = useState(false);

  const shuffledCollection = shuffleArray(wordsCollection);

  if (currentAppMode !== 'Savannah') {
    switchAppMode('Savannah');
    return null;
  }

  function switchToNextWord() {
    if (currentWordIndex <= 9) {
      changeIndex(currentWordIndex + 1);
    }
    else {
      changeIndex(0);
    }
      gameWords = shuffledCollection[currentWordIndex].word;
      gameWordsTranslations = shuffledCollection[currentWordIndex].wordTranslate;
  }

    const startGame = () => {
    setGameChange(true);
    console.log(wordsCollection);
    }

    const exitGame = () => {
      setGameChange(false);
      }     

   let structure;
    if(gameStarted) {
       structure = 
      <div className="savannah_container">
    <h1>Savannah</h1>
    <button onClick={exitGame}>Exit</button>
    <div id = 'first'>
    <Bounce id = 'animation' onAnimationEnd={switchToNextWord}>
    <div className="english_word">
      <WordToGuess words = {shuffledCollection[currentWordIndex]}/>
      </div>
      </Bounce>
      <div className="game_words" onClick={switchToNextWord}>
    <SavannahComponentTranslation wordsForRender = {shuffleArray(shuffledCollection.slice(currentWordIndex,currentWordIndex + 4))} />
    <button onClick={switchToNextWord} />
    {currentWordIndex > 8 || mistakes > 4 ? <ResultModal /> : null}
    </div>
    </div>
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
  <div>
    <GoToHomePageButton />
    {structure}
  </div>
)
}

SavannahComponent.defaultProps = {
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
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Savannah);
