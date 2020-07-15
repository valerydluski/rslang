import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const Left = styled.div`
  width: 100px;
  display: ${(props) => (props.isImageAssociation ? 'flex' : 'none')};
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  @media ${DEVICE.tablet} {
    width: 80px;
    .small-img {
      width: 80px;
      height: 80px;
    }
  }

  @media ${DEVICE.mobileL} {
    width: 60px;
    .small-img {
      width: 60px;
      height: 60px;
    }
    margin-bottom: 10px;
  }
`;

export default Left;
