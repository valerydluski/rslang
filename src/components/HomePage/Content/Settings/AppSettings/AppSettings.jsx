import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { I18n, Translate } from 'react-redux-i18n';
import Input from '../../../../UI/Input/Input';
import WordsPerDayValidator from '../../../../../utils/validators/WordsPerDayValidator';
import RadioButton from '../../../../UI/RadioButton/RadioButton';
import nameValidator from '../../../../../utils/validators/nameValidator';

const AppSettings = ({ checkboxes }) => {
  return (
    <>
      <h3>
        <Translate value="Settings.appSettings" />
      </h3>
      <Field
        name="name"
        key="name"
        type="text"
        placeholder={I18n.t('Settings.userName')}
        component={Input}
        validate={nameValidator}
      />
      <Field name="language" key="language" component="select">
        <option value="en" key="en" label={I18n.t('Languages.en')} />
        <option value="ru" key="ru" label={I18n.t('Languages.ru')} />
      </Field>
      <Field
        name="WordsPerDay"
        key="WordsPerDay"
        type="number"
        placeholder={I18n.t('Settings.wordsPerDay')}
        validate={WordsPerDayValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
      />
      <Field
        name="CardsPerDay"
        key="CardsPerDay"
        type="number"
        component={Input}
        placeholder={I18n.t('Settings.cardsPerDay')}
        validate={WordsPerDayValidator}
        parse={(val) => parseInt(val, 10)}
      />
      <Field
        name="deleteButton"
        id="deleteButton"
        component={Input}
        type="checkbox"
        label="show delete words button"
      />
      <Field
        name="addDificultWordsButton"
        id="addDificultWordsButton"
        component={Input}
        type="checkbox"
        label="show add dificult words button"
      />
      <RadioButton
        name="howToLearnWords"
        headerText="how to learn words"
        key="howToLearnWords"
        buttonsValue={[
          { value: 'newWords', text: 'only new' },
          { value: 'repeat', text: 'repeat' },
        ]}
      />
      <h3>
        <Translate value="Settings.infoInCards" />
      </h3>
      {checkboxes.map((el) => {
        return <Field name={el} key={el} id={el} component={Input} type="checkbox" label={el} />;
      })}
    </>
  );
};

AppSettings.propTypes = {
  checkboxes: PropTypes.instanceOf(Array).isRequired,
};

export default AppSettings;
