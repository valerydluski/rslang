import styled from 'styled-components';
import FalseAnswerIcon from '../../../components/UI/Icon/false-answer.svg';
import TrueAnswerIcon from '../../../components/UI/Icon/true-answer.svg';

const AnswerButton = styled.div`
  width: 140px;
  height: 140px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 20px;
  text-transform: lowercase;
  line-height: 140px;
  color: #ffffff;
  text-align: center;
  background-size: cover;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      filter: contrast(1.4);
    }
  }
`;

const TrueButtonStyled = styled(AnswerButton)`
  background-image: url(${TrueAnswerIcon});
`;

const FalseButtonStyled = styled(AnswerButton)`
  background-image: url(${FalseAnswerIcon});
`;

export { TrueButtonStyled, FalseButtonStyled };
