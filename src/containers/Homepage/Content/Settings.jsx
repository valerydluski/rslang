import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Translate } from 'react-redux-i18n';
import ReduxSettingsForm from '../../../components/HomePage/Content/Settings/SettingsForm';
import {
  saveUserSettingsToStore,
  saveUserSettingsToAPI,
} from '../../../redux/UserSettings/actions';
import checkboxesValidator from '../../../utils/validators/checkboxesValidator';

function SettingContent(props) {
  const { saveToStore, saveToAPI, initialValues } = props;
  const onSubmit = (formData) => {
    if (!checkboxesValidator(formData)) {
      toast.warning(<Translate value="Settings.checkboxMessage" />);
    } else {
      saveToStore(formData);
      saveToAPI();
    }
  };
  return (
    <>
      <ReduxSettingsForm initialValues={initialValues} onSubmit={onSubmit} />
    </>
  );
}

SettingContent.propTypes = {
  saveToStore: PropTypes.func.isRequired,
  initialValues: PropTypes.instanceOf(Object).isRequired,
  saveToAPI: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    initialValues: state.userSettings.settings,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     saveSettings: (data) => dispatch(saveUserSettingsToStore(data)),
//   };
// };

const mapDispatchToProps = {
  saveToStore: saveUserSettingsToStore,
  saveToAPI: saveUserSettingsToAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingContent);
