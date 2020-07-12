import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DEVICE } from '../../../config';

const TranscriptionStyled = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 17.5009px;
  line-height: 21px;
  color: #b2b2b2;

  @media ${DEVICE.laptopL} {
    font-size: 18px;
  }
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
