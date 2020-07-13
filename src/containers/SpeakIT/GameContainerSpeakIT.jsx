import React, { useState, useEffect } from 'react';
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
import Microphone from '../../utils/Microphone';
import ResultModal from '../Modal/ResultModal';
import { changeIDontKnowWords, changeScoreGame } from '../../redux/Games/action';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { LINK_FOR_IMAGE, GAME_MAX_PAGE, GAME_NAME } from '../../config';
import newRound from '../../utils/newRound';
import { changeSpeakItPage, changeSpeakItLevel } from '../../redux/ChangeRounds/action';
import { saveFullStatistic } from '../../redux/Statistic/action';
import GoToHomePageButton from '../Buttons/GoHomePageButton/GoHomePageButton';

const micro = new Microphone();

const GameContainerSpeakIT = (props) => {
  const {
    gameName,
    Level,
    Page,
    wordsCollection,
    listening,
    changeIDontKnowWordsInStore,
    isWordsLoading,
    changePage,
    changeLevel,
    maxPage,
    saveStatistic,
    gameMode,
  } = props;
  const gameWords = wordsCollection.map((el) => {
    return el.word.toLowerCase();
  });
  let IDontKnowWords = gameWords.slice();
  const [srcForImage, setSrcForImage] = useState(defaultImg);
  const [textForTextField, setTranslate] = useState(' ');
  const [isListening, setListening] = useState(listening);
  const [transcriptFromMicrophone, setTranscript] = useState('');
  const [isGameFinished, toggleGameMode] = useState(false);
  const [wrongWordsState, setWrongWords] = useState(IDontKnowWords);
  const [correctWordsState, setCorrectWords] = useState([]);

  useEffect(
    (speechResult) => {
      setSrcForImage(defaultImg);
      setTranslate(' ');
      setListening(false);
      toggleGameMode(false);
      setWrongWords([]);
      micro.stopMicrophone();
      micro.changeTranscript(speechResult);
    },
    [wordsCollection]
  );

  if (isWordsLoading) return <LoadingSpinner />;

  function addCorrectWords(wrongWords) {
    setCorrectWords(gameWords.filter((el) => !wrongWords.includes(el)));
  }

  const createGame = () => {
    IDontKnowWords = gameWords.slice();
    setWrongWords(IDontKnowWords);
    addCorrectWords(IDontKnowWords);
    setTranscript('');
    setSrcForImage(defaultImg);
  };

  const finishHandler = () => {
    if (!isListening) {
      toast.info(<Translate value="ModalWindows.didNotStartGame" />);
    } else {
      changeIDontKnowWordsInStore(wrongWordsState);
      toggleGameMode(true);
      micro.stopMicrophone();
      setListening(false);
      if (gameMode) saveStatistic({ Level, Page, wordsCollection, wrongWordsState, gameName });
    }
  };

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
          if (gameMode) saveStatistic({ Level, Page, wordsCollection, wrongWordsState, gameName });
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
    micro.changeTranscript(speechResult);
  };

  const newGame = () => {
    toggleGameMode(false);
    let obj;
    let newLevel;
    let newPage;
    if (gameMode) {
      obj = newRound(Level, Page, maxPage);
      newLevel = obj.newLevel;
      newPage = obj.newPage;
      if (newLevel !== Level) changeLevel(newLevel);
      if (newPage !== Page) changePage(newPage);
    } else {
      changeLevel(Level);
    }
    createGame();
    micro.changeTranscript(speechResult);
  };

  const speakHandler = () => {
    if (isListening) {
      micro.stopMicrophone();
    } else if (!micro.setTranscript) {
      createGame();
      micro.startMicrophone(speechResult);
    } else micro.startMicrophone();
    setListening(!isListening);
  };

  if (wrongWordsState.length > 0 && !gameWords.includes(wrongWordsState[0])) {
    createGame();
    micro.changeTranscript(speechResult);
    setListening(false);
  }

  const reset = () => {
    micro.stopMicrophone();
  };

  if (!isListening) {
    return (
      <>
        <div>
          <GoToHomePageButton reset={reset} />
        </div>
        {isGameFinished ? (
          <ResultModal
            audioForPlay="audio"
            showProperties={['word', 'transcription', 'wordTranslate']}
            restartGame={restartGame}
            newGame={newGame}
          />
        ) : (
          <StatusMenu
            page={Page}
            level={Level}
            maxPage={maxPage}
            updateLevel={changeLevel}
            updatePage={changePage}
            className="status-menu_speakIT"
          />
        )}

        <Image src={srcForImage} classNameContainer="image_speakIT" />
        <TextField text={textForTextField} className="text-field_speakIT" />
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
      </>
    );
  }

  return (
    <>
      <div>
        <GoToHomePageButton reset={reset} />
      </div>
      {isGameFinished ? (
        <ResultModal
          playAudio={playAudio}
          audioForPlay="audio"
          showProperties={['word', 'transcription', 'wordTranslate']}
          restartGame={restartGame}
          newGame={newGame}
        />
      ) : (
        <StatusMenu
          page={Page}
          level={Level}
          maxPage={maxPage}
          updateLevel={changeLevel}
          updatePage={changePage}
          className="status-menu_speakIT"
        />
      )}

      <Image src={srcForImage} classNameContainer="image_speakIT" />
      <RecognationTranscriptContainer
        transcript={transcriptFromMicrophone}
        className="text-field_speakIT"
      />
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
    </>
  );
};

GameContainerSpeakIT.propTypes = {
  Level: PropTypes.string,
  Page: PropTypes.string,
  listening: PropTypes.bool,
  changeIDontKnowWordsInStore: PropTypes.func,
  isWordsLoading: PropTypes.bool,
  changeLevel: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  maxPage: PropTypes.number,
  gameName: PropTypes.string,
  saveStatistic: PropTypes.func.isRequired,
  gameMode: PropTypes.bool.isRequired,
  wordsCollection: PropTypes.instanceOf(Array),
};

GameContainerSpeakIT.defaultProps = {
  Level: '',
  Page: '',
  listening: false,
  changeIDontKnowWordsInStore: () => {},
  isWordsLoading: false,
  gameName: GAME_NAME.speakIT,
  maxPage: GAME_MAX_PAGE,
  wordsCollection: [],
};

const mapStateToProps = (state) => {
  return {
    Level: state.changeRound.SpeakITLevel,
    Page: state.changeRound.SpeakITPage,
    gameScore: state.gamesReducer.gameScore,
    isWordsLoading: state.loader.loading,
    maxPage: state.maxPage.maxPage,
    userWords: state.userWords.words,
    maxWordsPerPage: state.userSettings.settings.SpeakITWordsPerPage,
    gameMode: state.gamesReducer.gameMode,
  };
};

const mapDispatchToProps = {
  changeScore: changeScoreGame,
  changeIDontKnowWordsInStore: changeIDontKnowWords,
  changeLevel: changeSpeakItLevel,
  changePage: changeSpeakItPage,
  saveStatistic: saveFullStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainerSpeakIT);
