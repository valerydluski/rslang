import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MicrophoneIcon from '../components/UI/Icon/Microphone';
import TextField from '../components/UI/TextField/TextField';

const RecognationTranscriptContainerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  height: 54px;
  width: 100%;
`;

const RecognationTranscriptContainer = (props) => {
  const { transcript } = props;
  return (
    <RecognationTranscriptContainerStyled>
      <MicrophoneIcon />
      <TextField text={transcript} />
    </RecognationTranscriptContainerStyled>
  );
};

RecognationTranscriptContainer.propTypes = {
  transcript: PropTypes.string,
};

RecognationTranscriptContainer.defaultProps = {
  transcript: '',
};

export default RecognationTranscriptContainer;
