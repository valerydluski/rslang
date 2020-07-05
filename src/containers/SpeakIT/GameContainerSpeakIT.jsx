import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Translate } from 'react-redux-i18n';
import defaultImg from '../../assets/img/blank.jpg';
import Image from '../../components/UI/Image/Image';
import TextField from '../../components/UI/TextField/TextField';
import StatusMenu from '../../components/StatusMenu/StatusMenu';
import CardsContainerSpeakIT from './CardsContainerSpeakIT';
import ButtonsContainerSpeakIT from '../../components/SpeakIT/ButtonsContainerSpeakIt';
import RecognationTranscriptContainer from '../../components/SpeakIT/RecognationTranscriptContainer';
import ScoreContainerSpeakIT from './ScoreContainerSpeakIT';
import Microphone from '../../utils/Microphone';
import ResultModal from '../Modal/ResultModal';
import { changeIDontKnowWords, changeScoreGame } from '../../redux/Games/action';
import { changeAppMode } from '../../redux/AppMode/action';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { LINK_FOR_IMAGE, GAME_MAX_PAGE, GAME_NAME } from '../../config';
import newRound from '../../utils/newRound';
import { changeSpeakItPage, changeSpeakItLevel } from '../../redux/ChangeRounds/action';
import { saveFullStatistic } from '../../redux/Statistic/action';
import SpeakITContainerStyled from './Styled/StyledSpeakIT';

const micro = new Microphone();

