import React from 'react';
import styled from 'styled-components';
import textIco from './textIco.svg';

const TextIconStyled = styled.img`
  width: 20px;
  height: 20px;
`;

const TextIcon = () => {
  return <TextIconStyled src={textIco} />;
};

export default TextIcon;
