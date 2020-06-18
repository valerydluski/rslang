import React from 'react';
import PropTypes from 'prop-types';

const StartGamepage = ({ gameName, gameStart }) => {
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
      <button type="button" onClick={gameStart}>
        Start game
      </button>
    </div>
  );
};

StartGamepage.propTypes = {
  gameName: PropTypes.string.isRequired,
  gameStart: PropTypes.func.isRequired,
};

export default StartGamepage;
