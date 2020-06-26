import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Input from '../Input/Input';

const RadioButton = (props) => {
  const { name, headerText, buttonsValue } = props;
  return (
    <div>
      <p>{headerText}</p>
      <div>
        {buttonsValue.map((el) => {
          return (
            <>
              <Field
                key={`${name}_${el.value}`}
                name={name}
                component={Input}
                type="radio"
                value={el.value}
              />
              <span>{el.text}</span>
            </>
          );
        })}
      </div>
    </div>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  buttonsValue: PropTypes.instanceOf(Array).isRequired,
};

export default RadioButton;
