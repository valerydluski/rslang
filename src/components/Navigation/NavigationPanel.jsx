import React from 'react';
import NavigationLink from './NavigationLink';

export default class NavigationPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { name: 'Home', href: '' },
        { name: 'SpeakIT', href: '/StartGame/SpeakIT' },
        { name: 'EnglishPuzzle', href: '/StartGame/EnglishPuzzle' },
        { name: 'Savannah', href: '/StartGame/Savannah' },
        { name: 'AudioCall', href: '/StartGame/AudioCall' },
        { name: 'Sprint', href: '/StartGame/Sprint' },
        { name: 'OwnGame', href: '/StartGame/OwnGame' },
      ],
    };
  }

  render() {
    const { links } = this.state;
    return (
      <nav className="navigation-panel_container">
        <ul className="navigation-panel">
          {links.map((link) => {
            const { name, href } = link;
            return (
              <li key={name}>
                <NavigationLink href={href} name={name} />
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
