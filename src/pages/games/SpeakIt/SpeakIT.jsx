import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Translate } from 'react-redux-i18n';
import defaultImg from '../../../assets/img/blank.jpg';
import Image from '../../../components/UI/Image/Image';
import TextField from '../../../components/UI/TextField/TextField';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
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
import { LINK_FOR_IMAGE, GAME_MAX_PAGE, GAME_NAME } from '../../../config';
import newRound from '../../../utils/newRound';
import { changeSpeakItPage, changeSpeakItLevel } from '../../../redux/ChangeRounds/action';
import createGameEndData from '../../../utils/createGameEndData';
import { saveFullStatistic } from '../../../redux/Statistic/action';
import createStatisticForGames from '../../../utils/createStatisticForGames';

const addScore = 100;

const SpeakIT = (props) => {
  const {
    gameName,
    Level,
    Page,
    wordsCollection,
    listening,
    microphone,
    speakITScore,
    changeScore,
    changeIDontKnowWordsInStore,
    switchAppMode,
    isWordsLoading,
    currentAppMode,
    changePage,
    changeLevel,
    maxPage,
    Statistic,
    saveStatistic,
    statusCheckLoader,
    checkStatus,
  } = props;
  let newScore = speakITScore;
  const gameWords = wordsCollection.map((el) => {
    return el.word.toLowerCase();
  });
  const [srcForImage, setSrcForImage] = useState(defaultImg);
  const [textForTextField, setTranslate] = useState('');
  const [isListening, setListening] = useState(listening);
  const [transcriptFromMicrophone, setTranscript] = useState('');
  const [isGameFinished, toggleGameMode] = useState(false);
  const [wrongWordsState, setWrongWords] = useState([]);
  let IDontKnowWords = gameWords.slice();

  if (statusCheckLoader) return <LoadingSpinner />;
  if (isWordsLoading) return <LoadingSpinner />;
  if (currentAppMode !== gameName) {
    checkStatus();
    switchAppMode(gameName);
    return <LoadingSpinner />;
  }
  if (wrongWordsState.length === 0) setWrongWords(gameWords);
  const newScoreHandler = () => {
    changeScore(newScore);
  };

  const createGame = () => {
    IDontKnowWords = gameWords.slice();
    setWrongWords(IDontKnowWords);
    setTranscript('');
    newScore = 0;
    newScoreHandler();
    setSrcForImage(defaultImg);
  };

  const speechResult = (transcriptResult) => {
    setTranscript(transcriptResult);
    if (gameWords.includes(transcriptResult)) {
      const word = wordsCollection.find((item) => item.word.toLowerCase() === transcriptResult);
      setSrcForImage(`${LINK_FOR_IMAGE}${word.image}`);
      if (IDontKnowWords.includes(transcriptResult)) {
        IDontKnowWords = IDontKnowWords.filter((item) => item !== transcriptResult);
        setWrongWords(IDontKnowWords);
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
    const { newLevel, newPage } = newRound(Level, Page, maxPage);
    if (newLevel !== Level) changeLevel(newLevel);
    if (newPage !== Page) changePage(newPage);
    setWrongWords([]);
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
    if (!isListening) {
      toast.info(<Translate value="ModalWindows.didNotStartGame" />);
    } else {
      changeIDontKnowWordsInStore(wrongWordsState);
      toggleGameMode(true);
      microphone.stopMicrophone();
      setListening(false);
      const newStatistic = createGameEndData(
        Level,
        Page,
        wordsCollection,
        Statistic,
        wrongWordsState,
        gameName
      );
      saveStatistic(newStatistic);
    }
  };

  const showStatisticHandler = () => {
    const roundsStatistic = createStatisticForGames(Statistic, gameName);
  };

  if (!isListening) {
    return (
      <div className="speak-it_container">
        <GoToHomePageButton />
        {isGameFinished ? (
          <ResultModal
            audioForPlay="audio"
            showProperties={['word', 'transcription', 'wordTranslate']}
            restartGame={restartGame}
            newGame={newGame}
            showStatisticHandler={showStatisticHandler}
          />
        ) : null}
        <Image src={srcForImage} />
        <StatusMenu
          page={Page}
          level={Level}
          maxPage={maxPage}
          updateLevel={changeLevel}
          updatePage={changePage}
        />
        <TextField text={textForTextField} />
        <ScoreContainerSpeakIT />
        <CardsContainerSpeakIT
          cardHandler={cardHandler}
          wordsCollection={wordsCollection}
          wrongWords={wrongWordsState}
        />
        <ButtonsContainerSpeakIT
          restartHandler={restartHandler}
          speakHandler={speakHandler}
          finishHandler={finishHandler}
          showStatisticHandler={showStatisticHandler}
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
      <StatusMenu
        page={Page}
        level={Level}
        maxPage={maxPage}
        updateLevel={changeLevel}
        updatePage={changePage}
      />
      <RecognationTranscriptContainer transcript={transcriptFromMicrophone} />
      <ScoreContainerSpeakIT />
      <CardsContainerSpeakIT wordsCollection={wordsCollection} wrongWords={wrongWordsState} />
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
  listening: PropTypes.bool,
  wordsCollection: PropTypes.instanceOf(Array),
  microphone: PropTypes.instanceOf(Microphone),
  changeScore: PropTypes.func,
  changeIDontKnowWordsInStore: PropTypes.func,
  switchAppMode: PropTypes.func.isRequired,
  isWordsLoading: PropTypes.bool,
  currentAppMode: PropTypes.string.isRequired,
  changeLevel: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  maxPage: PropTypes.number,
  gameName: PropTypes.string,
  Statistic: PropTypes.instanceOf(Object).isRequired,
  saveStatistic: PropTypes.func.isRequired,
  statusCheckLoader: PropTypes.bool,
  checkStatus: PropTypes.func.isRequired,
};

SpeakIT.defaultProps = {
  Level: '',
  Page: '',
  speakITScore: 0,
  listening: false,
  wordsCollection: [],
  microphone: new Microphone(),
  changeScore: () => {},
  changeIDontKnowWordsInStore: () => {},
  isWordsLoading: false,
  gameName: GAME_NAME.speakIT,
  maxPage: GAME_MAX_PAGE,
  statusCheckLoader: false,
};

const mapStateToProps = (state) => {
  return {
    Level: state.changeRound.SpeakITLevel,
    Page: state.changeRound.SpeakITPage,
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    gameScore: state.gamesReducer.gameScore,
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
    maxPage: state.maxPage.maxPage.count,
    Statistic: state.changeStatistic.statistic,
    statusCheckLoader: state.checkStatusloaderReducer.loading,
  };
};

const mapDispatchToProps = {
  changeScore: changeScoreGame,
  changeIDontKnowWordsInStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
  changeLevel: changeSpeakItLevel,
  changePage: changeSpeakItPage,
  saveStatistic: saveFullStatistic,
  checkStatus: checkStatusSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeakIT);
