import styled from 'styled-components';
import React from 'react';
import { Translate } from 'react-redux-i18n';

const RepoLinkContainer = styled.div`
  width: 100%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  text-align: justify;
`;

const BlackParagraph = styled.p`
  margin-bottom: 50px;
`;

const BlackSpan = styled.span`
  width: 100%;
`;

const StyledLink = styled.a`
  width: 100%;
  text-decoration: none;
`;

const RepoLink = () => {
  return (
    <RepoLinkContainer>
        <BlackParagraph>
      <BlackSpan>
        <Translate value="Promo.linkDescriptionFirstPart" />
      </BlackSpan>
      <BlackSpan>
        <StyledLink href="https://github.com/valerydluski/rslang">
        <Translate value="Promo.linkDescriptionSecondPart" />
        </StyledLink>
      </BlackSpan>
      <BlackSpan>
        <Translate value="Promo.linkDescriptionThirdPart" />
      </BlackSpan>
      </BlackParagraph>
    </RepoLinkContainer>
  );
};
export default RepoLink;
