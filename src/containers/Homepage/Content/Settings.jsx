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
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { puzzleSettingsFromServer } from '../../../redux/EnglishPuzzle/actions';

function SettingContent(props) {
  const { saveToStore, saveToAPI, initialValues, isLoadingData, puzzleSettingsSave } = props;
  const onSubmit = (formData) => {
    if (!checkboxesValidator(formData)) {
      toast.warning(<Translate value="Settings.checkboxMessage" />);
    } else {
      saveToStore(formData);
      saveToAPI();
      puzzleSettingsSave({
        isAutoSpeech: formData.isAutoSpeech,
        isTranslation: formData.isTranslation,
        isBackground: formData.isBackground,
      });
    }
  };
  if (isLoadingData) return <LoadingSpinner />;
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
  isLoadingData: PropTypes.bool.isRequired,
  puzzleSettingsSave: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    initialValues: state.userSettings.settings,
    isLoadingData: state.loadDataLoaderReducer.loading,
  };
};

const mapDispatchToProps = {
  saveToStore: saveUserSettingsToStore,
  saveToAPI: saveUserSettingsToAPI,
  puzzleSettingsSave: puzzleSettingsFromServer,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingContent);
