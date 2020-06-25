import React from 'react';
import NavigationMenu from '../../components/Navigation/NavigationMenu';

export default function MainNavigationMenu() {
  const links = [
    { name: 'Home', href: '' },
    { name: 'Promo', href: '/promo' },
    { name: 'Abous Us', href: '/about-us' },
    { name: 'Dictionary', href: '/dictionary' },
    { name: 'Statistics', href: '/statistics' },
  ];

  return <NavigationMenu links={links} />;
}
