import React from 'react';
import { Field } from 'redux-form';
import Input from '../../../../UI/Input/Input';
import WordsPerDayValidator from '../../../../../utils/validators/WordsPerDayValidator';
import RadioButton from '../../../../UI/RadioButton/RadioButton';

const AppSettings = () => {
  return (
    <>
      <h3>Application settings</h3>
      <Field name="name" key="name" type="text" placeholder="user name" component={Input} />
      <Field name="language" key="language" component="select">
        <option value="en" key="en">
          English
        </option>
        <option value="ru" key="ru">
          Russian
        </option>
      </Field>
      <Field
        name="WordsPerDay"
        key="WordsPerDay"
        type="number"
        placeholder="Words per day"
        validate={WordsPerDayValidator}
        parse={(val) => parseInt(val, 10)}
        component={Input}
      />
      <Field
        name="CardsPerDay"
        key="CardsPerDay"
        type="number"
        component={Input}
        placeholder="Cards per day"
        validate={WordsPerDayValidator}
        parse={(val) => parseInt(val, 10)}
      />
      <RadioButton
        name="deleteButton"
        key="deleteButton"
        headerText="delete button"
        buttonsValue={[
          { value: 'active', text: 'show', key: 'deleteButton_show' },
          { value: 'inActive', text: 'not show', key: 'deleteButton_not' },
        ]}
      />
      <RadioButton
        name="addDificultWordsButton"
        key="addDificultWordsButton"
        headerText="addDificultWords button"
        buttonsValue={[
          { value: 'active', text: 'show', key: 'addDificultWordsButton_show' },
          { value: 'inActive', text: 'not show', key: 'addDificultWordsButton_not' },
        ]}
      />
      <RadioButton
        name="howToLearnWords"
        headerText="how to learn words"
        key="howToLearnWords"
        buttonsValue={[
          { value: 'newWords', text: 'only new', key: 'howToLearnWords_show' },
          { value: 'repeat', text: 'repeat', key: 'howToLearnWords_not' },
        ]}
      />
      <h3>info in cards</h3>
    </>
  );
};

export default AppSettings;
