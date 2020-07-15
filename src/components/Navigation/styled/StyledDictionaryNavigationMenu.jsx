import styled from 'styled-components';
import { DEVICE } from '../../../config';

const StyledDictionaryNavigationMenu = styled.div`
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;

    @media ${DEVICE.tablet} {
      height: auto;
      flex-direction: column;
      margin: 20px 0;
    }
  }
  li {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    &:first-child {
      margin-left: 0;
    }

    @media ${DEVICE.tablet} {
      margin-left: 0;
      margin-top: 10px;
      &:first-child {
        margin-top: 0;
      }
    }

    a {
      text-decoration: none;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 26px;
      color: #7d7d7d;
      transition: 0.3s linear;

      &:hover {
        color: #000;
      }
    }

    .active_link {
      color: #000;
    }
  }
`;

export default StyledDictionaryNavigationMenu;
