import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { I18n, Translate } from 'react-redux-i18n';
import Input from '../../../../UI/Input/Input';
import WordsPerDayValidator from '../../../../../utils/validators/WordsPerDayValidator';
import RadioButton from '../../../../UI/RadioButton/RadioButton';
import nameValidator from '../../../../../utils/validators/nameValidator';
import { LabelStyled } from '../../../../UI/Input/Styled/InputStyled';
import { BlackHeader } from '../Styled/Header';
import { SelectContainerStyled } from '../Styled/SettingsContainerStyled';

const AppSettings = ({ checkboxes }) => {
  return (
    <>
      <BlackHeader>
        <Translate value="Settings.appSettings" />
      </BlackHeader>
      <Field
        name="name"
        key="name"
        type="text"
        placeholder={I18n.t('Settings.userName')}
        component={Input}
        validate={nameValidator}
        label={I18n.t('Settings.userName')}
        classNameSpan="span_none"
        className="settings"
      />
      <SelectContainerStyled>
        <Field name="language" key="language" component="select">
          <option value="en" key="en" label={I18n.t('Languages.en')} />
          <option value="ru" key="ru" label={I18n.t('Languages.ru')} />
        </Field>
        <LabelStyled htmlFor="language">{I18n.t('Settings.language')}</LabelStyled>
      </SelectContainerStyled>
      <Field
        name="WordsPerDay"
        key="WordsPerDay"
        type="number"
        placeholder={I18n.t('Settings.wordsPerDay')}
        validate={WordsPerDayValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
        label={I18n.t('Settings.wordsPerDay')}
        classNameSpan="span_none"
        className="settings"
      />
      <Field
        name="CardsPerDay"
        key="CardsPerDay"
        type="number"
        component={Input}
        placeholder={I18n.t('Settings.cardsPerDay')}
        validate={WordsPerDayValidator}
        parse={(val) => parseInt(val, 10)}
        label={I18n.t('Settings.cardsPerDay')}
        classNameSpan="span_none"
        className="settings"
      />
      <Field
        name="deleteButton"
        id="deleteButton"
        component={Input}
        type="checkbox"
        label={I18n.t('Settings.deleteButton')}
      />
      <Field
        name="addDificultWordsButton"
        id="addDificultWordsButton"
        component={Input}
        type="checkbox"
        label={I18n.t('Settings.difficultButton')}
      />
      <RadioButton
        name="howToLearnWords"
        headerText={I18n.t('Settings.howToLearn')}
        key="howToLearnWords"
        buttonsValue={[
          { value: 'newWords', text: I18n.t('Settings.onlyNew') },
          { value: 'repeat', text: I18n.t('Settings.repeat') },
          { value: 'allWords', text: I18n.t('Settings.allWords') },
        ]}
      />
      <BlackHeader>
        <Translate value="Settings.infoInCards" />
      </BlackHeader>
      {checkboxes.map((el) => {
        return (
          <Field
            name={el}
            key={el}
            id={el}
            component={Input}
            type="checkbox"
            label={I18n.t(`Settings.${el}`)}
          />
        );
      })}
      <BlackHeader>{I18n.t('Settings.audio')}</BlackHeader>
      <Field
        name="isAudioTranslate"
        id="isAudioTranslate"
        component={Input}
        type="checkbox"
        label={I18n.t('Settings.isAudioTranslate')}
      />
      <Field
        name="isAudioTextMeaning"
        id="isAudioTextMeaning"
        component={Input}
        type="checkbox"
        label={I18n.t('Settings.isAudioTextMeaning')}
      />
      <Field
        name="isAudioTextExample"
        id="isAudioTextExample"
        component={Input}
        type="checkbox"
        label={I18n.t('Settings.isAudioTextExample')}
      />
    </>
  );
};

AppSettings.propTypes = {
  checkboxes: PropTypes.instanceOf(Array).isRequired,
};

export default AppSettings;
