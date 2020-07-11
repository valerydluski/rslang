import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import StyledTitle from './Styled/StyledTitle';
import StyledStatistics from './Styled/StyledStatistics';
import Container from './Styled/Container';
import WordsAmount from './Styled/WordsAmount';
import Chart from '../../../../containers/Homepage/Statistics/Chart';
import Title from '../../../../containers/Homepage/Content/Title/Title';
import Loader from './Loader/Loader';

function Statistics({ getAllWords, data, isLoading }) {
  useEffect(() => {
    getAllWords();
  }, [getAllWords]);

  return (
    <StyledStatistics>
      <Title />
      <StyledTitle>
        <Translate value="HomePage.statistics" />
      </StyledTitle>
      <Container>
        <WordsAmount>
          <Translate value="HomePage.wordsAmount" />: 3600
        </WordsAmount>
        {isLoading ? <Loader /> : <Chart data={data} />}
      </Container>
    </StyledStatistics>
  );
}

Statistics.propTypes = {
  data: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool,
  getAllWords: PropTypes.func.isRequired,
};

Statistics.defaultProps = {
  data: {},
  isLoading: false,
};

const mapStateToProps = (state) => {
  return {
    data: state.chartReducer.chartData,
    isLoading: state.dictionaryLoaderReducer.loading,
  };
};

export default connect(mapStateToProps, null)(Statistics);
