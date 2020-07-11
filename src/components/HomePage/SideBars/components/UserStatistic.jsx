import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import UserStatisticContainer from './styled/UserStatisticContainer';
import ProgressBarContainer from './styled/ProgressBarContainer';
import DayInfoContainer from './styled/DayInfoContainer';
import DayInfo from './DayInfo';
import TotalProgress from './TotalProgress';
import { TOTAL_WORDS } from '../../../../config';

function UserStatistic({ wordsInDay, cardsInDay, totalWordsInDay, totalCardsInDay, totalWords }) {
  return (
    <UserStatisticContainer>
      <DayInfoContainer>
        <DayInfo title={I18n.t('LearnWords.newWords')} count={wordsInDay} total={totalWordsInDay} />
        <DayInfo
          title={I18n.t('LearnWords.cardsShowed')}
          count={cardsInDay}
          total={totalCardsInDay}
        />
      </DayInfoContainer>
      <ProgressBarContainer>
        <TotalProgress
          count={
            totalWords.length === 0 || totalWords[0].paginatedResults.length === 0
              ? 0
              : totalWords[0].totalCount[0].count
          }
          total={TOTAL_WORDS}
        />
      </ProgressBarContainer>
    </UserStatisticContainer>
  );
}

UserStatistic.propTypes = {
  wordsInDay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cardsInDay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalWordsInDay: PropTypes.number,
  totalCardsInDay: PropTypes.number,
  totalWords: PropTypes.instanceOf(Array),
};

UserStatistic.defaultProps = {
  wordsInDay: 0,
  cardsInDay: 0,
  totalWordsInDay: 0,
  totalCardsInDay: 0,
  totalWords: [],
};

const mapStateToProps = (state) => {
  return {
    wordsInDay: state.changeStatistic.statistic.CountNewWordsToday,
    cardsInDay: state.changeStatistic.statistic.CountCardsShow,
    totalWordsInDay: state.userSettings.settings.wordsPerDay,
    totalCardsInDay: state.userSettings.settings.cardsPerDay,
    totalWords: state.userWords.words,
  };
};

export default connect(mapStateToProps, null)(UserStatistic);
