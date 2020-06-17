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
  margin-top: 20px;
  cursor: pointer;
`;

const WordAndTranscriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`;

const WordCardSpeakIT = (props) => {
  const { obj, wordCardHandler } = props;
  const { word, transcription, image, audio, wordTranslate } = obj;

  const dataForHandler = {
    image,
    audio,
    wordTranslate,
  };
  const cardHandler = () => {
    wordCardHandler(dataForHandler);
  };

  return (
    <WordCardSpeakITStyled
      image={image}
      audio={audio}
      wordTranslate={wordTranslate}
      onClick={cardHandler}
    >
      <AudioIcon />
      <WordAndTranscriptionContainer>
        <Word key={word} word={word} />
        <Transcription key={`transcription${word}`} transcription={transcription} />
      </WordAndTranscriptionContainer>
    </WordCardSpeakITStyled>
  );
};

WordCardSpeakIT.propTypes = {
  obj: PropTypes.shape({
    word: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
    audioMeaning: PropTypes.string,
    audioExample: PropTypes.string,
    textMeaning: PropTypes.string,
    textExample: PropTypes.string,
    transcription: PropTypes.string,
    wordTranslate: PropTypes.string,
    textMeaningTranslate: PropTypes.string,
    textExampleTranslate: PropTypes.string,
    id: PropTypes.number,
  }),
  wordCardHandler: PropTypes.func,
};

WordCardSpeakIT.defaultProps = {
  obj: {},
  wordCardHandler: () => {},
};

export default WordCardSpeakIT;
