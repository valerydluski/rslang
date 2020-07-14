import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWords from '../../components/LearnWords/LearnWords';
import { LINK_FOR_AUDIO } from '../../config';
import {
  correctCard,
  showNewCard,
  saveWordToState,
  showResult,
} from '../../redux/LearnWords/actions';
import updateOneWord from '../../services/updateOneWord';
import FinalScreen from '../../components/LearnWords/FinalScreen';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function getWord(arr, i) {
  const w = arr[i];
  if (w.textExample instanceof Array) return w;
  w.textExample = w.textExample.split(/<b>\w+<\/b>/);
  return w;
}

function LearnWordCardContainer(props) {
  const {
    correctCardHandler,
    isCorrect,
    showNewCardHandler,
    settings,
    user,
    resetSaveWord,
    wordsCollection,
    showResultHandler,
    loadingWord,
  } = props;
  const { isAudioTranslate, isAudioTextMeaning, isAudioTextExample } = settings.settings;
  const [currentWord, setCurrentWord] = useState();
  const [isTranslationShow, setIsTranslationShow] = useState(false);
  const [isSoundPlay, setIsSoundPlay] = useState(true);
  const [isRightAnswerShow, setIsRightAnswerShow] = useState(false);
  const [showLoader, isShowLoader] = useState(false);
  const needNewWord = useRef(true);
  const [audios, setAudios] = useState([]);
  const [answerToForm, setAnswerToForm] = useState('');
  const isGameStart = useRef(false);
  const firstAnswer = useRef(true);
  const wordsCount = useRef(wordsCollection.length);
  const rightAnswer = useRef(0);
  const newWordCount = useRef(0);
  const currentWordIndex = useRef(0);
  const audiosDuration = useRef(-1);
  const longestSeries = useRef(0);
  const rightSeries = useRef(0);
  const isFinalScreen = currentWordIndex.current === wordsCount.current;
  const [isInputActive, setIsInputActive] = useState(true);
  const [audioIsPlaying, setAudioIsPlaing] = useState(false);

  useEffect(() => {
    if (loadingWord) {
      isShowLoader(true);
    } else {
      isShowLoader(false);
    }
  }, [loadingWord]);

  if (showLoader) {
    return <LoadingSpinner />;
  }

  if (wordsCollection.length < 1 && !isGameStart.current) {
    return <FinalScreen noWords />;
  }

  let isAudiosPlay;
  let audiosLinks;

  if (!currentWord && !isFinalScreen) {
    setCurrentWord(getWord(wordsCollection, currentWordIndex.current));
  }

  if (currentWord && !isCorrect && !isRightAnswerShow && needNewWord.current && !loadingWord) {
    if (currentWord.isNew) newWordCount.current += 1;
    isGameStart.current = true;
    showNewCardHandler(currentWord);
    const { audio, audioExample, audioMeaning } = currentWord;
    isAudiosPlay = [isAudioTranslate, isAudioTextMeaning, isAudioTextExample];
    audiosLinks = [audio, audioExample, audioMeaning];
    const audiosArr = isAudiosPlay
      .filter((bool) => bool === true)
      .map((bool, i) => new Audio(`${LINK_FOR_AUDIO}${audiosLinks[i]}`));
    setAudios(audiosArr);
    needNewWord.current = false;
  }

  const nextWord = () => {
    resetSaveWord(null);
    currentWordIndex.current += 1;
    firstAnswer.current = true;
    showResultHandler(false);
    setIsTranslationShow(false);
    setIsRightAnswerShow(false);
    audiosDuration.current = -1;
    needNewWord.current = true;
    if (currentWordIndex.current < wordsCount.current) {
      setCurrentWord(getWord(wordsCollection, currentWordIndex.current));
    } else {
      setCurrentWord(null);
    }
    setIsInputActive(true);
  };

  const updateWord = (config) => {
    updateOneWord(currentWord.id, config, user);
    nextWord();
  };

  const onSubmit = async (formData) => {
    if (formData.buttonType === 'form_enter' && !isInputActive) return undefined;
    const { buttonType } = formData;
    setAnswerToForm(formData.word);
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
            time: new Date().valueOf(),
            deleted: true,
            difficult: false,
            nextRepeat: new Date().valueOf(),
            repeats: 1,
          },
        };
        updateWord(config);
        break;
      case 'hard':
        config = {
          difficulty: 'hard',
          optional: {
            time: new Date().valueOf(),
            deleted: false,
            difficult: true,
            nextRepeat: new Date().valueOf(),
            repeats: 1,
          },
        };
        updateWord(config);
        break;
      case 'unknown':
        correctCardHandler(true);
        showResultHandler(true);
        setIsInputActive(false);
        break;
      case 'next':
        correctCardHandler(true);
        nextWord();
        break;
      default:
        if (!answer) break;
        showResultHandler(true);

        if (answer.toLowerCase() === word.toLowerCase()) {
          setIsInputActive(false);
          if (firstAnswer.current) {
            rightSeries.current += 1;
            rightAnswer.current += 1;
          }
          setIsTranslationShow(true);

          if (!isSoundPlay || !audios[0]) {
            setAudioIsPlaing(false);
          } else {
            audiosDuration.current = audios.reduce((acc, val) => acc + val.duration, 0);
            setAudioIsPlaing(true);
            audios[0].play();
            for (let i = 0; i < audios.length; i += 1) {
              if (audios[i + 1]) {
                audios[i].onended = () => {
                  audios[i + 1].play();
                };
              } else {
                audios[i].onended = setAudioIsPlaing(false);
              }
            }
          }
        } else {
          firstAnswer.current = false;
          if (longestSeries.current < rightSeries.current) {
            longestSeries.current = rightSeries.current;
            rightSeries.current = 0;
          }
        }
        correctCardHandler(true);
    }
    return undefined;
  };

  return isFinalScreen ? (
    <FinalScreen
      wordsCount={wordsCount.current}
      newWordCount={newWordCount.current}
      rightAnswer={rightAnswer.current}
      longestSeries={
        longestSeries.current < rightAnswer.current ? rightAnswer.current : longestSeries.current
      }
    />
  ) : (
    <LearnWords
      isTranslationShow={isTranslationShow}
      isRightAnswerShow={isRightAnswerShow}
      settings={settings}
      onSubmit={onSubmit}
      word={currentWord}
      isCorrect={isCorrect}
      answer={answerToForm}
      isInputActive={isInputActive}
      wordsCount={wordsCount.current}
      currentWordIndex={currentWordIndex.current}
      audiosDuration={audiosDuration.current}
      audioIsPlaying={audioIsPlaying}
    />
  );
}

LearnWordCardContainer.propTypes = {
  correctCardHandler: PropTypes.func.isRequired,
  showNewCardHandler: PropTypes.func.isRequired,
  resetSaveWord: PropTypes.func.isRequired,
  wordsCollection: PropTypes.instanceOf(Array).isRequired,
  isCorrect: PropTypes.bool,
  loadingWord: PropTypes.bool,
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
  showResultHandler: PropTypes.func.isRequired,
};

LearnWordCardContainer.defaultProps = {
  isCorrect: false,
  loadingWord: false,
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
    isCorrect: state.correctLearnCard.isCorrect,
    userWords: state.userWords.words,
    settings: state.userSettings,
    user: state.login,
    wordsCollection: state.newLearnCardShow.wordsCollection,
    loadingWord: state.newLearnCardShow.loadingWord,
  };
};

const mapDispatchToProps = {
  correctCardHandler: correctCard,
  showNewCardHandler: showNewCard,
  resetSaveWord: saveWordToState,
  showResultHandler: showResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordCardContainer);
