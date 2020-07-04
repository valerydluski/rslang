import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWords from '../../components/LearnWords/LearnWords';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { LINK_FOR_AUDIO } from '../../config';
import {
  correctCard,
  showNewCard,
  nextNewCard,
  saveWordToState,
} from '../../redux/LearnWords/actions';
import { checkStatusSession } from '../../redux/Auth/Login/actions';
import updateOneWord from '../../services/updateOneWord';
import getRandomValuesFromArray from '../../utils/getRandomValuesFromArray';

function getWord(arr) {
  const w = arr.shift();
  w.textExample = w.textExample.split(/<b>\w+<\/b>/);
  return w;
}

function LearnWordCardContainer(props) {
  let wordsCollection;
  const {
    correctCardHandler,
    isCorrect,
    showNewCardHandler,
    isDataLoading,
    settings,
    user,
    userWords,
    isUserWordsLoading,
    nextNewCardHandler,
    nextCard,
    resetSaveWord,
  } = props;
  const {
    howToLearnWords,
    isAudioTranslate,
    isAudioTextMeaning,
    isAudioTextExample,
    cardsPerDay,
    wordsPerDay,
  } = settings.settings;
  const [currentWord, setCurrentWord] = useState();
  const [isTranslationShow, setIsTranslationShow] = useState(false);
  const [isSoundPlay, setIsSoundPlay] = useState(true);
  const [isRightAnswerShow, setIsRightAnswerShow] = useState(false);

  if (isDataLoading || isUserWordsLoading) {
    return <LoadingSpinner />;
  }
  const words = userWords[0].paginatedResults;
  switch (howToLearnWords) {
    case 'allWords':
      wordsCollection = getRandomValuesFromArray(words, cardsPerDay);
      break;
    case 'newWords':
      if (!nextCard) {
        nextNewCardHandler();
      }
      wordsCollection = [nextCard];
      break;
    case 'repeat':
      if (words.length < cardsPerDay) {
        wordsCollection = words;
        break;
      }
      wordsCollection = getRandomValuesFromArray(words, cardsPerDay);
      break;
    default:
      break;
  }

  if (!nextCard && howToLearnWords === 'newWords') {
    return null;
  }

  if (!currentWord) {
    setCurrentWord(getWord(wordsCollection));
  }

  let isAudiosPlay;
  let audiosLinks;
  let audios;

  if (currentWord && !isCorrect && !isRightAnswerShow) {
    showNewCardHandler(currentWord);
    const { audio, audioExample, audioMeaning } = currentWord;
    isAudiosPlay = [isAudioTranslate, isAudioTextMeaning, isAudioTextExample];
    audiosLinks = [audio, audioExample, audioMeaning];
    audios = isAudiosPlay
      .filter((bool) => bool === true)
      .map((bool, i) => new Audio(`${LINK_FOR_AUDIO}${audiosLinks[i]}`));
  }

  const nextWord = () => {
    correctCardHandler(true);
    resetSaveWord(null);
    if (wordsCollection.length > 1) {
      setCurrentWord(getWord(wordsCollection));
    } else {
      setCurrentWord(null);
    }
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
            difficult: false,
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
            delete: false,
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
  isUserWordsLoading: PropTypes.bool,
  isDataLoading: PropTypes.bool,
  correctCardHandler: PropTypes.func.isRequired,
  nextNewCardHandler: PropTypes.func.isRequired,
  showNewCardHandler: PropTypes.func.isRequired,
  resetSaveWord: PropTypes.func.isRequired,
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
  nextCard: PropTypes.shape(),
  userWords: PropTypes.instanceOf(Array).isRequired,
};

LearnWordCardContainer.defaultProps = {
  isDataLoading: false,
  nextCard: null,
  isCorrect: false,
  isUserWordsLoading: false,
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
    isDataLoading: state.loadDataLoaderReducer.loading,
    isCorrect: state.correctLearnCard.isCorrect,
    isCheckStatusLoading: state.checkStatusloaderReducer.loading,
    userWords: state.userWords.words,
    isUserWordsLoading: state.userWords.loading,
    settings: state.userSettings,
    user: state.login,
    nextCard: state.newLearnCardShow.nextCard,
  };
};

const mapDispatchToProps = {
  correctCardHandler: correctCard,
  showNewCardHandler: showNewCard,
  checkStatusSessionHandler: checkStatusSession,
  nextNewCardHandler: nextNewCard,
  resetSaveWord: saveWordToState,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordCardContainer);
