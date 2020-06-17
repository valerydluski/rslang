import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TranscriptionStyled = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 17.5009px;
  line-height: 21px;
  color: #c4c4c4;
`;

const Transcription = (props) => {
  const { transcription } = props;
  return <TranscriptionStyled>{transcription}</TranscriptionStyled>;
};

Transcription.propTypes = {
  transcription: PropTypes.string,
};

Transcription.defaultProps = {
  transcription: '',
};

export default Transcription;
