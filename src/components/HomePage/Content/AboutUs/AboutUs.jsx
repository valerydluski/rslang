import React from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import Title from '../Main/components/Title/styled/UserTitleContainer';
import TitleWithUnderline from '../Main/components/Title/styled/TitleWithUnderline';
import TeamContainer from './components/AboutPersonCard/styled/TeamContainer';
import AboutPersonCard from './components/AboutPersonCard/AboutPersonCard';
import ContentContainer from '../ContentContainer';
import helloImg from '../../../../assets/img/helloImg.svg';

export default function AboutUs(props) {
  const { userName, team } = props;
  return (
    <ContentContainer>
      <Title userName={userName} bg={helloImg} />
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
