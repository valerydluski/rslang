import React from 'react';
import NavigationMenu from '../../components/Navigation/NavigationMenu';

export default function GameNavigationMenu() {
  const links = [
    { name: 'Home', href: '' },
    { name: 'SpeakIT', href: '/StartGame/SpeakIT' },
    { name: 'EnglishPuzzle', href: '/StartGame/EnglishPuzzle' },
    { name: 'Savannah', href: '/StartGame/Savannah' },
    { name: 'AudioCall', href: '/StartGame/AudioCall' },
    { name: 'Sprint', href: '/StartGame/Sprint' },
    { name: 'OwnGame', href: '/StartGame/OwnGame' },
  ];

  return <NavigationMenu links={links} />;
}