const GameContainerSpeakIT = (props) => {
  const {
    gameName,
    Level,
    Page,
    wordsCollection,
    listening,
    changeIDontKnowWordsInStore,
    switchAppMode,
    isWordsLoading,
    currentAppMode,
    changePage,
    changeLevel,
    maxPage,
    saveStatistic,
  } = props;
  const gameWords = wordsCollection.map((el) => {
    return el.word.toLowerCase();
  });
  const [srcForImage, setSrcForImage] = useState(defaultImg);
  const [textForTextField, setTranslate] = useState(' ');
  const [isListening, setListening] = useState(listening);
  const [transcriptFromMicrophone, setTranscript] = useState('');
  const [isGameFinished, toggleGameMode] = useState(false);
  const [wrongWordsState, setWrongWords] = useState([]);
  const [correctWordsState, setCorrectWords] = useState([]);
  let IDontKnowWords = gameWords.slice();
  if (isWordsLoading) return <LoadingSpinner />;
  if (currentAppMode !== gameName) {
    switchAppMode(gameName);
    return <LoadingSpinner />;
  }

  const createGame = () => {
    IDontKnowWords = gameWords.slice();
    setWrongWords(IDontKnowWords);
    setCorrectWords([]);
    setTranscript('');
    setSrcForImage(defaultImg);
    console.log('createGame -> setSrcForImage');
  };

  const finishHandler = () => {
    if (!isListening) {
      toast.info(<Translate value="ModalWindows.didNotStartGame" />);
    } else {
      changeIDontKnowWordsInStore(wrongWordsState);
      toggleGameMode(true);
      micro.stopMicrophone();
      setListening(false);
      saveStatistic({ Level, Page, wordsCollection, wrongWordsState, gameName });
    }
  };

  function addCorrectWords(wrongWords) {
    setCorrectWords(gameWords.filter((el) => !wrongWords.includes(el)));
  }

  const speechResult = (transcriptResult) => {
    setTranscript(transcriptResult);
    if (gameWords.includes(transcriptResult)) {
      const word = wordsCollection.find((item) => item.word.toLowerCase() === transcriptResult);
      setSrcForImage(`${LINK_FOR_IMAGE}${word.image}`);
      if (IDontKnowWords.includes(transcriptResult)) {
        IDontKnowWords = IDontKnowWords.filter((item) => item !== transcriptResult);
        setWrongWords(IDontKnowWords);
        addCorrectWords(IDontKnowWords);
        if (IDontKnowWords.length === 0) {
          micro.stopMicrophone();
          toggleGameMode(true);
          saveStatistic({ Level, Page, wordsCollection, IDontKnowWords, gameName });
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
      micro.changeTranscript(speechResult);
    }
  };

  const restartGame = () => {
    toggleGameMode(false);
    createGame();
  };

  const newGame = () => {
    toggleGameMode(false);
    const { newLevel, newPage } = newRound(Level, Page, maxPage);
    if (newLevel !== Level) changeLevel(newLevel);
    if (newPage !== Page) changePage(newPage);
  };

  const speakHandler = () => {
    if (isListening) {
      micro.stopMicrophone();
    } else if (!micro.setTranscript) {
      micro.startMicrophone(speechResult);
    } else micro.startMicrophone();
    setListening(!isListening);
  };

  if (wrongWordsState.length > 0 && !gameWords.includes(wrongWordsState[0])) {
    createGame();
    micro.changeTranscript(speechResult);
    setListening(false);
  }

  if (!isListening) {
    return (
      <SpeakITContainerStyled>
        {isGameFinished ? (
          <ResultModal
            audioForPlay="audio"
            showProperties={['word', 'transcription', 'wordTranslate']}
            restartGame={restartGame}
            newGame={newGame}
          />
        ) : null}
        <StatusMenu
          page={Page}
          level={Level}
          maxPage={maxPage}
          updateLevel={changeLevel}
          updatePage={changePage}
          className="status-menu_speakIT"
        />
        <Image src={srcForImage} classNameContainer="image_speakIT" />
        <TextField text={textForTextField} className="text-field_speakIT" />
        <ScoreContainerSpeakIT />
        <CardsContainerSpeakIT
          cardHandler={cardHandler}
          wordsCollection={wordsCollection}
          correctWords={correctWordsState}
        />
        <ButtonsContainerSpeakIT
          restartHandler={restartHandler}
          speakHandler={speakHandler}
          finishHandler={finishHandler}
        />
      </SpeakITContainerStyled>
    );
  }

  return (
    <SpeakITContainerStyled>
      {isGameFinished ? (
        <ResultModal
          playAudio={playAudio}
          audioForPlay="audio"
          showProperties={['word', 'transcription', 'wordTranslate']}
          restartGame={restartGame}
          newGame={newGame}
        />
      ) : null}
      <StatusMenu
        page={Page}
        level={Level}
        maxPage={maxPage}
        updateLevel={changeLevel}
        updatePage={changePage}
        className="status-menu_speakIT"
      />
      <Image src={srcForImage} classNameContainer="image_speakIT" />
      <RecognationTranscriptContainer
        transcript={transcriptFromMicrophone}
        className="text-field_speakIT"
      />
      <ScoreContainerSpeakIT />
      <CardsContainerSpeakIT
        wordsCollection={wordsCollection}
        correctWords={correctWordsState}
        hiddenIcon={isListening}
      />
      <ButtonsContainerSpeakIT
        restartHandler={restartHandler}
        speakHandler={speakHandler}
        finishHandler={finishHandler}
        speakActive={isListening}
      />
    </SpeakITContainerStyled>
  );
};

GameContainerSpeakIT.propTypes = {
  Level: PropTypes.string,
  Page: PropTypes.string,
  listening: PropTypes.bool,
  wordsCollection: PropTypes.instanceOf(Array),
  changeIDontKnowWordsInStore: PropTypes.func,
  switchAppMode: PropTypes.func.isRequired,
  isWordsLoading: PropTypes.bool,
  currentAppMode: PropTypes.string.isRequired,
  changeLevel: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  maxPage: PropTypes.number,
  gameName: PropTypes.string,
  saveStatistic: PropTypes.func.isRequired,
};

GameContainerSpeakIT.defaultProps = {
  Level: '',
  Page: '',
  listening: false,
  wordsCollection: [],
  changeIDontKnowWordsInStore: () => {},
  isWordsLoading: false,
  gameName: GAME_NAME.speakIT,
  maxPage: GAME_MAX_PAGE,
};

const mapStateToProps = (state) => {
  return {
    Level: state.changeRound.SpeakITLevel,
    Page: state.changeRound.SpeakITPage,
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    gameScore: state.gamesReducer.gameScore,
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
    maxPage: state.maxPage.maxPage,
  };
};

const mapDispatchToProps = {
  changeScore: changeScoreGame,
  changeIDontKnowWordsInStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
  changeLevel: changeSpeakItLevel,
  changePage: changeSpeakItPage,
  saveStatistic: saveFullStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainerSpeakIT);
