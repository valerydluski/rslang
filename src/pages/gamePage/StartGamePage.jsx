import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import gamesDescriptions from '../../assets/data/gamesDescriptions';
import StartGamePageStyled from './Styled/StartGamePageStyled';
import GameNameStyled from './Styled/GameNameStyled';
import GameDescriptionStyled from './Styled/GameDescription';

const StartGamePage = ({ match }) => {
  const { gameId } = match.params;
  const { name } = gamesDescriptions[gameId].en;
  const { description } = gamesDescriptions[gameId].en;

  return (
    <StartGamePageStyled className="start-game-page">
      <div>
        <GameNameStyled>GAME: {name}</GameNameStyled>
        <GameDescriptionStyled>{description}</GameDescriptionStyled>
      </div>
      <Link to={`/Game/${gameId}`}>Start</Link>
    </StartGamePageStyled>
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
