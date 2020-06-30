import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import changeAppMode from '../../../redux/AppMode/action';
import SprintContainerStyled from '../../../containers/Sprint/Styled/SprintContainerStyled';
import SprintGameContainer from '../../../containers/Sprint/SprintGameContainer';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Timer from '../../../components/Sprint/Timer';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
import { changeSprintLevel, changeSprintPage } from '../../../redux/ChangeRounds/action';
import { GAME_MAX_PAGE } from '../../../config';

const Sprint = (props) => {
  const {
    wordsCollection,
    switchAppMode,
    isWordsLoading,
    currentAppMode,
    updateLevel,
    updatePage,
    page,
    level,
    maxPage,
  } = props;
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
      <StatusMenu
        page={page}
        level={level}
        maxPage={maxPage}
        updateLevel={updateLevel}
        updatePage={updatePage}
      />
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
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  level: PropTypes.string,
  page: PropTypes.string,
  maxPage: PropTypes.number,
};

Sprint.defaultProps = {
  wordsCollection: [],
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
    level: state.changeRound.SprintLevel,
    page: state.changeRound.SprintPage,
    maxPage: state.maxPage.maxPage.count,
  };
};

const mapDispatchToProps = {
  switchAppMode: changeAppMode,
  updateLevel: changeSprintLevel,
  updatePage: changeSprintPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sprint);
