import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Input from '../UI/Input/Input';
import StyledRoundButton from '../UI/Button/Styled/StyledRoundButton';

const LearnWordsForm = (props) => {
  const { handleSubmit, word } = props;
  const { textExample, textExampleTranslate } = word;
  const [firstPart, secondPart] = textExample;
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
};

export default ReduxLearnWordsForm;
