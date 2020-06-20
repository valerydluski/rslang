import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from '../../../components/UI/Image/Image';
import TextField from '../../../components/UI/TextField/TextField';
import CardsContainerSpeakIT from '../../../containers/SpeakIT/CardsContainerSpeakIT';
import ButtonsContainerSpeakIT from '../../../containers/SpeakIT/ButtonsContainerSpeakIt';
import RecognationTranscriptContainer from '../../../containers/SpeakIT/RecognationTranscriptContainer';
import Microphone from '../../../utils/Microphone';

const link = 'https://raw.githubusercontent.com/valerydluski/rslang-data/master/';

const SpeakIT = (props) => {
  const { Level, Page, wordsCollection, imageSrc, translate, gameMode, transcript } = props;
  const [srcForImage, setSrcForImage] = useState(imageSrc);
  const [textForTextField, setTranslate] = useState(translate);
  const [isGame, setGameMode] = useState(gameMode);
  const [transcriptFromMicrophone, setTranscript] = useState(transcript);
  const gameWords = wordsCollection.map((el) => {
    return el.word.toLowerCase();
  });
  const [unspokenWords, setUnspokenWords] = useState(gameWords);

  const createGame = (arr) => {
    setUnspokenWords(arr);
  };

  const speechResult = (transcriptResult) => {
    setTranscript(transcriptResult);
    if (gameWords.includes(transcriptResult)) {
      const word = wordsCollection.find((item) => item.word.toLowerCase() === transcriptResult);
      setSrcForImage(`${link}${word.image}`);
      if (unspokenWords.includes(transcriptResult)) {
        const arr = gameWords.filter((item) => item !== transcriptResult);
        setUnspokenWords(arr);
        document.getElementById(transcriptResult).classList.add('spoken-word');
      }
    }
  };

  const microphone = new Microphone(speechResult);
  const audioSpeakIt = new Audio();

  const playAudio = (src) => {
    audioSpeakIt.setAttribute('src', `${link}${src}`);
    audioSpeakIt.load();
    audioSpeakIt.play();
  };

  const cardHandler = (obj) => {
    const url = `${link}${obj.image}`;
    setSrcForImage(url);
    setTranslate(obj.wordTranslate);
    playAudio(obj.audio);
  };

  const restartHandler = () => {
    console.log('restart');
  };

  const speakHandler = () => {
    if (isGame) {
      setGameMode(false);
      createGame(gameWords);
      microphone.stopMicrophone();
    } else {
      setGameMode(true);
      createGame([]);
      microphone.startMicrophone();
    }
    setSrcForImage('https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg');
  };

  const finishHandler = () => {
    console.log('finish');
  };

  if (!isGame) {
    return (
      <div className="speak-it_container">
        <Image src={srcForImage} />
        <TextField text={textForTextField} />
        <CardsContainerSpeakIT cardHandler={cardHandler} wordsCollection={wordsCollection} />
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
  wordsCollection: PropTypes.instanceOf(Array),
};

SpeakIT.defaultProps = {
  Level: '',
  Page: '',
  imageSrc: 'https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg',
  translate: '',
  gameMode: false,
  transcript: '',
  wordsCollection: [],
};

const mapStateToProps = (state) => {
  return {
    Level: state.roundChange.speakITLevel,
    Page: state.roundChange.speakITPage,
    wordsCollection: state.changeWordsCollection.wordsCollection,
  };
};

export default connect(mapStateToProps, null)(SpeakIT);
