import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { GAME_NAME } from '../../../../config';
import GamesStatisticStyled, { ContenGamesStatisticStyled } from './Styled/GamesStatisticStyled';
import StyledTitle from './Styled/StyledTitle';
import GameStatistic from './GameStatistic';

function GamesStatistics({ statistic, games }) {
  return (
    <GamesStatisticStyled>
      <StyledTitle>
        <Translate value="HomePage.statisticsGames" />
      </StyledTitle>
      <ContenGamesStatisticStyled>
        {Object.values(games).map((game) => {
          if (game !== GAME_NAME.learnWords) {
            return <GameStatistic key={game} statistic={statistic[`${game}All`]} game={game} />;
          }
          return null;
        })}
      </ContenGamesStatisticStyled>
    </GamesStatisticStyled>
  );
}

GamesStatistics.propTypes = {
  statistic: PropTypes.instanceOf(Object).isRequired,
  games: PropTypes.instanceOf(Object),
};

GamesStatistics.defaultProps = {
  games: GAME_NAME,
};

const mapStateToProps = (state) => {
  return {
    statistic: state.changeStatistic.statistic,
  };
};

export default connect(mapStateToProps, null)(GamesStatistics);
