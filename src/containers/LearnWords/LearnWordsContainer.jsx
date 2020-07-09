import React, { useState, useRef } from 'react';
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

function getWord(arr, i) {
  const w = arr[i];
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
  } = props;
  const { isAudioTranslate, isAudioTextMeaning, isAudioTextExample } = settings.settings;
  const [currentWord, setCurrentWord] = useState();
  const [isTranslationShow, setIsTranslationShow] = useState(false);
  const [isSoundPlay, setIsSoundPlay] = useState(true);
  const [isRightAnswerShow, setIsRightAnswerShow] = useState(false);
  const [needNewWord, setNeedNewWord] = useState(true);
  const [audios, setAudios] = useState([]);
  const [answerToForm, setAnswerToForm] = useState('');
  const [isGameStart, setIsGameStart] = useState(false);
  const firstAnswer = useRef(true);
  const wordsCount = useRef(wordsCollection.length);
  const rightAnswer = useRef(0);
  const newWordCount = useRef(0);
  const currentWordIndex = useRef(0);
  const isFinalScreen = currentWordIndex.current === wordsCount.current;

  if (wordsCollection.length < 1 && !isGameStart) {
    return <FinalScreen noWords />;
  }

  let isAudiosPlay;
  let audiosLinks;

  if (!currentWord && !isFinalScreen) {
    setCurrentWord(getWord(wordsCollection, currentWordIndex.current));
  }

  if (currentWord && !isCorrect && !isRightAnswerShow && needNewWord) {
    if (currentWord.isNew) newWordCount.current += 1;
    setIsGameStart(true);
    showNewCardHandler(currentWord);
    const { audio, audioExample, audioMeaning } = currentWord;
    isAudiosPlay = [isAudioTranslate, isAudioTextMeaning, isAudioTextExample];
    audiosLinks = [audio, audioExample, audioMeaning];
    const audiosArr = isAudiosPlay
      .filter((bool) => bool === true)
      .map((bool, i) => new Audio(`${LINK_FOR_AUDIO}${audiosLinks[i]}`));
    setAudios(audiosArr);
    setNeedNewWord(false);
  }

  const nextWord = () => {
    resetSaveWord(null);
    currentWordIndex.current += 1;
    firstAnswer.current = true;
    if (currentWordIndex.current < wordsCount.current) {
      setCurrentWord(getWord(wordsCollection, currentWordIndex.current));
    } else {
      setCurrentWord(null);
    }
    showResultHandler(false);
    setIsTranslationShow(false);
    setIsRightAnswerShow(false);
    setNeedNewWord(true);
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
        setIsRightAnswerShow(true);
        break;
      default:
        if (!answer) break;
        showResultHandler(true);
        if (answer.toLowerCase() === word.toLowerCase()) {
          if (firstAnswer.current) rightAnswer.current += 1;
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
        } else {
          firstAnswer.current = false;
        }
        correctCardHandler(true);
    }
  };
  return isFinalScreen ? (
    <FinalScreen
      wordsCount={wordsCount.current}
      newWordCount={newWordCount.current}
      rightAnswer={rightAnswer.current}
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
      wordsCount={wordsCount.current}
      currentWordIndex={currentWordIndex.current}
    />
  );
}

LearnWordCardContainer.propTypes = {
  correctCardHandler: PropTypes.func.isRequired,
  showNewCardHandler: PropTypes.func.isRequired,
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

LearnWordCardContainer.defaultProps = {
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
    isCorrect: state.correctLearnCard.isCorrect,
    userWords: state.userWords.words,
    settings: state.userSettings,
    user: state.login,
    wordsCollection: state.newLearnCardShow.wordsCollection,
  };
};

const mapDispatchToProps = {
  correctCardHandler: correctCard,
  showNewCardHandler: showNewCard,
  resetSaveWord: saveWordToState,
  showResultHandler: showResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordCardContainer);
