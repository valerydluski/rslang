import React from 'react';
import styled from 'styled-components';
import microphone from './microphone.svg';

const MicrophoneIconStyled = styled.img`
  width: 40px;
  height: 40px;
`;

const MicrophoneIcon = () => {
  return <MicrophoneIconStyled src={microphone} />;
};

export default MicrophoneIcon;
