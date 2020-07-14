import React, { useEffect, useState, useCallback } from 'react';
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
import ChartContainer from './Styled/ChartContainer';
import { TOTAL_WORDS } from '../../../../config';
import getScreenWidth from '../../../../utils/getScreenWidth';
import Image from '../../../UI/Image/Image';
import screenRotateIcon from '../../../../assets/img/rotate-screen.svg';

const breakpoints = [1440, 568];
const widths = [700, 480];
const heights = [500, 400];

function Statistics({ getAllWords, data, isLoading }) {
  useEffect(() => {
    getAllWords();
  }, [getAllWords]);

  const [isBreakpoint, changeBreakpoint] = useState(false);
  const [chartSize, changeChartSize] = useState([widths[0], heights[0]]);

  const onResize = useCallback(() => {
    const screenWidth = getScreenWidth();
    if (screenWidth < breakpoints[1]) {
      changeBreakpoint(true);
    } else {
      const index = breakpoints.findIndex((bp) => screenWidth > bp);
      changeBreakpoint(false);
      changeChartSize([widths[index], heights[index]]);
    }
  }, [changeBreakpoint, changeChartSize]);

  const onOrientationChange = useCallback(() => {
    const screenWidth = getScreenWidth();
    changeBreakpoint(screenWidth < breakpoints[1]);
  }, [changeBreakpoint]);

  useEffect(() => {
    const screenWidth = getScreenWidth();
    if (screenWidth < breakpoints[1]) {
      changeBreakpoint(true);
    } else {
      const index = breakpoints.findIndex((bp) => screenWidth > bp);
      changeChartSize([widths[index], heights[index]]);
    }
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onOrientationChange);
  }, [onResize, onOrientationChange]);

  return (
    <StyledStatistics>
      <Title />
      <StyledTitle>
        <Translate value="HomePage.statistics" />
      </StyledTitle>
      <Container>
        <WordsAmount>
          <Translate value="HomePage.wordsAmount" />: {TOTAL_WORDS}
        </WordsAmount>
        <ChartContainer>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {isBreakpoint ? (
                <Image src={screenRotateIcon} />
              ) : (
                <Chart data={data} width={chartSize[0]} height={chartSize[1]} padding={40} />
              )}
            </>
          )}
        </ChartContainer>
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
