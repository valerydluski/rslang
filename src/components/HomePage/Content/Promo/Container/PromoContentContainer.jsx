import styled from 'styled-components';
import React from 'react';
import { Translate } from 'react-redux-i18n';

const PromoContentContainer = styled.div`
  width: 100%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  text-align: justify;
`;

const VioletSpan = styled.span`
  width: 100%;
  color: #6550de;
`;

const BlackSpan = styled.span`
  width: 100%;
`;

const VioletParagraph = styled.p`
  width: 100%;
  color: #6550de;
`;

const BlackParagraph = styled.p`
  width: 100%;
`;

const FirstUL = styled.ul`
  width: 100%;
  padding: 0;
  li {
    list-style-type: none;
  }
  li::before {
    color: #6550de;
    content: '•';
    padding-right: 10px;
    font-size: 24px;
  }
`;

const RedParagraph = styled.p`
  width: 100%;
  color: #f56748;
`;

const PromoText = () => {
  return (
    <PromoContentContainer>
      <VioletParagraph>
        <Translate value="Promo.firstLineText" />
      </VioletParagraph>
      <VioletParagraph>
        <Translate value="Promo.firstLineSecondPart" />
      </VioletParagraph>
      <BlackSpan>
        <Translate value="Promo.secondLineFirstPart" />
      </BlackSpan>
      <VioletSpan>
        <Translate value="Promo.secondLineSecondPart" />
      </VioletSpan>
      <BlackSpan>
        <Translate value="Promo.secondLineThirdPart" />
      </BlackSpan>
      <FirstUL>
        <li>
          <Translate value="Promo.firstList" />
        </li>
        <li>
          <Translate value="Promo.secondList" />
        </li>
        <li>
          <Translate value="Promo.thirdList" />
        </li>
        <li>
          <Translate value="Promo.fourthList" />
        </li>
      </FirstUL>
      <BlackSpan>
        <Translate value="Promo.thirdLineFirstPart" />
      </BlackSpan>
      <VioletSpan>
        <Translate value="Promo.thirdLineSecondPart" />
      </VioletSpan>
      <BlackSpan>
        <Translate value="Promo.thirdLineThirdPart" />
      </BlackSpan>
      <BlackParagraph>
        <Translate value="Promo.fourthLineText" />
      </BlackParagraph>
      <BlackParagraph>
        <Translate value="Promo.fifthLineText" />
      </BlackParagraph>
      <RedParagraph>
        <Translate value="Promo.sixthLineText" />
      </RedParagraph>
    </PromoContentContainer>
  );
};

export default PromoText;
