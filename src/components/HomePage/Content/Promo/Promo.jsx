import React from 'react';
import { Translate } from 'react-redux-i18n';
import PropTypes from 'prop-types';
import Title from '../../../../containers/Homepage/Content/Title/Title';
import TitleWithUnderline from '../Main/components/Title/styled/TitleWithUnderline';
import ContentContainer from '../ContentContainer';
import PromoText from './Container/PromoContentContainer';
import RepoLink from './Container/PromoRepoLinkContainer';

export default function Promo(props) {
  const { userName } = props;
  return (
    <ContentContainer>
      <Title userName={userName} />
      <TitleWithUnderline>
        <Translate value="HomePage.promo" />
      </TitleWithUnderline>
      <PromoText />
      <TitleWithUnderline>
        <Translate value="HomePage.videoLesson" />
      </TitleWithUnderline>
      <TitleWithUnderline>
        <Translate value="HomePage.sourceRepo" />
      </TitleWithUnderline>
      <RepoLink />
    </ContentContainer>
  );
}

Promo.propTypes = {
  userName: PropTypes.string,
};

Promo.defaultProps = {
  team: [],
  userName: 'user',
};
