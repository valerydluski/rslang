import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SpeakIT from '../games/SpeakIt/SpeakIT';
import EnglishPuzzle from '../games/EnglishPuzzle/EnglishPuzzle';
import Savannah from '../games/Savannah/Savannah';
import AudioCall from '../games/AudioCall/AudioCall';
import Sprint from '../games/Sprint/Sprint';
import OwnGame from '../games/OwnGame/OwnGame';
import StartGamePage from './StartGamePage';

const GamePage = (props) => {
  const { gameName, isGameStart } = props;

  const pageComponents = {
    SpeakIT: <SpeakIT />,
    EnglishPuzzle: <EnglishPuzzle />,
    Savannah: <Savannah />,
    AudioCall: <AudioCall />,
    Sprint: <Sprint />,
    OwnGame: <OwnGame />,
    StartGamePage: <StartGamePage gameName={gameName} />,
  };

  return (
    <div className="game-page">
      {isGameStart ? pageComponents[gameName] : pageComponents.StartGamePage}
    </div>
  );
};

GamePage.propTypes = {
  gameName: PropTypes.string.isRequired,
  isGameStart: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isGameStart: state.switchGameMode.isGameStart,
  };
}

export default connect(mapStateToProps)(GamePage);
