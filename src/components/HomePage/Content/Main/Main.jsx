import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import Title from './components/Title/Title';
import TitleWithUnderline from './components/Title/styled/TitleWithUnderline';
import GameCard from './components/GameCard/GameCard';
import GamesContainer from './styled/GamesContainer';
import ContentContainer from '../ContentContainer';

export default function Main(props) {
  const { games } = props;
  return (
    <ContentContainer>
      <Title userName="User" />
      <TitleWithUnderline>
        <Translate value="HomePage.start" />
      </TitleWithUnderline>
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
    </ContentContainer>
  );
}

Main.propTypes = {
  games: PropTypes.instanceOf(Array),
};

Main.defaultProps = {
  games: [],
};
