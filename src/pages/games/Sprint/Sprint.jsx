import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import changeAppMode from '../../../redux/AppMode/action';
import SprintContainerStyled from '../../../containers/Sprint/Styled/SprintContainerStyled';
import SprintGameContainer from '../../../containers/Sprint/SprintGameContainer';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Timer from '../../../components/Sprint/Timer';

const Sprint = (props) => {
  const { wordsCollection, switchAppMode, isWordsLoading, currentAppMode } = props;
  const [isGameFinished, toggleGameMode] = useState(false);

  if (isWordsLoading) return <LoadingSpinner />;

  const secondsForOneWord = 2;
  const secondsForGuessing = wordsCollection.length * secondsForOneWord;

  const finishGameHandler = () => {
    toggleGameMode(true);
  };

  const timeIsUpHandler = () => {
    finishGameHandler();
  };

  if (currentAppMode !== 'Sprint' || wordsCollection.length === 0) {
    switchAppMode('Sprint');
    return null;
  }

  return (
    <SprintContainerStyled>
      <GoToHomePageButton />
      <Timer
        initialTime={secondsForGuessing}
        timeIsUpHandler={timeIsUpHandler}
        isGameFinished={isGameFinished}
      />
      <SprintGameContainer
        isGameFinished={isGameFinished}
        wordsCollection={wordsCollection}
        finishGameHandler={finishGameHandler}
      />
    </SprintContainerStyled>
  );
};

Sprint.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  switchAppMode: PropTypes.func,
  isWordsLoading: PropTypes.bool,
  currentAppMode: PropTypes.string,
};

Sprint.defaultProps = {
  wordsCollection: [],
  switchAppMode: () => {},
  isWordsLoading: false,
  currentAppMode: '',
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

export default connect(mapStateToProps, mapDispatchToProps)(Sprint);
