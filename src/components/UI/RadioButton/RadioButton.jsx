import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Input from '../Input/Input';

const RadioButton = (props) => {
  const { name, headerText, buttonsValue } = props;
  return (
    <div>
      <p>{headerText}</p>
      {buttonsValue.map((el) => {
        return (
          <div key={`${name}_${el.value}`}>
            <Field
              key={`${name}_${el.value}`}
              name={name}
              component={Input}
              type="radio"
              value={el.value}
              label={name}
            />
          </div>
        );
      })}
    </div>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  buttonsValue: PropTypes.instanceOf(Array).isRequired,
};

export default RadioButton;
