import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import Input from '../../../../UI/Input/Input';
import WordsPerDayValidator from '../../../../../utils/validators/WordsPerDayValidator';
import RadioButton from '../../../../UI/RadioButton/RadioButton';
import nameValidator from '../../../../../utils/validators/nameValidator';

const AppSettings = ({ checkboxes }) => {
  return (
    <>
      <h3>Application settings</h3>
      <Field
        name="name"
        key="name"
        type="text"
        placeholder="user name"
        component={Input}
        validate={nameValidator}
      />
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
      <h3>info in cards</h3>
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
