import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import gamesDescriptions from '../../assets/data/gamesDescriptions';

const StartGamePage = ({ match }) => {
  const { gameId } = match.params;
  const { name } = gamesDescriptions[gameId].en;
  const { description } = gamesDescriptions[gameId].en;

  return (
    <div className="start-game-page">
      <h3 className="start-game-page__game-name">{name}</h3>
      <p className="start-game-page__description">{description}</p>
      <Link to={`/Game/${gameId}`}>Start</Link>
    </div>
  );
};

StartGamePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default StartGamePage;
