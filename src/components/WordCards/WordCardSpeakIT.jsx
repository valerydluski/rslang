import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AudioIcon from '../UI/Icon/AudioIcon';

const WordCardSpeakITStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  padding-left: 40px;
  font-size: 24px;
  line-height: 1.4;
  min-width: 200px;
  min-height: 70px;
  margin: 10px;
  border: 1px solid #766e99;
  border-radius: 20px;
  transition: 1s box-shadow;
  transform: translateZ(0);
  box-shadow: 0 0 1px transparent;
`;

const WordCardSpeakIT = (props) => {
  const { word } = props;
  return (
    <WordCardSpeakITStyled>
      <AudioIcon />
    </WordCardSpeakITStyled>
  );
};

WordCardSpeakIT.propTypes = {
  word: PropTypes.objectOf,
};

WordCardSpeakIT.defaultProps = {
  word: {},
};

export default WordCardSpeakIT;
