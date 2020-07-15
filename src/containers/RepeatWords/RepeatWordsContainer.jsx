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
  showCard,
} from '../../redux/RepeatWords/actions';
import updateOneWord from '../../services/updateOneWord';
import FinalScreenContainer from './FinalScreenContainer';

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
    showCardHandler,
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
  const isErrorAnswer = useRef(false);
  const [isInputActive, setIsInputActive] = useState(true);

  if (wordsCollection.length < 1 && !isGameStart.current) {
    return <FinalScreenContainer noWords />;
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

  const addWordToWordsCollection = (word) => {
    const custom = { ...word, isRepeat: true };
    saveRepeatWordsHandler([...wordsCollection, custom]);
    isErrorAnswer.current = false;
    wordsCount.current += 1;
  };

  const nextWord = () => {
    showResultHandler(false);
    if (isErrorAnswer.current) {
      addWordToWordsCollection(currentWord);
    }
    setIsShowButtons(false);
    resetSaveWord(null);
    currentWordIndex.current += 1;
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

  const customUpdateOneWord = (dufficulty, addTime, saveDifficult = false) => {
    let difficult = saveDifficult;
    if (saveDifficult && currentWord.userWord.optional.difficult) {
      difficult = true;
    }
    const config = {
      difficulty: dufficulty,
      optional: {
        deleted: false,
        difficult,
        time: new Date().valueOf(),
        nextRepeat: new Date().valueOf() + addTime,
        repeats: currentWord.userWord.optional.repeats + 1,
      },
    };
    if (!currentWord.isRepeat) showCardHandler();
    // eslint-disable-next-line no-underscore-dangle
    if (currentWord) {
      updateOneWord(currentWord._id, config, user);
    }
    nextWord();
  };

  const onSubmit = async (formData) => {
    if (formData.buttonType === 'form_enter' && !isInputActive) return undefined;
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
        console.log(1);
        console.log('onSubmit -> formData', formData);
        customUpdateOneWord('simply', SIMPLY);
        break;
      case 'medium':
        customUpdateOneWord('medium', MEDIUM);
        break;
      case 'difficult':
        customUpdateOneWord('difficult', DIFFICULT, true);
        break;
      case 'hard':
        customUpdateOneWord('hard', HARD, true);
        break;
      case 'repeat':
        customUpdateOneWord(currentWord.userWord.difficulty, 0);
        addWordToWordsCollection(currentWord);
        break;
      default:
        if (!answer) break;

        showResultHandler(true);
        if (answer.toLowerCase() === word.toLowerCase()) {
          audiosDuration.current = audios.reduce((acc, val) => acc + val.duration, 0);
          isErrorAnswer.current = false;
          setIsTranslationShow(true);
          setIsInputActive(false);
          if (!isSoundPlay || !audios[0]) {
            setIsShowButtons(true);
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
        } else {
          isErrorAnswer.current = true;
        }
        correctCardHandler(true);
    }
    return undefined;
  };
  return isFinalScreen ? (
    <FinalScreenContainer wordsCount={wordsCount.current} />
  ) : (
    <RepeatWords
      isTranslationShow={isTranslationShow}
      isRightAnswerShow={isRightAnswerShow}
      isInputActive={isInputActive}
      settings={settings}
      onSubmit={onSubmit}
      word={currentWord}
      isCorrect={isCorrect}
      showButtons={isShowButtons}
      answer={answerToForm}
      wordsCount={wordsCount.current}
      currentWordIndex={currentWordIndex.current}
      audiosDuration={audiosDuration.current}
    />
  );
}

RepeatWordCardContainer.propTypes = {
  correctCardHandler: PropTypes.func.isRequired,
  resetSaveWord: PropTypes.func.isRequired,
  showCardHandler: PropTypes.func.isRequired,
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
  showCardHandler: showCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepeatWordCardContainer);
