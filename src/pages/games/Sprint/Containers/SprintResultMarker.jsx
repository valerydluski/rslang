import React from 'react';
import PropTypes from 'prop-types';
import { CorrectMarkerStyled, WrongMarkerStyled } from '../Styled/ResultMarkersStyled';

const SprintResultMarker = ({ isAnswerCorrect }) => {
  return isAnswerCorrect ? <CorrectMarkerStyled /> : <WrongMarkerStyled />;
};

SprintResultMarker.propTypes = {
  isAnswerCorrect: PropTypes.bool.isRequired,
};

export default SprintResultMarker;
