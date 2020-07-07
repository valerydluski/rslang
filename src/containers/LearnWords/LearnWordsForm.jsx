import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Input from '../../components/UI/Input/Input';
import StyledRoundButton from '../../components/UI/Button/Styled/StyledRoundButton';
import { LINK_FOR_IMAGE } from '../../config';
import LearnWordsInput from './LearnWordsInput';

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
    <>
      <StyledRoundButton onClick={customHandleSubmit('sound')}>Sound</StyledRoundButton>
      <form
        onSubmit={handleSubmit((values) =>
          onSubmit({
            ...values,
            buttonType: 'form',
          })
        )}
      >
        {isImageAssociation && <img alt={word} src={`${LINK_FOR_IMAGE}${image}`} />}
        <p>{firstPart}</p>
        <Field
          name="word"
          key="word"
          type="text"
          placeholder={isRightAnswerShow ? word.word : ''}
          size="5"
          component={LearnWordsInput}
          autoFocus
          autocomplete={autocomplete}
        />
        <p>{secondPart}</p>
        {isTranslationShow && isTranslate && <p>{textExampleTranslate}</p>}
        <hr />
        {isTextMeaning && isTranslationShow ? (
          <p>{textMeaningFormatted}</p>
        ) : (
          <p>{textMeaningFormatted.replace(wordRegExp, '*'.repeat(word.word.length))}</p>
        )}
        {!isTranslationShow && isTextExample && (
          <p>{textExample.join('*'.repeat(word.word.length))}</p>
        )}
        {isTranslationShow && isTextExample && <p>{textExample.join(` ${word.word} `)}</p>}
        <StyledRoundButton>Next</StyledRoundButton>
        {isTranslationShow && <p>{wordTranslate}</p>}
        {isTranslationShow && isTranscription && <p>{transcription}</p>}
      </form>
      {deleteButton && (
        <StyledRoundButton onClick={customHandleSubmit('deleted')}>Delete</StyledRoundButton>
      )}
      {addDificultWordsButton && (
        <StyledRoundButton onClick={customHandleSubmit('difficult')}>Difficult</StyledRoundButton>
      )}
      <StyledRoundButton onClick={customHandleSubmit('unknown')}>Unknow</StyledRoundButton>
    </>
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
};

LearnWordsForm.defaultProps = {
  autocomplete: 'off',
};

export default ReduxLearnWordsForm;
