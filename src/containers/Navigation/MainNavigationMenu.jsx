import React from 'react';
import NavigationMenu from '../../components/Navigation/NavigationMenu';
import StyledMainNavigationMenu from '../../components/Navigation/styled/StyledMainNavigationMenu';

export default function MainNavigationMenu() {
  const links = [
    { name: 'Home', href: '/home' },
    { name: 'Promo', href: '/promo' },
    { name: 'Abous Us', href: '/about-us' },
    { name: 'Dictionary', href: '/dictionary' },
    { name: 'Statistics', href: '/statistics' },
  ];

  return (
    <StyledMainNavigationMenu>
      <NavigationMenu links={links} activeLinkClass="active_link" />
    </StyledMainNavigationMenu>
  );
}
