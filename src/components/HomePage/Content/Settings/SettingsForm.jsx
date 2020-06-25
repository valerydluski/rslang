import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Input from '../../../UI/Input/Input';

const SettingsForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="user name" key="name" type="text" placeholder="user name" component={Input} />
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
