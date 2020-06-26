import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIDontKnowWords } from '../../../../redux/Games/action';
import changeAppMode from '../../../../redux/AppMode/action';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import SprintGameContainerStyled from '../Styled/SprintGameContainerStyled';
import { WordStyled, TranslationStyled } from '../Styled/WordInfoStyled';
import Timer from '../Timer/Timer';
import SprintControlsContainer from './SprintControlsContainer';
import randomIntegerGenerator from '../../../../utils/randomIntegerGenerator';
import shuffleArray from '../../../../utils/shuffleArray';
import ResultModal from '../../../../containers/Modal/ResultModal';

let currentGameWords;

const SprintGameContainer = (props) => {
  const {
    wordsCollection,
    switchAppMode,
    isWordsLoading,
    secondsForGuessing,
    currentAppMode,
    addWrongWordsToStore,
  } = props;

  const [currentWordIndex, changeWordIndex] = useState(0);
  const [isWordFinished, toggleWordStatus] = useState(false);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);
  const [isAnswerCorrect, setAnswer] = useState(true);
  const [isGameFinished, toggleGameMode] = useState(false);

  if (isWordsLoading) return <LoadingSpinner />;

  if (currentAppMode !== 'Sprint') {
    switchAppMode('Sprint');
    return null;
  }

  if (!currentWordIndex) currentGameWords = shuffleArray(wordsCollection);

  const currentWord = currentGameWords[currentWordIndex];

  const currentRightAnswer = Boolean(randomIntegerGenerator(0, 1));

  let supposedAnswerWord;

  if (!currentRightAnswer) {
    let supposedAnswerWordIndex = randomIntegerGenerator(0, wordsCollection.length - 1);
    supposedAnswerWord = wordsCollection[supposedAnswerWordIndex];
    if (supposedAnswerWord.word === currentWord.word) {
      supposedAnswerWordIndex =
        supposedAnswerWordIndex > 0 ? supposedAnswerWordIndex - 1 : supposedAnswerWordIndex + 1;
      supposedAnswerWord = wordsCollection[supposedAnswerWordIndex];
    }
  } else {
    supposedAnswerWord = currentGameWords[currentWordIndex];
  }

  if (isGameFinished) addWrongWordsToStore(wrongAnsweredWords);

  const timeIsUpHandler = () => {
    toggleGameMode(true);
  };

  const processAnswer = (receivedAnswer) => {
    const result = receivedAnswer === currentRightAnswer;
    toggleWordStatus(true);
    setAnswer(result);
    if (!result) addWordToWrong([...wrongAnsweredWords, currentWord.word]);
    if (currentWordIndex === currentGameWords.length - 1) toggleGameMode(true);
    else changeWordIndex(currentWordIndex + 1);
  };
  return (
    <SprintGameContainerStyled>
      <Timer initialTime={secondsForGuessing} timeIsUpHandler={timeIsUpHandler} />
      <WordStyled>{currentWord.word}</WordStyled>
      <TranslationStyled>{supposedAnswerWord.wordTranslate}</TranslationStyled>
      {isWordFinished ? (
        <SprintControlsContainer
          isAnswerCorrect={isAnswerCorrect}
          isWordFinished={isWordFinished}
          clickHandler={processAnswer}
        />
      ) : (
        <SprintControlsContainer clickHandler={processAnswer} />
      )}
      {isGameFinished ? <ResultModal showProperties={['word', 'wordTranslate']} /> : null}
    </SprintGameContainerStyled>
  );
};

SprintGameContainer.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  switchAppMode: PropTypes.func,
  isWordsLoading: PropTypes.bool,
  secondsForGuessing: PropTypes.number,
  currentAppMode: PropTypes.string,
  addWrongWordsToStore: PropTypes.func,
};

SprintGameContainer.defaultProps = {
  wordsCollection: [],
  switchAppMode: () => {},
  isWordsLoading: false,
  secondsForGuessing: 20,
  currentAppMode: '',
  addWrongWordsToStore: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    isWordsLoading: state.loader.loading,
    secondsForGuessing: state.appSettings,
    currentAppMode: state.changeAppMode.appMode,
  };
};

const mapDispatchToProps = {
  addWrongWordsToStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SprintGameContainer);
