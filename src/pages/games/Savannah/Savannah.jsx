import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import shuffleArray from '../../../utils/shuffleArray';
import {
  SavannahComponentTranslation,
  result,
  GameRating,
  KeyEventDetector,
} from '../../../components/Savannah/cardComponent';
import WordsForAnswer from '../../../components/Savannah/answerWordsComponent';
import WordToGuess from '../../../components/Savannah/titleCardComponent';
import ResultModal from '../../../containers/Modal/ResultModal';
import { changeAppMode } from '../../../redux/AppMode/action';
import { changeIDontKnowWords } from '../../../redux/Games/action';
import { changeSavannahLevel, changeSavannahPage } from '../../../redux/ChangeRounds/action';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { GAME_MAX_PAGE } from '../../../config';

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
  isWordsLoading,
  maxPage,
}) => {
  const [gameStarted, setGameChange] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [isGameStarted, changeGameMode] = useState(false);
  const [isCurrentGameStarted, setGameStart] = useState(false);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);
  const [mistakesMade, setMistakesMade] = useState(0);
  const [translate, setTranslate] = useState('');
  const [livesLeft, setLivesLeft] = useState([0, 1, 2, 3, 4]);

  if (isWordsLoading) {
    return <LoadingSpinner />;
  }

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
    changeIndex(currentWordIndex + 1);
    addWordsWithMistakesToStore(wrongAnsweredWords);
    if (currentWordIndex > 10) {
      changeIndex(0);
    }
    if (result === false) {
      addWordToWrong([...wrongAnsweredWords, shuffledCollection[currentWordIndex].word]);
      setLivesLeft(livesLeft.splice(1));
      setMistakesMade(mistakesMade + 1);
    }
    setTranslate('');
  };

  const intervalSwitch = () => {
    setTranslate(shuffledCollection[currentWordIndex].wordTranslate);
    setTimeout(switchToNextWord, 1000);
  };

  const startGame = () => {
    changeIndex(0);
    setTranslate('');
    setGameChange(true);
    changeGameMode(true);
    shuffledCollection = shuffleArray(wordsCollection);
    answerShuffle(currentWordIndex);
  };

  let structure;
  if (isGameStarted && currentWordIndex < 10) {
    structure = (
      <div className="savannah_container">
        <KeyEventDetector func={intervalSwitch} />
        <div id="first">
          <div>
            <WordToGuess className="english-word" words={shuffledCollection[currentWordIndex]} />
            <GameRating livesRemain={livesLeft} />
          </div>
          <WordsForAnswer
            words={shuffledCollectionCopy}
            colorForWords={translate}
            func={intervalSwitch}
            mistakesInGame={mistakesMade}
          />
        </div>
      </div>
    );
  } else {
    structure = (
      <div className="savannah_container">
        {currentWordIndex > 9 || mistakesMade > 4 ? (
          <ResultModal showProperties={['word', 'wordTranslate']} />
        ) : null}
      </div>
    );
  }

  if (!gameStarted) {
    structure = (
      <div className="savannah_container">
        <button type="button" className="start_game_button" onClick={startGame}>
          Start
        </button>
        <p className="game_words advice">Используйте клавиши 1,2,3,4 чтобы дать быстрый ответ!</p>
      </div>
    );
  }

  return (
    <div>
      <GoToHomePageButton />
      <StatusMenu
        page={page}
        level={level}
        maxPage={maxPage}
        updateLevel={updateLevel}
        updatePage={updatePage}
      />
      <div>{structure}</div>
    </div>
  );
};

Savannah.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  addWordsWithMistakesToStore: PropTypes.func,
  switchAppMode: PropTypes.func,
  isWordsLoading: PropTypes.bool,
  currentAppMode: PropTypes.string,
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  level: PropTypes.string,
  page: PropTypes.string,
  maxPage: PropTypes.number,
};

Savannah.defaultProps = {
  wordsCollection: [],
  addWordsWithMistakesToStore: () => {},
  switchAppMode: () => {},
  isWordsLoading: false,
  currentAppMode: '',
  updatePage: () => {},
  updateLevel: () => {},
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
};

SavannahComponentTranslation.propTypes = {
  wordsToRender: PropTypes.instanceOf(Array),
};

SavannahComponentTranslation.defaultProps = {
  wordsToRender: [],
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
    level: state.changeRound.SavannahLevel,
    page: state.changeRound.SavannahPage,
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
