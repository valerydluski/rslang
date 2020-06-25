import React from 'react';
import PropTypes from 'prop-types';
import MainContainer from './styled/MainContainer';
import Title from './components/Title/Title';
import TitleWithUnderline from './components/Title/styled/TitleWithUnderline';
import GameCard from './components/GameCard/GameCard';
import GamesContainer from './styled/GamesContainer';

export default function Main(props) {
  const { games } = props;
  return (
    <MainContainer>
      <Title userName="User" />
      <TitleWithUnderline>Let&#39;s play!</TitleWithUnderline>
      <GamesContainer>
        {games.map((data) => {
          const { poster, title, description, onClick } = data;
          return (
            <GameCard
              key={title}
              poster={poster}
              title={title}
              description={description}
              onClick={onClick}
            />
          );
        })}
      </GamesContainer>
    </MainContainer>
  );
}

Main.propTypes = {
  games: PropTypes.instanceOf(Array),
};

Main.defaultProps = {
  games: [],
};
