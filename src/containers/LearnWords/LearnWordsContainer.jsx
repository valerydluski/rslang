import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWords from '../../components/LearnWords/LearnWords';
import changeAppModeAction from '../../redux/AppMode/action';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { LINK_FOR_IMAGE } from '../../config';
import { correctCard, showNewCard } from '../../redux/LearnWords/actions';
import { checkStatusSession } from '../../redux/Auth/Login/actions';
import updateOneWord from '../../services/updateOneWord';

function getWord(arr) {
  const w = arr.shift();
  w.textExample = w.textExample.split(/<b>\w+<\/b>/);
  return w;
}

function LearnWordCardContainer(props) {
  const {
    changeAppMode,
    wordsCollection,
    appMode,
    isWordsLoading,
    correctCardHandler,
    isCorrect,
    showNewCardHandler,
    isDataLoading,
    settings,
    user,
  } = props;
  const { howToLearnWords } = settings;
  const [currentWord, setCurrentWord] = useState();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isTranslationShow, setIsTranslationShow] = useState(false);
  const [isSoundPlay, setIsSoundPlay] = useState(true);
  const [isRightAnswerShow, setIsRightAnswerShow] = useState(false);
  const audio = new Audio();

  if (appMode !== 'Savannah') {
    changeAppMode('Savannah');
    return null;
  }

  if (isWordsLoading || isDataLoading || wordsCollection.length < 1) {
    return <LoadingSpinner />;
  }

  if (!currentWord) {
    setCurrentWord(getWord(wordsCollection));
  }

  if (currentWord) {
    showNewCardHandler(currentWord);
    console.log('LearnWordCardContainer -> currentWord', currentWord);
  }

  const nextWord = () => {
    setCurrentWord(getWord(wordsCollection));
    setIsAudioPlaying(false);
    correctCardHandler(true);
    setIsTranslationShow(false);
    setIsRightAnswerShow(false);
  };

  const onSubmit = (formData) => {
    console.log('onSubmit -> formData', formData);
    const { buttonType } = formData;
    const answer = formData.word;
    const { word } = currentWord;
    let config = {};

    switch (buttonType) {
      case 'sound':
        setIsSoundPlay(!isSoundPlay);
        break;
      case 'deleted':
        config = {
          difficulty: 'deleted',
          optional: {
            time: new Date(),
          },
        };
        updateOneWord(currentWord.id, config, user);
        console.log('onSubmit -> user', user);
        setCurrentWord(getWord(wordsCollection));
        break;
      case 'difficult':
        config = {
          difficulty: 'difficult',
          optional: {
            time: new Date(),
          },
        };
        updateOneWord(currentWord.id, config, user);
        setCurrentWord(getWord(wordsCollection));
        break;
      case 'unknown':
        setIsRightAnswerShow(true);
        break;
      default:
        if (answer === word) {
          audio.setAttribute('src', `${LINK_FOR_IMAGE}${currentWord.audio}`);
          audio.load();
          setIsTranslationShow(true);
          if (!isSoundPlay) {
            nextWord();
          }
          if (!isAudioPlaying && isSoundPlay) {
            audio.play();
            setIsAudioPlaying(true);
            audio.onended = () => {
              audio.setAttribute('src', `${LINK_FOR_IMAGE}${currentWord.audioExample}`);
              audio.play();
              audio.onended = nextWord;
            };
          }
        }
    }
  };

  return (
    <LearnWords
      isTranslationShow={isTranslationShow}
      isRightAnswerShow={isRightAnswerShow}
      settings={settings}
      onSubmit={onSubmit}
      word={currentWord}
      isCorrect={isCorrect}
    />
  );
}

LearnWordCardContainer.propTypes = {
  changeAppMode: PropTypes.func.isRequired,
  wordsCollection: PropTypes.instanceOf(Array).isRequired,
  appMode: PropTypes.string.isRequired,
  isWordsLoading: PropTypes.bool,
  isDataLoading: PropTypes.bool,
  correctCardHandler: PropTypes.func.isRequired,
  showNewCardHandler: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool,
  settings: PropTypes.shape({
    deleteButton: PropTypes.bool,
    addDificultWordsButton: PropTypes.bool,
    howToLearnWords: PropTypes.string,
  }),
  user: PropTypes.shape().isRequired,
};

LearnWordCardContainer.defaultProps = {
  isWordsLoading: false,
  isDataLoading: false,
  isCorrect: false,
  settings: PropTypes.shape({
    deleteButton: true,
    addDificultWordsButton: true,
    howToLearnWords: 'allWords',
  }),
};
const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    appMode: state.changeAppMode.appMode,
    isWordsLoading: state.loader.loading,
    isDataLoading: state.loadDataLoaderReducer.loading,
    isCorrect: state.correctLearnCard.isCorrect,
    isCheckStatusLoading: state.checkStatusloaderReducer.loading,
    settings: state.userSettings,
    user: state.login,
  };
};

const mapDispatchToProps = {
  changeAppMode: changeAppModeAction,
  correctCardHandler: correctCard,
  showNewCardHandler: showNewCard,
  checkStatusSessionHandler: checkStatusSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordCardContainer);
