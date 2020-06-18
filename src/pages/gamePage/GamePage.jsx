import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SpeakIT from '../games/SpeakIt/SpeakIT';
import EnglishPuzzle from '../games/EnglishPuzzle/EnglishPuzzle';
import Savannah from '../games/Savannah/Savannah';
import AudioCall from '../games/AudioCall/AudioCall';
import Sprint from '../games/Sprint/Sprint';
import OwnGame from '../games/OwnGame/OwnGame';

const GamePage = ({ match }) => {
  const { gameName } = match.params;
  switch (gameName) {
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
    case 'OwnGame':
      return <OwnGame />;
    default:
      return <Redirect to="/LoginPage" />;
  }
};

GamePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameName: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default GamePage;
