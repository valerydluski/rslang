import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import gamesDescriptions from '../../assets/data/gamesDescriptions';
import { changeAppMode } from '../../redux/AppMode/action';
import StartGamePageStyled from './Styled/StartGamePageStyled';
import GoToHomePageButton from '../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import {
  GameNameStyled,
  GameDescriptionStyled,
  ContainerNameAndDescription,
  StartGamePageContent,
} from './Styled/StartGamePageContentStyled';
import GamesAnimation from '../../components/GamesPage/Animation/GamesAnimation';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { checkStatusSession } from '../../redux/Auth/Login/actions';

const StartGamePage = ({
  match,
  isLoading,
  isDataLoad,
  checkStatus,
  isWordsLoading,
  currentAppMode,
  switchAppMode,
}) => {
  const { gameId } = match.params;
  const { name } = gamesDescriptions[gameId];
  const { description } = gamesDescriptions[gameId];
  if (isLoading) return <LoadingSpinner />;
  if (!isDataLoad) {
    checkStatus();
    return <Redirect to={`/StartGame/${gameId}/`} />;
  }
  if (isWordsLoading) return <LoadingSpinner />;
  if (currentAppMode !== gameId) {
    switchAppMode(gameId);
    return null;
  }
  return (
    <StartGamePageStyled>
      <GoToHomePageButton />
      <StartGamePageContent>
        <ContainerNameAndDescription>
          <GameNameStyled>
            <Translate value="StartPage.game" />: <Translate value={name} />
          </GameNameStyled>
          <GameDescriptionStyled>
            <Translate value={description} />
          </GameDescriptionStyled>
        </ContainerNameAndDescription>
        <Link to={`/Game/${gameId}`}>
          <Translate value="Buttons.start" />
        </Link>
      </StartGamePageContent>
      <GamesAnimation />
    </StartGamePageStyled>
  );
};

StartGamePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }),
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isDataLoad: PropTypes.bool.isRequired,
  checkStatus: PropTypes.func.isRequired,
  switchAppMode: PropTypes.func.isRequired,
  isWordsLoading: PropTypes.bool.isRequired,
  currentAppMode: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.loadDataLoaderReducer.loading,
    isDataLoad: state.dataLoad.isDataLoadFromApi,
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
  };
};

const mapDispatchToProps = {
  changeMode: changeAppMode,
  checkStatus: checkStatusSession,
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartGamePage);
