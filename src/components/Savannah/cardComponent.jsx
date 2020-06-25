import React, {useState} from 'react';

const wordsArr = ['man', 'woman', 'rookie', 'chance'];
const translations = ['мужчина', 'женщина', 'новичок', 'шанс'];

const clickHandler = (event) => {
    console.log(event.target.matches('[index]'));
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
      translations
    } = props;
    
  
    return <div onClick={clickHandler}>
      <p>
        {props.words}
      </p>
    </div>;
  };
  
  
  const SavannahComponent = (props) => {
    const {
      words,
      correctWord,
      UserAnswer,
      isWordFinished,
      isCorrect,
      selectedIndex,
      correctIndex,
      translations
    } = props;
  
    const wordsCards = wordsArr.map((word, index) => {
      return <p key={word} index={index} translation={word.wordTranslate}>
       {word}
        </p>;
    });
  
    return <div onClick={clickHandler}>{wordsCards}</div>;
  };
  
  document.addEventListener('keydown', (event) => {
    if (event.key > 0 && event.key < 5) {
    console.log(event.key);
    }
  })

  export {SavannahComponent, WordToGuess, clickHandler, wordsArr, translations}