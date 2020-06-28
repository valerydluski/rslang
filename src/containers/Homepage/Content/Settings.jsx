import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReduxSettingsForm from '../../../components/HomePage/Content/Settings/SettingsForm';
import saveUserSettings from '../../../redux/UserSettings/actions';

function SettingContent(props) {
  const { saveSettings } = props;
  const onSubmit = (formData) => {
    saveSettings(formData);
  };
  return (
    <>
      <ReduxSettingsForm onSubmit={onSubmit} />
    </>
  );
}

SettingContent.propTypes = {
  saveSettings: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  saveSettings: saveUserSettings,
};

export default connect(null, mapDispatchToProps)(SettingContent);
