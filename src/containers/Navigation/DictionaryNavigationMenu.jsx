import React from 'react';
import NavigationMenu from '../../components/Navigation/NavigationMenu';
import StyledDictionaryNavigationMenu from '../../components/Navigation/styled/StyledDictionaryNavigationMenu';

export default function DictionaryNavigationMenu() {
  const links = [
    { name: 'Learning Words', href: '/dictionary/learning-words' },
    { name: 'Difficult Words', href: '/dictionary/difficult-words' },
    { name: 'Deleted Words', href: '/dictionary/deleted-words' },
  ];

  return (
    <StyledDictionaryNavigationMenu>
      <NavigationMenu links={links} activeLinkClass="active_link" />
    </StyledDictionaryNavigationMenu>
  );
}
