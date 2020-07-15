import React from 'react';
import { I18n } from 'react-redux-i18n';
import NavigationMenu from '../../components/Navigation/NavigationMenu';
import StyledDictionaryNavigationMenu from '../../components/Navigation/styled/StyledDictionaryNavigationMenu';

export default function DictionaryNavigationMenu() {
  const links = [
    { name: I18n.t('Dictionary.learningWords'), href: '/dictionary/learning-words' },
    { name: I18n.t('Dictionary.difficultWords'), href: '/dictionary/difficult-words' },
    { name: I18n.t('Dictionary.deletedWords'), href: '/dictionary/deleted-words' },
  ];

  return (
    <StyledDictionaryNavigationMenu>
      <NavigationMenu links={links} activeLinkClass="active_link" />
    </StyledDictionaryNavigationMenu>
  );
}
