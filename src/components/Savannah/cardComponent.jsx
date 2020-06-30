import React, {useState} from 'react';
import { connect } from 'react-redux';
import '../../pages/games/Savannah/style.css';
import errorSound from '../../assets/audio/error.mp3';
import shuffleArray from '../../utils/shuffleArray';
import correctSound from '../../assets/audio/correct.mp3';

const wordsArr = ['man', 'woman', 'rookie', 'chance'];
const translations = ['мужчина', 'женщина', 'новичок', 'шанс'];
let result;
let mistakes = 0;

const playResultSound = (isOk) => {
  const wordAudio = new Audio();
  wordAudio.src = isOk ? correctSound : errorSound;
  wordAudio.play();
};

const clickHandler = (event) => {
  if (event.target.dataset.indexTranslate === document.getElementById('title').dataset.indexTranslate) {
  result = true;
  playResultSound(result);
  }
  else {
    result = false;
    mistakes += 1;
  }
  playResultSound(result)
  };

const WordToGuess = (props) => {
    const {
      words,
    } = props;
    
  
    return <div>
      <p id = 'title' data-index-translate = {words.id} data-index-match = {words.wordTranslate} data-index-test = {props.id}>
        {words.word}
      </p>
    </div>;
  };
  
  

  const SavannahComponentTranslation = (props) => {
    const {
      wordsForRender,
      correctWord,
      UserAnswer,
      isWordFinished,
      isCorrect,
      selectedIndex,
      correctIndex,
      translations
    } = props;

    const wordsCards = shuffleArray(wordsForRender).map((word, index) => {
      return <p className={'translation'} key={word.id} data-index={index} data-index-translate = {word.id}>
       {word.wordTranslate}
        </p>;
    });
  
    return <div onClick={clickHandler}>{wordsCards}</div>;
  };
  
  const numberClickHandler = (event) => {
    if (event.key > 0 && event.key < 5) {
      if (document.getElementsByClassName('translation')[event.key - 1].textContent === document.getElementById('title').dataset.indexMatch) {
        result = true;
        }
        else {
          result = false;
          mistakes += 1;
        }
        playResultSound(result)
      }
  }


  export {WordToGuess, clickHandler, wordsArr, translations, SavannahComponentTranslation, mistakes, result, numberClickHandler}