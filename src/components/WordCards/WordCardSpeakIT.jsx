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

  &.spoken-word {
    box-shadow: 2px 5px 16px 0px #0b325e, -1px 6px 25px 14px rgba(101, 80, 222, 0.46);
  }
`;

const WordAndTranscriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`;

const WordCardSpeakIT = (props) => {
  const { obj, wordCardHandler, id, className } = props;
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
      id={id}
      className={className}
    >
      <AudioIcon />
      <WordAndTranscriptionContainer>
        <Word key={word.toLowerCase()} word={word.toLowerCase()} />
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
    id: PropTypes.string,
  }),
  wordCardHandler: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

WordCardSpeakIT.defaultProps = {
  obj: {},
  wordCardHandler: () => {},
  id: '',
  className: '',
};

export default WordCardSpeakIT;
