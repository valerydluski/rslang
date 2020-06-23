import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gamesDescriptions from '../../assets/data/gamesDescriptions';
import changeAppMode from '../../redux/AppMode/action';

const StartGamePage = ({ match }) => {
  const { gameId } = match.params;
  const { name } = gamesDescriptions[gameId].en;
  const { description } = gamesDescriptions[gameId].en;
  const startHandler = () => {
    changeAppMode(gameId);
  };

  return (
    <div className="start-game-page">
      <h3 className="start-game-page__game-name">{name}</h3>
      <p className="start-game-page__description">{description}</p>
      <Link to={`/Game/${gameId}`} onClick={startHandler}>
        Start
      </Link>
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

export default connect(null, { changeAppMode })(StartGamePage);
