import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Line } from 'rc-progress';
import StyledRoundButton from '../../components/UI/Button/Styled/StyledRoundButton';
import StyledButton from '../../components/UI/Button/Styled/StyledButton';
import { LINK_FOR_IMAGE } from '../../config';
import RepeatWordsInput from './RepeatWordsInput';
import Image from '../../components/UI/Image/Image';
import Transcription from '../../components/UI/TextField/Transcription';
import RepeatFormStyled from './Styled/RepeatFormStyled';
import RepeatCardsContainer, {
  TranslateStyled,
  TextExampleStyled,
  TextExampleTranslateStyled,
  TextMeaningStyled,
  TextMeaningTranslateStyled,
} from './Styled/RepeatCardsContainer';
import RepeatButtonsContainer from './Styled/RepeatButtonsContainer';

const LearnWordsForm = (props) => {
  const {
    handleSubmit,
    word,
    isCorrect,
    autocomplete,
    reset,
    settings,
    isTranslationShow,
    onSubmit,
    isRightAnswerShow,
    answer,
    isResultShow,
    wordsCount,
    currentWordIndex,
    audiosDuration,
  } = props;

  const {
    isTranslate,
    isTextMeaning,
    isTextExample,
    isTranscription,
    isImageAssociation,
    deleteButton,
    addDificultWordsButton,
  } = settings.settings;
  const {
    textExample,
    textExampleTranslate,
    textMeaning,
    image,
    wordTranslate,
    transcription,
    textMeaningTranslate,
  } = word;
  const [firstPart, secondPart] = textExample;

  useEffect(() => {
    if (isCorrect) {
      reset('wordLearn');
    }
  });

  const customHandleSubmit = (type) => {
    return () => {
      onSubmit({
        buttonType: type,
      });
    };
  };

  const textMeaningFormatted = textMeaning.replace(/<i>|<\/i>/g, ``);
  const wordRegExp = new RegExp(`${word.word}`, 'i');
  return (
    <RepeatFormStyled
      onSubmit={handleSubmit((values) =>
        onSubmit({
          ...values,
          buttonType: 'form',
        })
      )}
    >
      <RepeatCardsContainer>
        <StyledRoundButton
          onClick={customHandleSubmit('sound')}
          type="button"
          className="learn_sound-button"
        />
        {isTranslationShow && isTranslate && <TranslateStyled>{wordTranslate}</TranslateStyled>}
        {isImageAssociation && (
          <Image
            alt={word.word}
            src={`${LINK_FOR_IMAGE}${image}`}
            classNameContainer="image_learn"
          />
        )}
        <TextExampleStyled>
          {isTextExample && <p style={{ display: 'inline' }}>{firstPart}</p>}
          <Field
            name="word"
            key="word"
            type="text"
            placeholder={isRightAnswerShow ? word.word : ''}
            size="5"
            component={RepeatWordsInput}
            autoFocus
            autocomplete={autocomplete}
            word={word.word}
            answer={answer}
            isShowResult={isResultShow}
            audiosDuration={audiosDuration}
          />
          {isTextExample && <p style={{ display: 'inline' }}>{secondPart}</p>}
        </TextExampleStyled>
        {isTranslationShow && isTranslate && (
          <TextExampleTranslateStyled>{textExampleTranslate}</TextExampleTranslateStyled>
        )}
        {isTranscription && <Transcription>{transcription}</Transcription>}
        {isTextMeaning && isTranslationShow ? (
          <TextMeaningStyled>{textMeaningFormatted}</TextMeaningStyled>
        ) : (
          <TextMeaningStyled>
            {textMeaningFormatted.replace(wordRegExp, '*'.repeat(word.word.length))}
          </TextMeaningStyled>
        )}
        {isTranslationShow && isTextMeaning && (
          <TextMeaningTranslateStyled>{textMeaningTranslate}</TextMeaningTranslateStyled>
        )}
      </RepeatCardsContainer>
      <RepeatButtonsContainer>
        <StyledButton className="button-next">Next</StyledButton>
        {deleteButton && (
          <StyledButton onClick={customHandleSubmit('deleted')} type="button">
            Delete
          </StyledButton>
        )}
        {addDificultWordsButton && (
          <StyledButton onClick={customHandleSubmit('difficult')} type="button">
            Difficult
          </StyledButton>
        )}
        <StyledButton onClick={customHandleSubmit('unknown')} type="button">
          Unknow
        </StyledButton>
        <p>{currentWordIndex}</p>
        <Line
          percent={Math.round((currentWordIndex / wordsCount) * 100)}
          strokeWidth="1"
          strokeColor="#404497"
        />
        <p>{wordsCount}</p>
      </RepeatButtonsContainer>
    </RepeatFormStyled>
  );
};

const ReduxLearnWordsForm = reduxForm({
  form: 'wordLearn',
})(LearnWordsForm);

LearnWordsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  word: PropTypes.shape({
    textExample: PropTypes.instanceOf(Array).isRequired,
    textExampleTranslate: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    textMeaning: PropTypes.string.isRequired,
    wordTranslate: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    transcription: PropTypes.string.isRequired,
    textMeaningTranslate: PropTypes.string.isRequired,
  }).isRequired,
  settings: PropTypes.shape({
    settings: PropTypes.shape({
      isTranslate: PropTypes.bool.isRequired,
      isTextMeaning: PropTypes.bool.isRequired,
      isTextExample: PropTypes.bool.isRequired,
      isTranscription: PropTypes.bool.isRequired,
      isImageAssociation: PropTypes.bool.isRequired,
      deleteButton: PropTypes.bool.isRequired,
      addDificultWordsButton: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  isCorrect: PropTypes.bool.isRequired,
  isTranslationShow: PropTypes.bool.isRequired,
  autocomplete: PropTypes.string,
  reset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isRightAnswerShow: PropTypes.bool.isRequired,
  answer: PropTypes.string,
  isResultShow: PropTypes.bool,
  wordsCount: PropTypes.number,
  currentWordIndex: PropTypes.number,
  audiosDuration: PropTypes.number.isRequired,
};

LearnWordsForm.defaultProps = {
  autocomplete: 'off',
  answer: '',
  isResultShow: false,
  wordsCount: 0,
  currentWordIndex: 0,
};

export default ReduxLearnWordsForm;
