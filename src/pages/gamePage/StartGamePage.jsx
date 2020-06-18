import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import gamesDescriptions from '../../assets/data/gamesDescriptions';

const StartGamePage = ({ match }) => {
  const { gameName } = match.params;
  const description = gamesDescriptions[gameName];
  return (
    <div className="start-game-page">
      <h3 className="start-game-page__game-name">{gameName}</h3>
      <p className="start-game-page__description">{description}</p>
      <Link to={`/Game/${gameName}`}>Start</Link>
    </div>
  );
};

StartGamePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameName: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default StartGamePage;
