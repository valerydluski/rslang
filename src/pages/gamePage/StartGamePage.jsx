import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startGame } from '../../redux/action';

const StartGamePage = (props) => {
  const { gameName, onGameStart } = props;

  const gameDescriptions = {
    AudioCall: 'AudioCall description. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    EnglishPuzzle: 'EnglishPuzzle description. Lorem ipsum dolor sit amet.',
    OwnGame: 'OwnGame description. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    Savannah: 'Savannah description. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    Sprint: 'Sprint description. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    SpeakIT: 'SpeakIT description. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  };

  const gameDescription = gameDescriptions[gameName];
  return (
    <div className="start-game-page">
      <h3 className="start-game-page__game-name">{gameName}</h3>
      <p className="start-game-page__description">{gameDescription}</p>
      <button className="start-game-page__start-button" type="button" onClick={onGameStart}>
        Start game
      </button>
    </div>
  );
};

StartGamePage.propTypes = {
  gameName: PropTypes.string.isRequired,
  onGameStart: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onGameStart: () => dispatch(startGame()),
  };
}

export default connect(null, mapDispatchToProps)(StartGamePage);
