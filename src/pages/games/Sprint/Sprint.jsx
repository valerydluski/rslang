import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import { changeIDontKnowWords } from '../../../redux/Games/action';
import changeAppMode from '../../../redux/AppMode/action';
import SprintContainerStyled from '../../../containers/Sprint/Styled/SprintContainerStyled';
import SprintGameContainer from '../../../containers/Sprint/SprintGameContainer';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import ResultModal from '../../../containers/Modal/ResultModal';
import Timer from '../../../components/Sprint/Timer';

const Sprint = (props) => {
  const {
    wordsCollection,
    switchAppMode,
    isWordsLoading,
    currentAppMode,
    addWrongWordsToStore,
  } = props;

  const [isGameFinished, toggleGameMode] = useState(false);
  const [wrongAnsweredWords, addWordToWrong] = useState([]);

  if (isWordsLoading) return <LoadingSpinner />;

  const secondsForOneWord = 2;
  const secondsForGuessing = wordsCollection.length * secondsForOneWord;

  const finishGameHandler = () => {
    addWrongWordsToStore(wrongAnsweredWords);
    toggleGameMode(true);
  };

  const timeIsUpHandler = () => {
    finishGameHandler();
  };

  if (currentAppMode !== 'Sprint' || wordsCollection.length === 0) {
    switchAppMode('Sprint');
    return null;
  }

  if (isGameFinished) return <ResultModal showProperties={['word', 'wordTranslate']} />;

  return (
    <SprintContainerStyled>
      <GoToHomePageButton />
      <Timer initialTime={secondsForGuessing} timeIsUpHandler={timeIsUpHandler} />
      <SprintGameContainer
        isGameFinished={isGameFinished}
        wordsCollection={wordsCollection}
        finishGameHandler={finishGameHandler}
        wrongAnsweredWords={wrongAnsweredWords}
        addWordToWrong={addWordToWrong}
      />
    </SprintContainerStyled>
  );
};

Sprint.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  switchAppMode: PropTypes.func,
  isWordsLoading: PropTypes.bool,
  currentAppMode: PropTypes.string,
  addWrongWordsToStore: PropTypes.func,
};

Sprint.defaultProps = {
  wordsCollection: [],
  switchAppMode: () => {},
  isWordsLoading: false,
  currentAppMode: '',
  addWrongWordsToStore: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
  };
};

const mapDispatchToProps = {
  addWrongWordsToStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sprint);
