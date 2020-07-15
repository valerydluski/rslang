import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const StyledCard = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  font-size: 25px;
  color: #000;
  border: 1px solid #cecece;

  @media ${DEVICE.mobileL} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`;

export default StyledCard;
