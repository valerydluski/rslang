import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepeatWords from '../../components/RepeatWords/RepeatWords';
import { LINK_FOR_AUDIO, REPEAT_TIMES } from '../../config';
import {
  correctCard,
  saveWordToState,
  showResult,
  saveRepeatWords,
} from '../../redux/RepeatWords/actions';
import updateOneWord from '../../services/updateOneWord';
import FinalScreen from '../../components/RepeatWords/FinalScreen';

function getWord(arr, i) {
  const w = arr[i];
  if (w.textExample instanceof Array) return w;
  w.textExample = w.textExample.split(/<b>\w+<\/b>/);
  return w;
}

const { EASY, SIMPLY, MEDIUM, DIFFICULT, HARD } = REPEAT_TIMES;

function RepeatWordCardContainer(props) {
  const {
    correctCardHandler,
    isCorrect,
    settings,
    user,
    resetSaveWord,
    wordsCollection,
    showResultHandler,
    saveRepeatWordsHandler,
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
  const [isShowButtons, setIsShowButtons] = useState(false);

  if (wordsCollection.length < 1 && !isGameStart.current) {
    return <FinalScreen noWords />;
  }

  let isAudiosPlay;
  let audiosLinks;

  if (!currentWord && !isFinalScreen) {
    setCurrentWord(getWord(wordsCollection, currentWordIndex.current));
  }

  if (currentWord && !isRightAnswerShow && needNewWord.current) {
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
    setIsShowButtons(false);
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
  };

  const customUpdateOneWord = (dufficulty, addTime) => {
    const config = {
      difficulty: dufficulty,
      optional: {
        deleted: false,
        difficult: false,
        time: new Date(),
        nextRepeat: new Date().valueOf() + addTime,
        repeats: currentWord.userWord.optional.repeats + 1,
      },
    };
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(currentWord._id, config, user);
    nextWord();
  };

  const onSubmit = async (formData) => {
    const { buttonType } = formData;
    setAnswerToForm(formData.word);
    const answer = formData.word;
    const { word } = currentWord;

    switch (buttonType) {
      case 'sound':
        setIsSoundPlay(!isSoundPlay);
        break;
      case 'easy':
        customUpdateOneWord('easy', EASY);
        break;
      case 'simply':
        customUpdateOneWord('simply', SIMPLY);
        break;
      case 'medium':
        customUpdateOneWord('medium', MEDIUM);
        break;
      case 'difficult':
        customUpdateOneWord('difficult', DIFFICULT);
        break;
      case 'hard':
        customUpdateOneWord('hard', HARD);
        break;
      case 'repeat':
        saveRepeatWordsHandler([...wordsCollection, currentWord]);
        wordsCount.current += 1;
        customUpdateOneWord(currentWord.userWord.difficulty, 0);
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
                audios[i].onended = () => {
                  setIsShowButtons(true);
                };
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
      showButtons={isShowButtons}
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
  saveRepeatWordsHandler: PropTypes.func.isRequired,
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
    wordsCollection: state.repeatWords.wordsCollection,
    settings: state.userSettings,
    user: state.login,
  };
};

const mapDispatchToProps = {
  correctCardHandler: correctCard,
  resetSaveWord: saveWordToState,
  showResultHandler: showResult,
  saveRepeatWordsHandler: saveRepeatWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepeatWordCardContainer);
