import React from 'react';
import { Translate } from 'react-redux-i18n';
import StyledTitle from './Styled/StyledTitle';
import StyledStatistics from './Styled/StyledStatistics';
import Container from './Styled/Container';
import WordsAmount from './Styled/WordsAmount';
import Chart from '../../../../containers/Homepage/Statistics/Chart';

export default function Statistics() {
  return (
    <StyledStatistics>
      <StyledTitle>
        <Translate value="HomePage.statistics" />
      </StyledTitle>
      <Container>
        <WordsAmount>
          <Translate value="HomePage.wordsAmount" />: 3600
        </WordsAmount>
        <Chart />
      </Container>
    </StyledStatistics>
  );
}
