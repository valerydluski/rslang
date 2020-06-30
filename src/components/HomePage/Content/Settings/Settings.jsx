import React from 'react';
import { Translate } from 'react-redux-i18n';
import SettingsContainerStyled from './Styled/SettingsContainerStyled';
import SettingContent from '../../../../containers/Homepage/Content/Settings';

export default function Settings() {
  return (
    <SettingsContainerStyled>
      <h2>
        <Translate value="HomePage.settings" />
      </h2>
      <SettingContent />
    </SettingsContainerStyled>
  );
}
