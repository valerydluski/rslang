import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SpeakIT from '../games/SpeakIt/SpeakIT';
import EnglishPuzzle from '../games/EnglishPuzzle/EnglishPuzzle';
import Savannah from '../games/Savannah/Savannah';
import AudioCall from '../games/AudioCall/AudioCall';
import Sprint from '../games/Sprint/Sprint';
import MakeSentence from '../games/MakeSentence/MakeSentence';
import { checkStatusSession } from '../../redux/Auth/Login/actions';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const GamePage = ({ match, isLoading, isDataLoad, checkStatus }) => {
  const { gameId } = match.params;

  if (isLoading) return <LoadingSpinner />;
  if (!isDataLoad) {
    checkStatus();
    return <Redirect to={`/StartGame/${gameId}/`} />;
  }
  switch (gameId) {
    case 'SpeakIT':
      return <SpeakIT />;
    case 'EnglishPuzzle':
      return <EnglishPuzzle />;
    case 'Savannah':
      return <Savannah />;
    case 'AudioCall':
      return <AudioCall />;
    case 'Sprint':
      return <Sprint />;
    case 'MakeSentence':
      return <MakeSentence />;
    default:
      return <Redirect to="/LoginPage" />;
  }
};

GamePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }),
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isDataLoad: PropTypes.bool.isRequired,
  checkStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.loadDataLoaderReducer.loading,
    isDataLoad: state.dataLoad.isDataLoadFromApi,
  };
};

const mapDispatchToProps = {
  checkStatus: checkStatusSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
