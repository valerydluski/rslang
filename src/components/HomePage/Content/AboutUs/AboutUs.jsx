import React from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import Title from '../../../../containers/Homepage/Content/Title/Title';
import TitleWithUnderline from '../Main/components/Title/styled/TitleWithUnderline';
import TeamContainer from './components/AboutPersonCard/styled/TeamContainer';
import AboutPersonCard from './components/AboutPersonCard/AboutPersonCard';
import ContentContainer from '../ContentContainer';

export default function AboutUs(props) {
  const { userName, team } = props;
  return (
    <ContentContainer>
      <div style={{ marginBottom: '40px' }}>
        <Title userName={userName} />
      </div>
      <TitleWithUnderline>
        <Translate value="HomePage.about" />
      </TitleWithUnderline>
      <TeamContainer>
        {team.map((member) => {
          const { poster, title, description } = member;
          return (
            <AboutPersonCard key={title} poster={poster} title={title} description={description} />
          );
        })}
      </TeamContainer>
    </ContentContainer>
  );
}

AboutUs.propTypes = {
  team: PropTypes.instanceOf(Array),
  userName: PropTypes.string,
};

AboutUs.defaultProps = {
  team: [],
  userName: 'user',
};
