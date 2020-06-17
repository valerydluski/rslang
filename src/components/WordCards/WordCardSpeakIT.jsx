import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AudioIcon from '../UI/Icon/AudioIcon';
import Word from '../UI/TextField/Word';
import Transcription from '../UI/TextField/Transcription';

const WordCardSpeakITStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  padding-left: 40px;
  font-size: 24px;
  line-height: 1.4;
  min-width: 200px;
  min-height: 70px;
  margin: 10px;
`;

const WordAndTranscriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`;

const WordCardSpeakIT = (props) => {
  const { word } = props;
  return (
    <WordCardSpeakITStyled>
      <AudioIcon />
      <WordAndTranscriptionContainer>
        <Word key={word.word} word={word.word} />
        <Transcription key={`transcription${word.word}`} transcription={word.transcription} />
      </WordAndTranscriptionContainer>
    </WordCardSpeakITStyled>
  );
};

WordCardSpeakIT.propTypes = {
  word: PropTypes.objectOf.isRequired,
};

export default WordCardSpeakIT;
