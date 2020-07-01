import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import AppSettings from './AppSettings/AppSettings';
import Input from '../../../UI/Input/Input';
import WordsPerPageValidator from '../../../../utils/validators/wordsPerPageValidator';
import { CHECKBOXES } from '../../../../config';

const SettingsForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <AppSettings checkboxes={CHECKBOXES} />
      <h3>
        <Translate value="Games.audioCall" />
      </h3>
      <Field
        name="AudioCallWordsPerPage"
        key="AudioCallWordsPerPage"
        type="number"
        placeholder="Audio call - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label="words per page"
      />
      <h3>
        <Translate value="Games.savannah" />
      </h3>
      <Field
        name="SavannahWordsPerPage"
        key="SavannahWordsPerPage"
        type="number"
        placeholder="Savannah - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label="words per page"
      />
      <h3>
        <Translate value="Games.speakIT" />
      </h3>
      <Field
        name="SpeakITWordsPerPage"
        key="SpeakITWordsPerPage"
        type="number"
        placeholder="SpeakIT - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label="words per page"
      />
      <h3>
        <Translate value="Games.sprint" />
      </h3>
      <Field
        name="SprintWordsPerPage"
        key="SprintWordsPerPage"
        type="number"
        placeholder="Sprint - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label="words per page"
      />
      <h3>
        <Translate value="Games.makeSentence" />
      </h3>
      <Field
        name="MakeSentenceWordsPerPage"
        key="MakeSentenceWordsPerPage"
        type="number"
        placeholder="Make sentence - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label="words per page"
      />
      <button type="submit" aria-label="Save">
        <Translate value="Buttons.save" />
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
