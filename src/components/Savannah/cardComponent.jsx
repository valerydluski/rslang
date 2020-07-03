import React, {useState} from 'react';
import { connect } from 'react-redux';
import '../../pages/games/Savannah/style.css';
import errorSound from '../../assets/audio/error.mp3';
import shuffleArray from '../../utils/shuffleArray';
import correctSound from '../../assets/audio/correct.mp3';

let catchedEvent;
let result;
let mistakes = 0;

const playResultSound = (isOk) => {
  const wordAudio = new Audio();
  wordAudio.src = isOk ? correctSound : errorSound;
  wordAudio.play();
};

const clickHandler = (event) => {
  catchedEvent = event.target;
  if (event.target.dataset.indexTranslate === document.getElementById('title').dataset.indexTranslate) {
  event.target.style.backgroundColor = 'green';
  result = true;
  playResultSound(result);
  }
  else {
    event.target.style.backgroundColor = 'red';
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
      <p className="english_word" id = 'title' data-index-translate = {words.id} data-index-match = {words.wordTranslate} data-index-test = {props.id}>
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
      return <p onClick={clickHandler} className={'translation game_words'} key={word.id} data-index={index} data-index-translate = {word.id}>
       {word.wordTranslate}
        </p>;
    });
  
    return <div className="game_words_container">{wordsCards}</div>;
  };
  
  


  export {WordToGuess, clickHandler, SavannahComponentTranslation, mistakes, result, playResultSound, catchedEvent}