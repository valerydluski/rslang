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
import newWordsAndAllWordsValidator from '../../../utils/validators/newWordsAndAllWordsValidator';
import getRedirectFunction from '../../../utils/getRedirectFunction';

function SettingContent(props) {
  const { saveToStore, saveToAPI, initialValues, isLoadingData, puzzleSettingsSave } = props;
  const onSubmit = (formData) => {
    if (!checkboxesValidator(formData)) {
      toast.warning(<Translate value="Settings.checkboxMessage" />);
    } else if (!newWordsAndAllWordsValidator(formData.wordsPerDay, formData.cardsPerDay)) {
      toast.warning(<Translate value="Settings.newWordsAndAllWords" />);
    } else {
      saveToStore(formData);
      saveToAPI();
      toast.success(<Translate value="Settings.saveSettings" />);
      puzzleSettingsSave({
        isAutoSpeech: formData.isAutoSpeech,
        isTranslation: formData.isTranslation,
        isBackground: formData.isBackground,
      });
      const redirect = getRedirectFunction('/main');
      redirect();
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
