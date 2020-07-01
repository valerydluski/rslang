import React from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import RoundStatisticStyled from './Styled/RoundStatisticStyled';

const RoundStatistic = (props) => {
  const { time, level, page, correct } = props;
  return (
    <>
      <RoundStatisticStyled>
        {/* <Translate value="GamesStatistics.header" /> */}
        {time} уровень:{level} страница:{page} парвильных ответов:{correct}
      </RoundStatisticStyled>
    </>
  );
};

RoundStatistic.propTypes = {
  time: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  correct: PropTypes.string.isRequired,
};
export default RoundStatistic;
