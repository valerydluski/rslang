import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from '../../../components/UI/Image/Image';
import TextField from '../../../components/UI/TextField/TextField';
import CardsContainerSpeakIT from '../../../containers/CardsContainerSpeakIT';
import ButtonsContainerSpeakIT from '../../../containers/ButtonsContainerSpeakIt';
import RecognationTranscriptContainer from '../../../containers/RecognationTranscriptContainer';
import Microphone from '../../../utils/Microphone';

const SpeakIT = (props) => {
  const { Level, Page, imageSrc, translate, gameMode, transcript } = props;
  const [srcForImage, setSrcForImage] = useState(imageSrc);
  const [textForTextField, setTranslate] = useState(translate);
  const [isGame, setGameMode] = useState(gameMode);
  const [transcriptFromMicrophone, setTranscript] = useState(transcript);

  const microphone = new Microphone(setTranscript);
  const audioSpeakIt = new Audio();

  const playAudio = (src) => {
    const link = 'https://raw.githubusercontent.com/valerydluski/rslang-data/master/';
    audioSpeakIt.setAttribute('src', `${link}${src}`);
    audioSpeakIt.load();
    audioSpeakIt.play();
  };

  const cardHandler = (obj) => {
    const link = `https://raw.githubusercontent.com/valerydluski/rslang-data/master/${obj.image}`;
    setSrcForImage(link);
    setTranslate(obj.wordTranslate);
    playAudio(obj.audio);
  };

  const restartHandler = () => {
    console.log('restart');
  };

  const speakHandler = () => {
    if (isGame) setGameMode(false);
    else {
      setGameMode(true);
      microphone.startMicrophone(setTranscript);
    }
    setSrcForImage(
      'https://raw.githubusercontent.com/valerydluski/Images/ca230ba9ba73d437f3b80fe90d55f87aebfa7df0/defaultImage.svg'
    );
  };

  const finishHandler = () => {
    console.log('finish');
  };

  if (!isGame) {
    return (
      <div className="speak-it_container">
        <Image src={srcForImage} />
        <TextField text={textForTextField} />
        <CardsContainerSpeakIT cardHandler={cardHandler} />
        <ButtonsContainerSpeakIT
          restartHandler={restartHandler}
          speakHandler={speakHandler}
          finishHandler={finishHandler}
        />
      </div>
    );
  }

  return (
    <div className="speak-it_container">
      <Image src={srcForImage} />
      <RecognationTranscriptContainer transcript={transcriptFromMicrophone} />
      <CardsContainerSpeakIT />
      <ButtonsContainerSpeakIT
        restartHandler={restartHandler}
        speakHandler={speakHandler}
        finishHandler={finishHandler}
      />
    </div>
  );
};

SpeakIT.propTypes = {
  Level: PropTypes.string,
  Page: PropTypes.string,
  imageSrc: PropTypes.string,
  translate: PropTypes.string,
  gameMode: PropTypes.bool,
  transcript: PropTypes.string,
};

SpeakIT.defaultProps = {
  Level: '',
  Page: '',
  imageSrc:
    'https://raw.githubusercontent.com/valerydluski/Images/ca230ba9ba73d437f3b80fe90d55f87aebfa7df0/defaultImage.svg',
  translate: '',
  gameMode: false,
  transcript: '',
};

const mapStateToProps = (state) => {
  return {
    Level: state.roundChange.speakITLevel,
    Page: state.roundChange.speakITPage,
  };
};

export default connect(mapStateToProps, null)(SpeakIT);
