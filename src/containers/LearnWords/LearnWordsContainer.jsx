import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWords from '../../components/LearnWords/LearnWords';
import { changeAppModeLearn } from '../../redux/AppMode/action';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { LINK_FOR_IMAGE } from '../../config';
import { correctCard, showNewCard } from '../../redux/LearnWords/actions';
import { checkStatusSession } from '../../redux/Auth/Login/actions';

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
  } = props;
  const [currentWord, setCurrentWord] = useState();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audio = new Audio();

  if (isWordsLoading) {
    return <LoadingSpinner />;
  }
  if (appMode !== 'Savannah' || wordsCollection.length < 1) {
    changeAppMode('Savannah');
    return <LoadingSpinner />;
  }

  if (!currentWord) {
    setCurrentWord(getWord(wordsCollection));
  }

  if (currentWord) {
    showNewCardHandler(currentWord);
    audio.setAttribute('src', `${LINK_FOR_IMAGE}${currentWord.audioExample}`);
    audio.load();
  }

  const onSubmit = async (formData) => {
    const answer = formData.word;
    const { word } = currentWord;
    if (answer === word) {
      if (!isAudioPlaying) {
        audio.play();
        setIsAudioPlaying(true);
        audio.onended = () => {
          setCurrentWord(getWord(wordsCollection));
          setIsAudioPlaying(false);
          correctCardHandler(true);
        };
      }
    }
  };

  return <LearnWords onSubmit={onSubmit} word={currentWord} isCorrect={isCorrect} />;
}

LearnWordCardContainer.propTypes = {
  changeAppMode: PropTypes.func.isRequired,
  wordsCollection: PropTypes.instanceOf(Array).isRequired,
  appMode: PropTypes.string.isRequired,
  isWordsLoading: PropTypes.bool,
  correctCardHandler: PropTypes.func.isRequired,
  showNewCardHandler: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool,
};

LearnWordCardContainer.defaultProps = {
  isWordsLoading: false,
  isCorrect: false,
};
const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    appMode: state.changeAppMode.appMode,
    isWordsLoading: state.loader.loading,
    isCorrect: state.correctLearnCard.isCorrect,
    isCheckStatusLoading: state.checkStatusloaderReducer.loading,
  };
};

const mapDispatchToProps = {
  changeAppMode: changeAppModeLearn,
  correctCardHandler: correctCard,
  showNewCardHandler: showNewCard,
  checkStatusSessionHandler: checkStatusSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordCardContainer);
