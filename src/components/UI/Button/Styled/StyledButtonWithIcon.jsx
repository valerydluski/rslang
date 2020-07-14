import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const StyledButtonWithIcon = styled.button`
  margin-left: 45px;
  width: 150px;
  color: #7d7d7d;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  margin-bottom: 25px;
  transition: 0.3s linear;

  @media ${DEVICE.tablet} {
    color: #ffffff;
  }

  &::before {
    content: '';
    width: 28px;
    height: 28px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    transition: 0.3s linear;

    @media ${DEVICE.tablet} {
      background-image: url(${(props) => props.iconTablet});
    }
  }

  &:hover {
    color: #6550de;

    &::before {
      background-image: url(${(props) => props.iconHover});
    }
  }
`;

export default StyledButtonWithIcon;
