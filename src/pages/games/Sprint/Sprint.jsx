import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import { changeAppMode } from '../../../redux/AppMode/action';
import SprintContainerStyled from '../../../containers/Sprint/Styled/SprintContainerStyled';
import SprintGameContainer from '../../../containers/Sprint/SprintGameContainer';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Timer from '../../../components/Sprint/Timer';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
import { changeSprintLevel, changeSprintPage } from '../../../redux/ChangeRounds/action';
import { GAME_MAX_PAGE, GAME_NAME } from '../../../config';
import newRound from '../../../utils/newRound';
import GameContainerStyled from './Styled/StyledGameContainer';
import SprintAnimation from '../../../components/Sprint/Animation/SprintAnimation';
import StyledPattern from '../../../components/Sprint/Styled/StyledPattern';

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
    secondsForOneWord,
    gameName,
    gameMode,
  } = props;
  const [isGameFinished, toggleGameMode] = useState(false);
  if (isWordsLoading) return <LoadingSpinner />;

  const secondsForGuessing = wordsCollection.length * secondsForOneWord;

  const finishGameHandler = () => {
    toggleGameMode(true);
  };

  const timeIsUpHandler = () => {
    finishGameHandler();
  };

  const newGame = () => {
    toggleGameMode(false);
    let newLevel;
    let newPage;
    let obj;
    if (gameMode) {
      obj = newRound(level, page, maxPage);
      newLevel = obj.newLevel;
      newPage = obj.newPage;
      if (newLevel !== level) updateLevel(newLevel);
      if (newPage !== page) updatePage(newPage);
    } else {
      updateLevel(level);
    }
  };

  if (currentAppMode !== gameName || wordsCollection.length === 0) {
    switchAppMode(gameName);
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
      <GameContainerStyled>
        <Timer
          initialTime={secondsForGuessing}
          timeIsUpHandler={timeIsUpHandler}
          isGameFinished={isGameFinished}
        />
        <SprintGameContainer
          isGameFinished={isGameFinished}
          wordsCollection={wordsCollection}
          finishGameHandler={finishGameHandler}
          level={level}
          page={page}
          gameName={gameName}
          newGame={newGame}
        />
      </GameContainerStyled>
      <StyledPattern>
        <SprintAnimation />
      </StyledPattern>
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
  secondsForOneWord: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  gameName: PropTypes.string,
  gameMode: PropTypes.bool.isRequired,
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
  gameName: '',
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
    level: state.changeRound.SprintLevel,
    page: state.changeRound.SprintPage,
    maxPage: state.maxPage.maxPage,
    secondsForOneWord: state.userSettings.settings.sprintTimeForWord,
    gameName: GAME_NAME.sprint,
    gameMode: state.gamesReducer.gameMode,
  };
};

const mapDispatchToProps = {
  switchAppMode: changeAppMode,
  updateLevel: changeSprintLevel,
  updatePage: changeSprintPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sprint);
