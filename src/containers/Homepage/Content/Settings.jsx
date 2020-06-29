import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import ReduxSettingsForm from '../../../components/HomePage/Content/Settings/SettingsForm';
import { saveUserSettings } from '../../../redux/UserSettings/actions';
import checkboxesValidator from '../../../utils/validators/checkboxesValidator';

function SettingContent(props) {
  const { saveSettings, initialValues } = props;
  const onSubmit = (formData) => {
    if (!checkboxesValidator(formData)) {
      toast.info('you must select at least one hint');
    } else saveSettings(formData);
  };
  return (
    <>
      <ReduxSettingsForm initialValues={initialValues} onSubmit={onSubmit} />
    </>
  );
}

SettingContent.propTypes = {
  saveSettings: PropTypes.func.isRequired,
  initialValues: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => {
  return {
    initialValues: state.userSettings.settings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveSettings: (data) => dispatch(saveUserSettings(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingContent);
