import styled from 'styled-components';
import FalseAnswerIcon from '../../../components/UI/Icon/false-answer.svg';
import TrueAnswerIcon from '../../../components/UI/Icon/true-answer.svg';
import { DEVICE } from '../../../config';

const AnswerButton = styled.div`
  width: 140px;
  height: 140px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 20px;
  text-transform: lowercase;
  line-height: 140px;
  color: #ffffff;
  background-size: cover;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (hover: hover) {
    &:hover {
      filter: contrast(1.4);
    }
  }

  @media ${DEVICE.tablet} {
    width: 100px;
    height: 100px;
  }
`;

const TrueButtonStyled = styled(AnswerButton)`
  background-image: url(${TrueAnswerIcon});
`;

const FalseButtonStyled = styled(AnswerButton)`
  background-image: url(${FalseAnswerIcon});
`;

export { TrueButtonStyled, FalseButtonStyled };
