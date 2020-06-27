import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Input from '../UI/Input/Input';
import StyledRoundButton from '../UI/Button/Styled/StyledRoundButton';

const LearnWordsForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <p>She is a nice</p>
      <Field name="word" key="word" type="text" placeholder="" component={Input} />
      <hr />
      <p>Она хороший человек.</p>
      <StyledRoundButton>Next</StyledRoundButton>
    </form>
  );
};

const ReduxLearnWordsForm = reduxForm({
  form: 'wordLearn',
})(LearnWordsForm);

LearnWordsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ReduxLearnWordsForm;
