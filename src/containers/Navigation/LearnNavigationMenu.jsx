import React from 'react';
import NavigationMenu from '../../components/Navigation/NavigationMenu';
import StyledMainNavigationMenu from '../../components/Navigation/styled/StyledMainNavigationMenu';

export default function MainNavigationMenu() {
  const links = [
    { name: 'Learn Words', href: '/learn' },
    {
      name: 'Repeat Words',
      href: {
        pathname: '/repeat',
        state: {
          difficultWords: false,
        },
      },
    },
    {
      name: 'Difficult Words',
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
