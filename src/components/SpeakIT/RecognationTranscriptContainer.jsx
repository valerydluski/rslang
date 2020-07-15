import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MicrophoneIcon from '../UI/Icon/Microphone';
import TextField from '../UI/TextField/TextField';

const RecognationTranscriptContainerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  height: 54px;
  width: 100%;

  .& text-field_speakIT {
  }
`;

const RecognationTranscriptContainer = (props) => {
  const { transcript, className } = props;
  return (
    <RecognationTranscriptContainerStyled className={className}>
      <MicrophoneIcon />
      <TextField text={transcript} />
    </RecognationTranscriptContainerStyled>
  );
};

RecognationTranscriptContainer.propTypes = {
  transcript: PropTypes.string,
  className: PropTypes.string,
};

RecognationTranscriptContainer.defaultProps = {
  transcript: ' ',
  className: '',
};

export default RecognationTranscriptContainer;
