import React from 'react';
import NavigationLink from './NavigationLink';

export default class NavigationPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { name: 'Home', link: '' },
        { name: 'SpeakIT', link: 'StartGame/SpeakIT' },
        { name: 'EnglishPuzzle', link: 'StartGame/EnglishPuzzle' },
        { name: 'Savannah', link: 'StartGame/Savannah' },
        { name: 'AudioCall', link: 'StartGame/AudioCall' },
        { name: 'Sprint', link: 'StartGame/Sprint' },
        { name: 'OwnGame', link: 'StartGame/OwnGame' },
      ],
    };
  }

  render() {
    const { links } = this.state;
    return (
      <nav className="navigation-panel_container">
        <ul className="navigation-panel">
          {links.map((link) => {
            return <NavigationLink key={link.name} link={link.link} name={link.name} />;
          })}
        </ul>
      </nav>
    );
  }
}
