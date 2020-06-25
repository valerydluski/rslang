import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Input from '../../../UI/Input/Input';
import WordsPerDayValidator from '../../../../utils/validators/WordsPerDayValidator';
import RadioButton from '../../../UI/RadioButton/RadioButton';

const SettingsForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" key="name" type="text" placeholder="user name" component={Input} />
      <Field name="language" component="select">
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </Field>
      <Field
        name="WordsPerDay"
        type="number"
        placeholder="Words per day"
        // validate={WordsPerDayValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
      />
      <Field
        name="CardsPerDay"
        type="number"
        component={Input}
        placeholder="Cards per day"
        // validate={WordsPerDayValidator}
        parse={(val) => parseInt(val, 10)}
      />
      <RadioButton
        name="deleteButton"
        headerText="delete button"
        buttonsValue={[
          { value: 'active', text: 'show' },
          { value: 'unActive', text: 'not show' },
        ]}
      />
      <RadioButton
        name="addDificultWordsButton"
        headerText="addDificultWords button"
        buttonsValue={[
          { value: 'active', text: 'show' },
          { value: 'unActive', text: 'not show' },
        ]}
      />
      <RadioButton
        name="howToLearnWords"
        headerText="how to learn words"
        buttonsValue={[
          { value: 'newWords', text: 'only new' },
          { value: 'repeat', text: 'repeat' },
        ]}
      />
      <button type="submit" aria-label="Save">
        Save
      </button>
    </form>
  );
};

const ReduxSettingsForm = reduxForm({
  form: 'settings',
})(SettingsForm);

SettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ReduxSettingsForm;
