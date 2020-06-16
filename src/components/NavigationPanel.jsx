import React from 'react';
import Link from './NavigationLink';

export default class NavigationPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { name: 'Home', link: '' },
        { name: 'SpeakIT', link: 'SpeakIT' },
        { name: 'EnglishPuzzle', link: 'EnglishPuzzle' },
        { name: 'Savannah', link: 'Savannah' },
        { name: 'AudioCall', link: 'AudioCall' },
        { name: 'Sprint', link: 'Sprint' },
        { name: 'OwnGame', link: 'ownGame' },
      ],
    };
  }

  render() {
    return (
      <div className="navigation-panel_container">
        <ul className="navigation-panel">
          {this.state.links.map((link) => {
            return <Link key={link.name} link={link.link} name={link.name} />;
          })}
        </ul>
      </div>
    );
  }
}
