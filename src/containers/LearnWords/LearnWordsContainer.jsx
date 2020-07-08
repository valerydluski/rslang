import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWords from '../../components/LearnWords/LearnWords';
import { LINK_FOR_AUDIO } from '../../config';
import { correctCard, showNewCard, saveWordToState } from '../../redux/LearnWords/actions';
import updateOneWord from '../../services/updateOneWord';

function getWord(arr) {
  const w = arr.shift();
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
  } = props;
  const { isAudioTranslate, isAudioTextMeaning, isAudioTextExample } = settings.settings;
  const [currentWord, setCurrentWord] = useState();
  const [isTranslationShow, setIsTranslationShow] = useState(false);
  const [isSoundPlay, setIsSoundPlay] = useState(true);
  const [isRightAnswerShow, setIsRightAnswerShow] = useState(false);
  const [needNewWord, setNeedNewWord] = useState(true);
  const [audios, setAudios] = useState([]);
  const [answerToForm, setAnswerToForm] = useState('');
  const [isResultShow, setIsResultShow] = useState(false);

  let isAudiosPlay;
  let audiosLinks;

  if (!currentWord) {
    setCurrentWord(getWord(wordsCollection));
  }

  if (currentWord && !isCorrect && !isRightAnswerShow && needNewWord) {
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
    if (wordsCollection.length > 1) {
      setCurrentWord(getWord(wordsCollection));
    } else {
      setCurrentWord(null);
    }
    setIsResultShow(false);
    setIsTranslationShow(false);
    setIsRightAnswerShow(false);
    setNeedNewWord(true);
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
        setIsResultShow(true);
        if (answer.toLowerCase() === word.toLowerCase()) {
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
  return (
    <LearnWords
      isTranslationShow={isTranslationShow}
      isRightAnswerShow={isRightAnswerShow}
      settings={settings}
      onSubmit={onSubmit}
      word={currentWord}
      isCorrect={isCorrect}
      answer={answerToForm}
      isResultShow={isResultShow}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordCardContainer);
