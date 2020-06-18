import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeakIT from '../games/SpeakIt/SpeakIT';
import EnglishPuzzle from '../games/EnglishPuzzle/EnglishPuzzle';
import Savannah from '../games/Savannah/Savannah';
import AudioCall from '../games/AudioCall/AudioCall';
import Sprint from '../games/Sprint/Sprint';
import OwnGame from '../games/OwnGame/OwnGame';
import StartGamePage from './StartGamePage';

export default class Gamepage extends Component {
  constructor({ gameName }) {
    super();
    this.state = {
      isGameStart: false,
    };
    this.gameName = gameName;
    this.PageComponents = {
      SpeakIT: <SpeakIT />,
      EnglishPuzzle: <EnglishPuzzle />,
      Savannah: <Savannah />,
      AudioCall: <AudioCall />,
      Sprint: <Sprint />,
      OwnGame: <OwnGame />,
      StartGamePage: <StartGamePage gameName={this.gameName} gameStart={this.startGame} />,
    };
  }

  startGame = () => {
    this.setState({ isGameStart: true });
  };

  render() {
    const { isGameStart } = this.state;
    return (
      <div className="game-page">
        {isGameStart ? this.PageComponents[this.gameName] : this.PageComponents.StartGamePage}
      </div>
    );
  }
}

Gamepage.propTypes = {
  gameName: PropTypes.string.isRequired,
};
