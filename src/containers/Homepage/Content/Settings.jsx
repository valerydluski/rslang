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
      <h3>Application settings</h3>
      <ReduxSettingsForm onSubmit={onSubmit} />
      <div>
        <h3>info in cards</h3>
      </div>
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
