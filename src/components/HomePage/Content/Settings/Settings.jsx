import React from 'react';
import { Translate } from 'react-redux-i18n';
import SettingsContainerStyled from './Styled/SettingsContainerStyled';
import SettingContent from '../../../../containers/Homepage/Content/Settings';
import HeaderStyled, { HeaderContainerStyled } from './Styled/Header';
import TitleWithUnderline from '../../../../containers/Homepage/Content/Title/Title';

export default function Settings() {
  return (
    <SettingsContainerStyled>
      <TitleWithUnderline>
        <Translate value="HomePage.start" />
      </TitleWithUnderline>
      <HeaderContainerStyled>
        <HeaderStyled>
          <Translate value="HomePage.settings" />
        </HeaderStyled>
      </HeaderContainerStyled>
      <SettingContent />
    </SettingsContainerStyled>
  );
}
