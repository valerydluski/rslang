import styled from 'styled-components';
import { DEVICE } from '../../../config';

const StyledFormNamesContainer = styled.div`
  display: flex;
  margin-left: 300px;
  width: 100%;
  align-items: center;
  a {
    display: block;
    font-weight: bold;
    font-size: 26px;
    line-height: 32px;
    margin-left: 60px;
    color: #b2b2b2;
    text-decoration: none;
    &:visited {
      color: #b2b2b2;
    }
  }
  @media ${DEVICE.laptop} {
    margin-left: 60px;
    width: calc(100% - 60px);
  }

  @media ${DEVICE.tablet} {
    flex-direction: column;
    align-items: baseline;
    a {
      margin-top: 20px;
      margin-left: 0;
    }
  }

  @media ${DEVICE.mobileL} {
    margin-left: 0;
    width: 100%;
    white-space: nowrap;
  }
`;

export default StyledFormNamesContainer;
