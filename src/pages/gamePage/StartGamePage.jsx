import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gamesDescriptions from '../../assets/data/gamesDescriptions';
import changeAppMode from '../../redux/AppMode/action';
import StartGamePageStyled from './Styled/StartGamePageStyled';
import GoToHomePageButton from '../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import {
  GameNameStyled,
  GameDescriptionStyled,
  ContainerNameAndDescription,
  StartGamePageContent,
} from './Styled/StartGamePageContentStyled';

const StartGamePage = ({ match, changeMode }) => {
  const { gameId } = match.params;
  const { name } = gamesDescriptions[gameId].en;
  const { description } = gamesDescriptions[gameId].en;
  const linkHandler = () => {
    changeMode(gameId);
  };

  return (
    <StartGamePageStyled>
      <GoToHomePageButton />
      <StartGamePageContent>
        <ContainerNameAndDescription>
          <GameNameStyled>GAME: {name}</GameNameStyled>
          <GameDescriptionStyled>{description}</GameDescriptionStyled>
        </ContainerNameAndDescription>
        <Link to={`/Game/${gameId}`} onClick={linkHandler}>
          Start
        </Link>
      </StartGamePageContent>
    </StartGamePageStyled>
  );
};

StartGamePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }),
  }).isRequired,
  changeMode: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  changeMode: changeAppMode,
};

export default connect(null, mapDispatchToProps)(StartGamePage);
