import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Input from '../UI/Input/Input';
import StyledRoundButton from '../UI/Button/Styled/StyledRoundButton';

const LearnWordsForm = (props) => {
  const { handleSubmit, word, isCorrect, autocomplete, reset } = props;
  const { textExample, textExampleTranslate } = word;
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
      <hr />
      <p>{textExampleTranslate}</p>
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
  isCorrect: PropTypes.bool.isRequired,
  autocomplete: PropTypes.string,
  reset: PropTypes.func.isRequired,
};

LearnWordsForm.defaultProps = {
  autocomplete: 'off',
};

export default ReduxLearnWordsForm;
