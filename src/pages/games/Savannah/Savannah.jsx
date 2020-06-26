import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../Savannah/style.css';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import shuffleArray from '../../../utils/shuffleArray';
import {SavannahComponent, WordToGuess, clickHandler} from '../../../components/Savannah/cardComponent'

const Bounce = styled.div`animation: 3s ${keyframes`${slideInDown}`}`;

let gameWords = ['1'];
let gameWordsTranslations = ['1'];

const Savannah = ({
  wordsCollection,
}) => {
  const [gameStarted, setGameChange] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [isGameFinished, changeGameMode] = useState(false);

  function switchToNextWord() {
    if (currentWordIndex <= 9) {
      changeIndex(currentWordIndex + 1);
    }
    else {
      changeIndex(0);
    }
    console.log(wordsCollection);
      gameWords = wordsCollection[currentWordIndex].word;
      gameWordsTranslations = wordsCollection[currentWordIndex].wordTranslate;
  }

    const startGame = () => {
    setGameChange(true);
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
      <SavannahComponent wordsForRender = {wordsCollection}/>
      </div>
      </Bounce>
      <div className="game_words">
    <SavannahComponent wordsForRender = {wordsCollection} />
    <button onClick={switchToNextWord} />
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

export default connect(mapStateToProps)(Savannah);
