import React from 'react';
import NavigationLink from './NavigationLink';

export default class NavigationPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { name: 'Home', href: '/' },
        { name: 'SpeakIT', href: '/SpeakIT' },
        { name: 'EnglishPuzzle', href: '/EnglishPuzzle' },
        { name: 'Savannah', href: '/Savannah' },
        { name: 'AudioCall', href: '/AudioCall' },
        { name: 'Sprint', href: '/Sprint' },
        { name: 'OwnGame', href: '/ownGame' },
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
