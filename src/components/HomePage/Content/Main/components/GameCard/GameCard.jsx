import React from 'react';
import PropTypes from 'prop-types';
import GameCardContainer from './styled/GameCardContainer';
import StyledRoundButton from '../../../../../UI/Button/Styled/StyledRoundButton';

export default function GameCard(props) {
  const { poster, title, description, onClick } = props;

  return (
    <GameCardContainer>
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <div>
        <p>{description}</p>
        <StyledRoundButton onClick={onClick}>GO!</StyledRoundButton>
      </div>
    </GameCardContainer>
  );
}

GameCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
