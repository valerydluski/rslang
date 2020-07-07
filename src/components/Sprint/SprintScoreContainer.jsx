import React from 'react';
import PropTypes from 'prop-types';
import SprintScoreContainerStyled from './Styled/SprintScoreContainerStyled';
import SprintProgressMarkersContainerStyled from './Styled/SprintProgressMarkersContainerStyled';
import SprintScoreStyled from './Styled/SprintScoreStyled';
import {
  EmptyProgressMarkerStyled,
  FilledProgressMarkerStyled,
} from './Styled/SprintProgressMarkersStyled';

const SprintScoreContainer = ({ score, correctAnswers }) => {
  return (
    <SprintScoreContainerStyled>
      <SprintScoreStyled>{score}</SprintScoreStyled>
      <SprintProgressMarkersContainerStyled>
        {correctAnswers > 0 ? <FilledProgressMarkerStyled /> : <EmptyProgressMarkerStyled />}
        {correctAnswers > 1 ? <FilledProgressMarkerStyled /> : <EmptyProgressMarkerStyled />}
        {correctAnswers > 2 ? <FilledProgressMarkerStyled /> : <EmptyProgressMarkerStyled />}
      </SprintProgressMarkersContainerStyled>
    </SprintScoreContainerStyled>
  );
};

SprintScoreContainer.propTypes = {
  score: PropTypes.number,
  correctAnswers: PropTypes.number,
};

SprintScoreContainer.defaultProps = {
  score: 0,
  correctAnswers: 0,
};

export default SprintScoreContainer;
