import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from '../../../components/UI/Image/Image';
import TextField from '../../../components/UI/TextField/TextField';
import CardsContainerSpeakIT from '../../../containers/SpeakIT/CardsContainerSpeakIT';
import ButtonsContainerSpeakIT from '../../../components/SpeakIT/ButtonsContainerSpeakIt';
import RecognationTranscriptContainer from '../../../components/SpeakIT/RecognationTranscriptContainer';
import ScoreContainerSpeakIT from '../../../containers/SpeakIT/ScoreContainerSpeakIT';
import Microphone from '../../../utils/Microphone';
import ResultModal from '../../../containers/Modal/ResultModal';
import { changeIDontKnowWords, changeScoreGame } from '../../../redux/Games/action';

const link = 'https://raw.githubusercontent.com/valerydluski/rslang-data/master/';
const addScore = 100;

const SpeakIT = (props) => {
  const {
    Level,
    Page,
    wordsCollection,
    imageSrc,
    translate,
    listening,
    transcript,
    microphone,
    speakITScore,
    changeScore,
    changeIDontKnowWordsInStore,
  } = props;
  let newScore = speakITScore;
  const gameWords = wordsCollection.map((el) => {
    return el.word.toLowerCase();
  });

  const [srcForImage, setSrcForImage] = useState(imageSrc);
  const [textForTextField, setTranslate] = useState(translate);
  const [isListening, setListening] = useState(listening);
  const [transcriptFromMicrophone, setTranscript] = useState(transcript);
  let IDontKnowWords = gameWords.slice();

  const newScoreHandler = () => {
    changeScore(newScore);
  };

  const createGame = () => {
    IDontKnowWords = gameWords.slice();
    changeIDontKnowWordsInStore(IDontKnowWords);
    const spokenWords = document.querySelectorAll('.spoken-word');
    spokenWords.forEach((element) => {
      element.classList.remove('spoken-word');
    });
    setTranscript('');
    newScore = 0;
    newScoreHandler();
    setSrcForImage('https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg');
  };

  const speechResult = (transcriptResult) => {
    setTranscript(transcriptResult);
    if (gameWords.includes(transcriptResult)) {
      const word = wordsCollection.find((item) => item.word.toLowerCase() === transcriptResult);
      setSrcForImage(`${link}${word.image}`);
      if (IDontKnowWords.includes(transcriptResult)) {
        IDontKnowWords = IDontKnowWords.filter((item) => item !== transcriptResult);
        changeIDontKnowWordsInStore(IDontKnowWords);
        document.getElementById(transcriptResult).classList.add('spoken-word');
        newScore += addScore;
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
    if (isListening) {
      createGame();
      microphone.changeTranscript(speechResult);
    }
  };

  const speakHandler = () => {
    if (isListening) {
      microphone.stopMicrophone();
    } else {
      microphone.startMicrophone(speechResult);
    }
    setListening(!isListening);
    createGame();
  };

  const finishHandler = () => {
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('hidden');
  };

  if (!isListening) {
    return (
      <div className="speak-it_container">
        <ResultModal
          playAudio={playAudio}
          audioForPlay="audio"
          showProperties={['word', 'transcription', 'wordTranslate']}
        />
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
      <ResultModal
        playAudio={playAudio}
        audioForPlay="audio"
        showProperties={['word', 'transcription', 'wordTranslate']}
      />
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
  listening: PropTypes.bool,
  transcript: PropTypes.string,
  wordsCollection: PropTypes.instanceOf(Array),
  microphone: PropTypes.instanceOf(Microphone),
  changeScore: PropTypes.func,
  changeIDontKnowWordsInStore: PropTypes.func,
};

SpeakIT.defaultProps = {
  Level: '',
  Page: '',
  speakITScore: 0,
  imageSrc: 'https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg',
  translate: '',
  listening: false,
  transcript: '',
  wordsCollection: [],
  microphone: new Microphone(),
  changeScore: () => {},
  changeIDontKnowWordsInStore: () => {},
};

const mapStateToProps = (state) => {
  return {
    Level: state.gamesReducer.gameLevel,
    Page: state.gamesReducer.gamePage,
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    gameScore: state.gamesReducer.gameScore,
  };
};

const mapDispatchToProps = {
  changeScore: changeScoreGame,
  changeIDontKnowWordsInStore: changeIDontKnowWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeakIT);
