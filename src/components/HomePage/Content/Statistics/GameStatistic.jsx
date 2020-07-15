import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import {
  GameStatisticStyled,
  GameNameStyled,
  GameStatisticTextStyled,
  GameCountStyled,
} from './Styled/GamesStatisticStyled';

function GameStatistics({ statistic, game }) {
  const gameNameText = `GamesStatistics.${game}`;
  const stat = statistic.split('_');
  const winCount = stat[1];
  const allCount = stat[0];
  return (
    <GameStatisticStyled>
      <GameNameStyled>
        <Translate value={gameNameText} />
      </GameNameStyled>
      <GameStatisticTextStyled>
        <p>
          <Translate value="GamesStatistics.winGames" />
        </p>
        <GameCountStyled>{winCount}</GameCountStyled>
        <p>
          <Translate value="GamesStatistics.allGames" />
        </p>
        <GameCountStyled>{allCount}</GameCountStyled>
      </GameStatisticTextStyled>
    </GameStatisticStyled>
  );
}

GameStatistics.propTypes = {
  statistic: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
};

export default GameStatistics;
