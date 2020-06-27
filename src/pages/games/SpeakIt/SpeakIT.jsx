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
import changeAppMode from '../../../redux/AppMode/action';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import { checkStatusSession } from '../../../redux/Auth/Login/actions';
import { LINK_FOR_IMAGE } from '../../../config';
import newRound from '../../../utils/newRound';
import { changeSpeakItPage, changeSpeakItLevel } from '../../../redux/ChangeRounds/action';

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
    switchAppMode,
    isWordsLoading,
    currentAppMode,
    changePage,
    changeLevel,
  } = props;
  let newScore = speakITScore;
  const gameWords = wordsCollection.map((el) => {
    return el.word.toLowerCase();
  });

  const [srcForImage, setSrcForImage] = useState(imageSrc);
  const [textForTextField, setTranslate] = useState(translate);
  const [isListening, setListening] = useState(listening);
  const [transcriptFromMicrophone, setTranscript] = useState(transcript);
  const [isGameFinished, toggleGameMode] = useState(false);
  let IDontKnowWords = gameWords.slice();

  checkStatusSession();
  if (isWordsLoading) return <LoadingSpinner />;
  if (currentAppMode !== 'SpeakIT') {
    switchAppMode('SpeakIT');
  }

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
      setSrcForImage(`${LINK_FOR_IMAGE}${word.image}`);
      if (IDontKnowWords.includes(transcriptResult)) {
        IDontKnowWords = IDontKnowWords.filter((item) => item !== transcriptResult);
        changeIDontKnowWordsInStore(IDontKnowWords);
        document.getElementById(transcriptResult).classList.add('spoken-word');
        newScore += addScore;
        newScoreHandler();
        if (IDontKnowWords.length === 0) {
          microphone.stopMicrophone();
          toggleGameMode(true);
        }
      }
    }
  };

  const audioSpeakIt = new Audio();

  const playAudio = (src) => {
    audioSpeakIt.setAttribute('src', `${LINK_FOR_IMAGE}${src}`);
    audioSpeakIt.load();
    audioSpeakIt.play();
  };

  const cardHandler = (obj) => {
    const url = `${LINK_FOR_IMAGE}${obj.image}`;
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

  const restartGame = () => {
    toggleGameMode(false);
  };

  const newGame = () => {
    toggleGameMode(false);
    const { newLevel, newPage } = newRound(Level, Page);
    if (newLevel !== Level) changeLevel(newLevel);
    if (newPage !== Page) changePage(newPage);
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
    toggleGameMode(true);
  };

  if (!isListening) {
    return (
      <div className="speak-it_container">
        <GoToHomePageButton />
        {isGameFinished ? (
          <ResultModal
            playAudio={playAudio}
            audioForPlay="audio"
            showProperties={['word', 'transcription', 'wordTranslate']}
            restartGame={restartGame}
            newGame={newGame}
          />
        ) : null}
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
      <GoToHomePageButton />
      {isGameFinished ? (
        <ResultModal
          playAudio={playAudio}
          audioForPlay="audio"
          showProperties={['word', 'transcription', 'wordTranslate']}
          restartGame={restartGame}
          newGame={newGame}
        />
      ) : null}
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
  switchAppMode: PropTypes.func.isRequired,
  isWordsLoading: PropTypes.bool,
  currentAppMode: PropTypes.string.isRequired,
  changeLevel: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
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
  isWordsLoading: false,
};

const mapStateToProps = (state) => {
  return {
    Level: state.changeRound.SpeakITLevel,
    Page: state.changeRound.SpeakITPage,
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    gameScore: state.gamesReducer.gameScore,
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
  };
};

const mapDispatchToProps = {
  changeScore: changeScoreGame,
  changeIDontKnowWordsInStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
  changeLevel: changeSpeakItLevel,
  changePage: changeSpeakItPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeakIT);
