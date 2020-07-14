import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const Center = styled.div`
  margin: 0 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;

  @media ${DEVICE.mobileL} {
    width: 230px;
    margin: 0;
  }

  & > p.word {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
    color: #000;
    @media ${DEVICE.mobileL} {
      text-align: center;
    }
  }
  & > p.additional {
    margin: 0;
    font-size: 10px;
    color: #7d7d7d;
    margin-bottom: 3px;
  }

  & > p.info {
    margin: 0;
    font-size: 10px;
    color: #7d7d7d;
    margin-bottom: 3px;
  }
`;

export default Center;
