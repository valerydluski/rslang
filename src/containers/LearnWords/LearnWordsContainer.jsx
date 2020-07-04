import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWords from '../../components/LearnWords/LearnWords';
import { changeAppModeLearn } from '../../redux/AppMode/action';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { LINK_FOR_AUDIO } from '../../config';
import { correctCard, showNewCard } from '../../redux/LearnWords/actions';
import { checkStatusSession } from '../../redux/Auth/Login/actions';
import updateOneWord from '../../services/updateOneWord';
import { changeLearnWordsPage } from '../../redux/ChangeRounds/action';
import getRandomValuesFromArray from '../../utils/getRandomValuesFromArray';

function getWord(arr) {
  const w = arr.shift();
  w.textExample = w.textExample.split(/<b>\w+<\/b>/);
  return w;
}

function LearnWordCardContainer(props) {
  const {
    changeAppMode,
    appMode,
    isWordsLoading,
    correctCardHandler,
    isCorrect,
    showNewCardHandler,
    isDataLoading,
    settings,
    user,
    changeLearnWordsPageHandler,
    userWords,
  } = props;
  const {
    howToLearnWords,
    isAudioTranslate,
    isAudioTextMeaning,
    isAudioTextExample,
    cardsPerDay,
    wordsPerDay,
  } = settings.settings;
  console.log('LearnWordCardContainer -> settings.settings;', settings.settings);
  const [currentWord, setCurrentWord] = useState();
  const [isTranslationShow, setIsTranslationShow] = useState(false);
  const [isSoundPlay, setIsSoundPlay] = useState(true);
  const [isRightAnswerShow, setIsRightAnswerShow] = useState(false);

  if (appMode !== 'LearnWords') {
    changeAppMode('LearnWords');
    changeLearnWordsPageHandler({
      level: 2,
      page: 3,
    });
  }

  let wordsCollection;

  if (isWordsLoading || isDataLoading) {
    return <LoadingSpinner />;
  }

  switch (howToLearnWords) {
    case 'allWords':
      if (cardsPerDay > wordsPerDay) {
        wordsCollection = getRandomValuesFromArray(userWords, cardsPerDay);
      }
    case 'newWords':
    case 'repeat':
      if (userWords.length < cardsPerDay) {
        wordsCollection = userWords;
        break;
      }
      wordsCollection = getRandomValuesFromArray(userWords, cardsPerDay);
      console.log('LearnWordCardContainer -> cardsPerDay', cardsPerDay);
      console.log('LearnWordCardContainer -> userWords', userWords);
      break;
    default:
      break;
  }

  console.log('LearnWordCardContainer -> wordsCollection', wordsCollection);

  if (!currentWord) {
    setCurrentWord(getWord(wordsCollection));
  }

  let isAudiosPlay;
  let audiosLinks;
  let audios;

  if (currentWord) {
    showNewCardHandler(currentWord);
    const { audio, audioExample, audioMeaning } = currentWord;
    isAudiosPlay = [isAudioTranslate, isAudioTextMeaning, isAudioTextExample];
    audiosLinks = [audio, audioExample, audioMeaning];
    audios = isAudiosPlay
      .filter((bool) => bool === true)
      .map((bool, i) => new Audio(`${LINK_FOR_AUDIO}${audiosLinks[i]}`));
  }

  const nextWord = () => {
    setCurrentWord(getWord(wordsCollection));
    correctCardHandler(true);
    setIsTranslationShow(false);
    setIsRightAnswerShow(false);
  };

  const onSubmit = async (formData) => {
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
          difficulty: 'new',
          optional: {
            deleted: true,
            time: new Date(),
          },
        };
        updateOneWord(currentWord.id, config, user);
        setCurrentWord(getWord(wordsCollection));
        break;
      case 'difficult':
        config = {
          difficulty: 'difficult',
          optional: {
            difficult: true,
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
          setIsTranslationShow(true);
          if (!isSoundPlay || !audios[0]) {
            nextWord();
          } else {
            audios[0].play();
            for (let i = 0; i < audios.length; i += 1) {
              if (audios[i + 1]) {
                audios[i].onended = () => {
                  audios[i + 1].play();
                };
              } else {
                audios[i].onended = nextWord;
              }
            }
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
  appMode: PropTypes.string.isRequired,
  isWordsLoading: PropTypes.bool,
  isDataLoading: PropTypes.bool,
  correctCardHandler: PropTypes.func.isRequired,
  showNewCardHandler: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool,
  settings: PropTypes.shape({
    settings: PropTypes.shape({
      deleteButton: PropTypes.bool,
      addDificultWordsButton: PropTypes.bool,
      howToLearnWords: PropTypes.string,
      isAudioTranslate: PropTypes.bool,
      isAudioTextMeaning: PropTypes.bool,
      isAudioTextExample: PropTypes.bool,
      cardsPerDay: PropTypes.number.isRequired,
      wordsPerDay: PropTypes.number.isRequired,
    }),
  }),
  user: PropTypes.shape().isRequired,
  changeLearnWordsPageHandler: PropTypes.func.isRequired,
  userWords: PropTypes.instanceOf(Array).isRequired,
};

LearnWordCardContainer.defaultProps = {
  isWordsLoading: false,
  isDataLoading: false,
  isCorrect: false,
  settings: PropTypes.shape({
    settings: PropTypes.shape({
      deleteButton: true,
      addDificultWordsButton: true,
      isAudioTranslate: true,
      isAudioTextMeaning: true,
      isAudioTextExample: true,
      howToLearnWords: 'allWords',
    }),
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
    userWords: state.userWords.words,
    settings: state.userSettings,
    user: state.login,
  };
};

const mapDispatchToProps = {
  changeAppMode: changeAppModeLearn,
  correctCardHandler: correctCard,
  showNewCardHandler: showNewCard,
  checkStatusSessionHandler: checkStatusSession,
  changeLearnWordsPageHandler: changeLearnWordsPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordCardContainer);
