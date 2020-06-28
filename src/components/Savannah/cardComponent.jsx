import React, {useState} from 'react';
import { connect } from 'react-redux';
import errorSound from '../../assets/audio/error.mp3';
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
      correctWord,
      UserAnswer,
      isWordFinished,
      isCorrect,
      selectedIndex,
      correctIndex,
      translation
    } = props;
    
  
    return <div>
      <p id = 'title' index = {words.id} data-index-translate = {words.id}>
        {words.word}
      </p>
    </div>;
  };
  
  
  const SavannahComponent = (props) => {
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
  
    console.log(wordsForRender);

    const wordsCards = wordsForRender.map((word, index) => {
      return <p key={word} index={index} data-index-translate = {word.id}>
       {word.word}
        </p>;
    });
  
    return <div onClick={clickHandler}>{wordsCards}</div>;
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
  
    console.log(wordsForRender);

    const wordsCards = wordsForRender.map((word, index) => {
      return <p key={word.id} index={index} data-index-translate = {word.id}>
       {word.wordTranslate}
        </p>;
    });
  
    return <div onClick={clickHandler}>{wordsCards}</div>;
  };
  
  document.addEventListener('keydown', (event) => {
    if (event.key > 0 && event.key < 5) {
    console.log(event.key);
    }
  })


  export {SavannahComponent, WordToGuess, clickHandler, wordsArr, translations, SavannahComponentTranslation, mistakes}