import React from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import RoundStatisticStyled from '../../../components/Modal/Statistics/Styled/RoundStatisticStyled';

const RoundStatistic = (props) => {
  const { data, roundHandler } = props;

  const correctCount = (str) => {
    if (str === '') return 0;
    return str.split(',').length;
  };

  const correctWords = data[2];
  const time = data[0];
  const level = data[1].split('_')[0];
  const page = data[1].split('_')[1];
  const correct = correctCount(correctWords);
  const count = data[3];

  const handler = () => {
    roundHandler(level, page, correctWords, count);
  };

  return (
    <>
      <RoundStatisticStyled onClick={handler}>
        {time} <Translate value="GamesStatistics.level" /> {level}
        {'; '}
        <Translate value="GamesStatistics.page" /> {page}
        {'; '}
        <Translate value="GamesStatistics.correct" /> {correct}
        {'; '}
        <Translate value="GamesStatistics.count" /> {count}
      </RoundStatisticStyled>
    </>
  );
};

RoundStatistic.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  roundHandler: PropTypes.func.isRequired,
};
export default RoundStatistic;
