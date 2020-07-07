import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Input from '../Input/Input';
import RadioButtonStyled from './Styled/RadioButtonStyled';

const RadioButton = (props) => {
  const { name, headerText, buttonsValue } = props;
  return (
    <RadioButtonStyled>
      <p>{headerText}</p>
      {buttonsValue.map((el) => {
        return (
          <Field
            key={`${name}_${el.value}`}
            name={name}
            component={Input}
            type="radio"
            value={el.value}
            label={el.text}
          />
        );
      })}
    </RadioButtonStyled>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  buttonsValue: PropTypes.instanceOf(Array).isRequired,
};

export default RadioButton;
