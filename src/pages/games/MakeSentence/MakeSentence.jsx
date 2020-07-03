import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import { changeIDontKnowWords } from '../../../redux/Games/action';
import ResultModal from '../../../containers/Modal/ResultModal';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
import shuffleArray from '../../../utils/shuffleArray';
import changeAppMode from '../../../redux/AppMode/action';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { checkStatusSession } from '../../../redux/Auth/Login/actions';
// import { DontKnowButton, NextButton } from '../../../components/Audiocall/AudiocallControls';
import {
  changeMakeSentenceLevel,
  changeMakeSentencePage,
} from '../../../redux/ChangeRounds/action';
import InitialSentenceContainer from '../../../components/MakeSentence/InitialSentenceContainer';
import { GAME_MAX_PAGE, LINK_FOR_AUDIO } from '../../../config';
import GameFieldsContainer from '../../../containers/MakeSentence/GameFieldsContainer';

let currentGameWords;

const MakeSentence = ({
  wordsCollection,
  // addWordsWithMistakesToStore,
  switchAppMode,
  isWordsLoading,
  currentAppMode,
  updateLevel,
  updatePage,
  page,
  level,
  maxPage,
}) => {
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  // const [wrongAnsweredWords, addWordToWrong] = useState([]);
  const [isGameFinished, toggleGameMode] = useState(false);

  checkStatusSession();

  if (isWordsLoading) return <LoadingSpinner />;

  if (currentAppMode !== 'MakeSentence' || wordsCollection.length === 0) {
    switchAppMode('MakeSentence');
    return null;
  }

  if (!currentWordIndex && !isWordFinished) {
    currentGameWords = shuffleArray(wordsCollection);
  }

  function finishGame() {
    // addWordsWithMistakesToStore(wrongAnsweredWords);
    toggleGameMode(true);
  }

  if (isWordFinished) {
    if (currentWordIndex === wordsCollection.length - 1) finishGame();
    else {
      changeIndex(currentWordIndex + 1);
      toggleWordStatus(false);
    }
  }

  // function switchToNextWord() {
  //   if (currentWordIndex === wordsCollection.length - 1) finishGame();
  //   else {
  //     changeIndex(currentWordIndex + 1);
  //     toggleWordStatus(false);
  //   }
  // }

  // function processUserAnswer(isCorrect, words, selectedIndex, correctIndex) {
  //   if (!isCorrect) addWordToWrong([...wrongAnsweredWords, wordsCollection[currentWordIndex].word]);
  //   // isAnswerCorrect = { isCorrect, words, selectedIndex, correctIndex };
  //   toggleWordStatus(true);
  // }

  // const checkResult = () => {};

  const audioSrc = `${LINK_FOR_AUDIO}${currentGameWords[currentWordIndex].audioExample}`;
  const sentence = currentGameWords[currentWordIndex].textExample;
  const sentenceTranslation = currentGameWords[currentWordIndex].textExampleTranslate;
  return (
    <div className="make-sentence_container">
      <GoToHomePageButton />
      <StatusMenu
        page={page}
        level={level}
        maxPage={maxPage}
        updateLevel={updateLevel}
        updatePage={updatePage}
      />
      {isGameFinished ? <ResultModal showProperties={['word', 'translation']} /> : null}
      <InitialSentenceContainer audioSrc={audioSrc} sentence={sentence} />
      <GameFieldsContainer
        sentenceTranslation={sentenceTranslation}
        toggleWordStatus={toggleWordStatus}
        isNewWord={123}
      />
    </div>
  );
};

MakeSentence.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  // addWordsWithMistakesToStore: PropTypes.func,
  switchAppMode: PropTypes.func,
  isWordsLoading: PropTypes.bool,
  currentAppMode: PropTypes.string,
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  level: PropTypes.string,
  page: PropTypes.string,
  maxPage: PropTypes.number,
};

MakeSentence.defaultProps = {
  wordsCollection: [],
  // addWordsWithMistakesToStore: () => {},
  switchAppMode: () => {},
  isWordsLoading: false,
  currentAppMode: '',
  updatePage: () => {},
  updateLevel: () => {},
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
    level: state.changeRound.MakeSentenceLevel,
    page: state.changeRound.MakeSentencePage,
    maxPage: state.maxPage.maxPage.count,
  };
};

const mapDispatchToProps = {
  addWordsWithMistakesToStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
  updateLevel: changeMakeSentenceLevel,
  updatePage: changeMakeSentencePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeSentence);
