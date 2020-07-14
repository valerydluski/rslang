import React from 'react';
import { I18n } from 'react-redux-i18n';
import NavigationMenu from '../../components/Navigation/NavigationMenu';
import StyledMainNavigationMenu from '../../components/Navigation/styled/StyledMainNavigationMenu';

export default function MainNavigationMenu() {
  const links = [
    { name: `${I18n.t('Buttons.learnWords')}`, href: '/learn' },
    {
      name: `${I18n.t('Buttons.repeatWords')}`,
      href: {
        pathname: '/repeat',
        state: {
          difficultWords: false,
        },
      },
    },
    {
      name: `${I18n.t('Buttons.difficultWords')}`,
      href: {
        pathname: '/repeat',
        state: {
          difficultWords: true,
        },
      },
    },
  ];

  return (
    <StyledMainNavigationMenu>
      <NavigationMenu links={links} activeLinkClass="active_link" />
    </StyledMainNavigationMenu>
  );
}
