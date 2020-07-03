import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Input from '../../components/UI/Input/Input';
import StyledRoundButton from '../../components/UI/Button/Styled/StyledRoundButton';

const LearnWordsForm = (props) => {
  const { handleSubmit, word, isCorrect, autocomplete, reset, settings } = props;
  const {
    isTranslate,
    isTextMeaning,
    isTextExample,
    isTranscription,
    isImageAssociation,
    deleteButton,
    addDificultWordsButton,
  } = settings.settings;
  console.log('LearnWordsForm -> settings', settings.settings);
  const { textExample, textExampleTranslate } = word;
  console.log('LearnWordsForm -> word', word);
  const [firstPart, secondPart] = textExample;

  useEffect(() => {
    if (isCorrect) {
      reset('wordLearn');
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <p>{firstPart}</p>
      <Field
        name="word"
        key="word"
        type="text"
        placeholder=""
        size="5"
        component={Input}
        autoFocus
        autocomplete={autocomplete}
      />
      <p>{secondPart}</p>
      {isCorrect && isTranslate && <p></p>}
      <hr />
      {isTextExample && <p>{textExampleTranslate}</p>}
      <StyledRoundButton>Next</StyledRoundButton>
    </form>
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
  }).isRequired,
  settings: PropTypes.shape({
    isTranslate: PropTypes.bool.isRequired,
    isTextMeaning: PropTypes.bool.isRequired,
    isTextExample: PropTypes.bool.isRequired,
    isTranscription: PropTypes.bool.isRequired,
    isImageAssociation: PropTypes.bool.isRequired,
    deleteButton: PropTypes.bool.isRequired,
    addDificultWordsButton: PropTypes.bool.isRequired,
  }).isRequired,
  isCorrect: PropTypes.bool.isRequired,
  autocomplete: PropTypes.string,
  reset: PropTypes.func.isRequired,
};

LearnWordsForm.defaultProps = {
  autocomplete: 'off',
};

export default ReduxLearnWordsForm;
