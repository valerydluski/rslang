import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScoreContainerSpeakITStyled from './Styled/ScoreContainerSpeakITStyled';
import ScoreField from '../../components/UI/TextField/ScoreField';

const ScoreContainerSpeakIT = (props) => {
  const { score } = props;
  return (
    <ScoreContainerSpeakITStyled>
      <ScoreField score={score} />
    </ScoreContainerSpeakITStyled>
  );
};

ScoreContainerSpeakIT.propTypes = {
  score: PropTypes.number,
};

ScoreContainerSpeakIT.defaultProps = {
  score: 0,
};

const mapStateToProps = (state) => {
  return {
    score: state.changeScoreSpeakIT.speakITScore,
  };
};

export default connect(mapStateToProps, null)(ScoreContainerSpeakIT);
