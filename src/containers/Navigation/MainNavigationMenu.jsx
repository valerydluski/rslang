import React from 'react';
import NavigationMenu from '../../components/Navigation/NavigationMenu';
import StyledMainNavigationMenu from '../../components/Navigation/styled/StyledMainNavigationMenu';

export default function MainNavigationMenu() {
  const links = [
    { name: 'HomePage.home', href: '/home' },
    { name: 'HomePage.promo', href: '/promo' },
    { name: 'HomePage.about', href: '/about-us' },
    { name: 'HomePage.dictionary', href: '/dictionary' },
    { name: 'HomePage.statistics', href: '/statistics' },
  ];

  return (
    <StyledMainNavigationMenu className='navbar-list'>
      <NavigationMenu links={links} activeLinkClass="active_link"/>
    </StyledMainNavigationMenu>
  );
}
