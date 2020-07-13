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

const FirstParagraph = styled.p`
  width: 100%;
  color: #6550de;
`;

const FirstParagraphSecondPart = styled.p`
  width: 100%;
  color: #6550de;
`;

const SecondParagraph = styled.p`
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

const ThirdParagraph = styled.p`
  width: 100%;
`;

const FourthParagraph = styled.p`
  width: 100%;
`;

const FifthParagraph = styled.p`
  width: 100%;
`;

const SixthParagraph = styled.p`
  width: 100%;
  color: #f56748;
`;

const PromoText = () => {
  return (
    <PromoContentContainer>
      <FirstParagraph>
        <Translate value="Promo.firstLineText" />
      </FirstParagraph>
      <FirstParagraphSecondPart>
        <Translate value="Promo.firstLineSecondPart" />
      </FirstParagraphSecondPart>
      <SecondParagraph>
        <Translate value="Promo.secondLineText" />
      </SecondParagraph>
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
      <ThirdParagraph>
        <Translate value="Promo.thirdLineText" />
      </ThirdParagraph>
      <FourthParagraph>
        <Translate value="Promo.fourthLineText" />
      </FourthParagraph>
      <FifthParagraph>
        <Translate value="Promo.fifthLineText" />
      </FifthParagraph>
      <SixthParagraph>
        <Translate value="Promo.sixthLineText" />
      </SixthParagraph>
    </PromoContentContainer>
  );
};

export default PromoText;
