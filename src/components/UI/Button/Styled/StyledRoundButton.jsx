import styled from 'styled-components';
import { DEVICE } from '../../../../config';
import audioIco from '../../Icon/audioIco.svg';
import audiNotActive from '../../Icon/audiNotActive.svg';

const StyledRoundButton = styled.button`
  margin-left: 20px;
  width: 42px;
  height: 42px;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  background: #404497;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.1s linear;
  flex-grow: 1;
  align-self: flex-start;
  flex-shrink: 0;

  &:hover {
    background: #fec246;
  }

  @media ${DEVICE.tablet} {
    width: 70px;
    height: 70px;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
  }

  @media ${DEVICE.mobileL} {
    width: 42px;
    height: 42px;
    font-size: 13px;
    line-height: 16px;
  }
  &.learn_sound-button {
    margin: 0;
    position: absolute;
    top: 40px;
    left: 40px;
    width: 40px;
    height: 40px;
    background: url(${audioIco});
    background-repeat: no-repeat;
    background-size: cover;

    &:hover {
      background: url(${audiNotActive});
      background-repeat: no-repeat;
      background-size: cover;
    }

    @media ${DEVICE.tablet} {
      top: 15px;
      left: 10px;
    }
  }

  &.not-active {
    background: url(${audiNotActive});
    background-repeat: no-repeat;
    background-size: cover;

    &:hover {
      background: url(${audioIco});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;

export default StyledRoundButton;
