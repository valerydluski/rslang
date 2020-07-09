import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepeatWords from '../../components/RepeatWords/RepeatWords';
import { LINK_FOR_AUDIO } from '../../config';
import { correctCard, saveWordToState, showResult } from '../../redux/RepeatWords/actions';
import updateOneWord from '../../services/updateOneWord';
import FinalScreen from '../../components/RepeatWords/FinalScreen';

function getWord(arr, i) {
  const w = arr[i];
  if (w.textExample instanceof Array) return w;
  w.textExample = w.textExample.split(/<b>\w+<\/b>/);
  return w;
}

function RepeatWordCardContainer(props) {
  const {
    correctCardHandler,
    isCorrect,
    settings,
    user,
    resetSaveWord,
    wordsCollection,
    showResultHandler,
  } = props;
  const { isAudioTranslate, isAudioTextMeaning, isAudioTextExample } = settings.settings;
  const [currentWord, setCurrentWord] = useState();
  const [isTranslationShow, setIsTranslationShow] = useState(false);
  const [isSoundPlay, setIsSoundPlay] = useState(true);
  const [isRightAnswerShow, setIsRightAnswerShow] = useState(false);
  const needNewWord = useRef(true);
  const [audios, setAudios] = useState([]);
  const [answerToForm, setAnswerToForm] = useState('');
  const isGameStart = useRef(false);
  const wordsCount = useRef(wordsCollection.length);
  const currentWordIndex = useRef(0);
  const audiosDuration = useRef(-1);
  const isFinalScreen = currentWordIndex.current === wordsCount.current;

  if (wordsCollection.length < 1 && !isGameStart.current) {
    return <FinalScreen noWords />;
  }

  let isAudiosPlay;
  let audiosLinks;

  if (!currentWord && !isFinalScreen) {
    setCurrentWord(getWord(wordsCollection, currentWordIndex.current));
  }

  if (currentWord && !isCorrect && !isRightAnswerShow && needNewWord.current) {
    isGameStart.current = true;
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
    return undefined;
  };

  const onSubmit = async (formData) => {
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
        showResultHandler(true);
        break;
      default:
        if (!answer) break;
        showResultHandler(true);
        if (answer.toLowerCase() === word.toLowerCase()) {
          audiosDuration.current = audios.reduce((acc, val) => acc + val.duration, 0);
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
        correctCardHandler(true);
    }
  };
  return isFinalScreen ? (
    <FinalScreen wordsCount={wordsCount.current} />
  ) : (
    <RepeatWords
      isTranslationShow={isTranslationShow}
      isRightAnswerShow={isRightAnswerShow}
      settings={settings}
      onSubmit={onSubmit}
      word={currentWord}
      isCorrect={isCorrect}
      answer={answerToForm}
      wordsCount={wordsCount.current + 1}
      currentWordIndex={currentWordIndex.current + 1}
      audiosDuration={audiosDuration.current}
    />
  );
}

RepeatWordCardContainer.propTypes = {
  correctCardHandler: PropTypes.func.isRequired,
  resetSaveWord: PropTypes.func.isRequired,
  wordsCollection: PropTypes.instanceOf(Array).isRequired,
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
  showResultHandler: PropTypes.func.isRequired,
};

RepeatWordCardContainer.defaultProps = {
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
    isCorrect: state.isCorrectRepeatReducer.isCorrect,
    wordsCollection: state.userWords.words[0].paginatedResults,
    settings: state.userSettings,
    user: state.login,
  };
};

const mapDispatchToProps = {
  correctCardHandler: correctCard,
  resetSaveWord: saveWordToState,
  showResultHandler: showResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepeatWordCardContainer);
