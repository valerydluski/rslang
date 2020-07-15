import React from 'react';
import { Translate } from 'react-redux-i18n';
import StatisticsHeaderStyled from './Styled/StatisticsHeaderStyled';

const StatisticsHeader = () => {
  return (
    <>
      <StatisticsHeaderStyled>
        <Translate value="GamesStatistics.header" />
      </StatisticsHeaderStyled>
    </>
  );
};

export default StatisticsHeader;
