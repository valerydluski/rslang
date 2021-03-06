import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Translate, I18n } from 'react-redux-i18n';
import AppSettings from './AppSettings/AppSettings';
import Input from '../../../UI/Input/Input';
import WordsPerPageValidator from '../../../../utils/validators/wordsPerPageValidator';
import { CHECKBOXES } from '../../../../config';
import { BlackHeader } from './Styled/Header';
import timeForWordValidator from '../../../../utils/validators/timeForWordValidator';
import timeForSavannahWordValidator from '../../../../utils/validators/timeForSavannahWordValidator';
import { SettingsFormStyled } from './Styled/SettingsContainerStyled';
import StyledSettingsRoundButton from '../../../UI/Button/Styled/StyledSettingsRoundButton';

const SettingsForm = (props) => {
  const { handleSubmit } = props;
  return (
    <SettingsFormStyled onSubmit={handleSubmit}>
      <AppSettings checkboxes={CHECKBOXES} />
      <BlackHeader>
        <Translate value="Games.audioCall" />
      </BlackHeader>
      <Field
        name="AudioCallWordsPerPage"
        key="AudioCallWordsPerPage"
        type="number"
        placeholder="Audio call - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label={I18n.t('Settings.wordsPerPage')}
        classNameSpan="span_none"
        className="settings"
        min={5}
        max={25}
      />
      <BlackHeader>
        <Translate value="Games.savannah" />
      </BlackHeader>
      <Field
        name="SavannahWordsPerPage"
        key="SavannahWordsPerPage"
        type="number"
        placeholder="Savannah - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label={I18n.t('Settings.wordsPerPage')}
        classNameSpan="span_none"
        className="settings"
        min={5}
        max={25}
      />
      <Field
        name="savannahTimeForWord"
        key="savannahTimeForWord"
        type="number"
        placeholder={I18n.t('Settings.timeForWord')}
        validate={timeForSavannahWordValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label={I18n.t('Settings.timeForWord')}
        classNameSpan="span_none"
        className="settings"
        min={1}
        max={10}
      />
      <Field
        name="savannahMaxErrorCounter"
        key="savannahMaxErrorCounter"
        type="number"
        placeholder={I18n.t('Settings.errorCounter')}
        validate={timeForWordValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label={I18n.t('Settings.errorCounter')}
        classNameSpan="span_none"
        className="settings"
        min={1}
        max={5}
      />
      <BlackHeader>
        <Translate value="Games.speakIT" />
      </BlackHeader>
      <Field
        name="SpeakITWordsPerPage"
        key="SpeakITWordsPerPage"
        type="number"
        placeholder="SpeakIT - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label={I18n.t('Settings.wordsPerPage')}
        classNameSpan="span_none"
        className="settings"
        min={5}
        max={25}
      />
      <BlackHeader>
        <Translate value="Games.sprint" />
      </BlackHeader>
      <Field
        name="SprintWordsPerPage"
        key="SprintWordsPerPage"
        type="number"
        placeholder={I18n.t('Settings.wordsPerPage')}
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label={I18n.t('Settings.wordsPerPage')}
        classNameSpan="span_none"
        className="settings"
        min={5}
        max={25}
      />
      <Field
        name="sprintTimeForWord"
        key="sprintTimeForWord"
        type="number"
        placeholder={I18n.t('Settings.timeForWord')}
        validate={timeForWordValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label={I18n.t('Settings.timeForWord')}
        classNameSpan="span_none"
        className="settings"
        min={1}
        max={5}
      />
      <BlackHeader>
        <Translate value="Games.makeSentence" />
      </BlackHeader>
      <Field
        name="MakeSentenceWordsPerPage"
        key="MakeSentenceWordsPerPage"
        type="number"
        placeholder="Make sentence - words per page"
        validate={WordsPerPageValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label={I18n.t('Settings.wordsPerPage')}
        classNameSpan="span_none"
        className="settings"
        min={5}
        max={25}
      />
      <BlackHeader>
        <Translate value="Games.puzzle" />
      </BlackHeader>
      <Field
        name="isAutoSpeech"
        id="isAutoSpeech"
        component={Input}
        type="checkbox"
        label={I18n.t('Settings.isAutoSpeech')}
      />
      <Field
        name="isTranslation"
        id="isTranslation"
        component={Input}
        type="checkbox"
        label={I18n.t('Settings.isTranslation')}
      />
      <Field
        name="isBackground"
        id="isBackground"
        component={Input}
        type="checkbox"
        label={I18n.t('Settings.isBackground')}
      />
      <StyledSettingsRoundButton type="submit" aria-label="Save">
        <Translate value="Buttons.save" />
      </StyledSettingsRoundButton>
    </SettingsFormStyled>
  );
};

const ReduxSettingsForm = reduxForm({
  form: 'settings',
})(SettingsForm);

SettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ReduxSettingsForm;
