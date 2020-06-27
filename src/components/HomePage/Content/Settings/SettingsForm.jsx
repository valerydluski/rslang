import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import AppSettings from './AppSettings/AppSettings';

const SettingsForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <AppSettings />
      <h3>AudioCall</h3>
      <h3>Savannah</h3>
      <h3>SpeakIT</h3>
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
