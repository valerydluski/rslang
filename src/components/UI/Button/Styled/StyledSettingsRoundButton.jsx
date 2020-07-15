import styled from 'styled-components';
import StyledRoundButton from './StyledRoundButton';
import { DEVICE } from '../../../../config';

const StyledSettingsRoundButton = styled(StyledRoundButton)`
  align-self: flex-end;
  width: 130px;
  height: 130px;
  margin: 20px 0;
  font-size: 20px;

  @media ${DEVICE.tablet} {
    width: 130px;
    height: 130px;
    margin: 20px 0;
    font-size: 20px;
  }
`;

export default StyledSettingsRoundButton;
