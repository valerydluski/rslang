import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWords from '../../components/LearnWords/LearnWords';
import changeAppModeAction from '../../redux/AppMode/action';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function getWord(arr) {
  const w = arr.shift();
  w.textExample = w.textExample.split(/<b>\w+<\/b>/);
  return w;
}

function LearnWordCardContainer(props) {
  const { changeAppMode, wordsCollection, appMode, isWordsLoading } = props;
  const [currentWord, setCurrentWord] = useState();
  if (isWordsLoading) return <LoadingSpinner />;
  if (appMode !== 'Savannah') {
    changeAppMode('Savannah');
    return <LoadingSpinner />;
  }

  if (!currentWord) {
    setCurrentWord(getWord(wordsCollection));
  }

  const onSubmit = async (formData) => {
    const answer = formData.word;
    const { word } = currentWord;
    if (answer === word) {
      setCurrentWord(getWord(wordsCollection));
    }
  };

  console.log('LearnWordCardContainer -> currentWord', currentWord);
  return <LearnWords onSubmit={onSubmit} word={currentWord} />;
}

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    appMode: state.changeAppMode.appMode,
    isWordsLoading: state.loader.loading,
  };
};

const mapDispatchToProps = {
  changeAppMode: changeAppModeAction,
};

LearnWordCardContainer.propTypes = {
  changeAppMode: PropTypes.func.isRequired,
  wordsCollection: PropTypes.instanceOf(Array).isRequired,
  appMode: PropTypes.string.isRequired,
  isWordsLoading: PropTypes.bool,
};

LearnWordCardContainer.defaultProps = {
  isWordsLoading: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordCardContainer);
