import React from 'react';
import SettingsContainerStyled from './Styled/SettingsContainerStyled';
import SettingContent from '../../../../containers/Homepage/Content/Settings';

export default function Settings() {
  return (
    <SettingsContainerStyled>
      <h2>Settings</h2>
      <SettingContent />
    </SettingsContainerStyled>
  );
}
