import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import AppSettings from './AppSettings/AppSettings';
import Input from '../../../UI/Input/Input';
import WordsPerPageValidator from '../../../../utils/validators/wordsPerPageValidator';

const SettingsForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <AppSettings />
      <h3>AudioCall</h3>
      <Field
        name="AudioCallWordsPerPage"
        key="AudioCallWordsPerPage"
        type="number"
        placeholder="Audio call - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
      />
      <h3>Savannah</h3>
      <Field
        name="SavannahWordsPerPage"
        key="SavannahWordsPerPage"
        type="number"
        placeholder="Savannah - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
      />
      <h3>SpeakIT</h3>
      <Field
        name="SpeakITWordsPerPage"
        key="SpeakITWordsPerPage"
        type="number"
        placeholder="SpeakIT - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
      />
      <h3>Sprint</h3>
      <Field
        name="SprintWordsPerPage"
        key="SprintWordsPerPage"
        type="number"
        placeholder="Sprint - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
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
