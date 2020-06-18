import React from 'react';
import styled from 'styled-components';
import audioIco from './audioIco.svg';

const AudioIconStyled = styled.img`
  position: absolute;
  top: 18px;
  left: 10px;
  width: 28px;
  height: 28px;
`;

const AudioIcon = () => {
  return <AudioIconStyled src={audioIco} />;
};

export default AudioIcon;
