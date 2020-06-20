import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from '../../../components/UI/Image/Image';
import TextField from '../../../components/UI/TextField/TextField';
import CardsContainerSpeakIT from '../../../containers/SpeakIT/CardsContainerSpeakIT';
import ButtonsContainerSpeakIT from '../../../containers/SpeakIT/ButtonsContainerSpeakIt';
import RecognationTranscriptContainer from '../../../containers/SpeakIT/RecognationTranscriptContainer';
import ScoreContainerSpeakIT from '../../../containers/SpeakIT/ScoreContainerSpeakIT';
import Microphone from '../../../utils/Microphone';
import changeScoreSpeakIT from '../../../redux/SpeakIT/action';

const link = 'https://raw.githubusercontent.com/valerydluski/rslang-data/master/';

const SpeakIT = (props) => {
  const {
    Level,
    Page,
    wordsCollection,
    imageSrc,
    translate,
    gameMode,
    transcript,
    microphone,
    speakITScore,
    changeScore,
  } = props;
  let newScore = speakITScore;
  const [srcForImage, setSrcForImage] = useState(imageSrc);
  const [textForTextField, setTranslate] = useState(translate);
  const [isGame, setGameMode] = useState(gameMode);
  const [transcriptFromMicrophone, setTranscript] = useState(transcript);
  const gameWords = wordsCollection.map((el) => {
    return el.word.toLowerCase();
  });
  const [unspokenWords, setUnspokenWords] = useState(gameWords);

  const newScoreHandler = () => {
    changeScore(newScore);
  };

  const createGame = (arr) => {
    setUnspokenWords(arr);
    const spokenWords = document.querySelectorAll('.spoken-word');
    spokenWords.forEach((element) => {
      element.classList.remove('spoken-word');
    });
    setTranscript('');
    newScore = 0;
    newScoreHandler();
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
        newScore += 100;
        newScoreHandler();
      }
    }
  };

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
    createGame([]);
    microphone.stopMicrophone();
  };

  const speakHandler = () => {
    if (isGame) {
      setGameMode(false);
      createGame(gameWords);
      microphone.stopMicrophone();
    } else {
      setGameMode(true);
      createGame([]);
      microphone.startMicrophone(speechResult);
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
        <ScoreContainerSpeakIT />
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
      <ScoreContainerSpeakIT />
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
  speakITScore: PropTypes.number,
  imageSrc: PropTypes.string,
  translate: PropTypes.string,
  gameMode: PropTypes.bool,
  transcript: PropTypes.string,
  wordsCollection: PropTypes.instanceOf(Array),
  microphone: PropTypes.instanceOf(Microphone),
  changeScore: PropTypes.func,
};

SpeakIT.defaultProps = {
  Level: '',
  Page: '',
  speakITScore: 0,
  imageSrc: 'https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg',
  translate: '',
  gameMode: false,
  transcript: '',
  wordsCollection: [],
  microphone: new Microphone(),
  changeScore: () => {},
};

const mapStateToProps = (state) => {
  return {
    Level: state.roundChange.speakITLevel,
    Page: state.roundChange.speakITPage,
    wordsCollection: state.changeWordsCollection.wordsCollection,
    speakITScore: state.changeScoreSpeakIT.speakITScore,
  };
};

const mapDispatchToProps = {
  changeScore: changeScoreSpeakIT,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeakIT);
