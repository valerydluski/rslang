import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const SideBarContainerRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  background-color: #f3f3f3;
  padding: 30px;
  min-height: 100%;
  box-sizing: border-box;

  @media ${DEVICE.laptop} {
    display: ${(props) => (props.pathName === '/home' ? 'flex' : 'none')};
    order: -1;
    padding: 30px 30px 0 290px;
    width: auto;
    min-height: auto;
    background-color: #ffffff;
    & > .user-title {
      display: block;
    }
  }

  @media ${DEVICE.tablet} {
    padding: 30px 30px 0 30px;
    width: auto;
    grid-column-start: auto;
    grid-row-start: auto;
    flex-direction: column;
    background-color: #ffffff;
    width: 100%;
    height: fit-content;
  }

  & > .user-title {
    display: none;
    margin-bottom: 30px;
    @media ${DEVICE.laptop} {
      display: block;
    }
  }

  & > div:last-child {
    display: flex;
  }

  & nav {
    width: 100%;
  }

  & ul {
    border-top: 1px solid #c4c4c4;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    padding-top: 15px;
    @media ${DEVICE.laptop} {
      padding-top: 30px;
    }
    @media ${DEVICE.tablet} {
      margin: 0;
      width: 100%;
    }

    & li {
      margin: 5px;
      &:last-child {
        margin-bottom: 25px;
      }
      @media ${DEVICE.laptop} {
        &:last-child {
          margin-bottom: 5px;
        }
      }
    }

    & a {
      padding-left: 0;
      height: 40px;
      width: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s linear;

      & > span {
        font-size: 16px;
      }
    }

    & a[href='/learn'] {
      padding-left: 0;
      font-size: 19px;
      line-height: 19px;
      font-weight: 600;
      color: #ffffff;
      background-color: #f56748;
      &:hover {
        background-color: #fec246;
        color: #ffffff;
      }
    }

    & a[href='/repeat'] {
      padding-left: 0;
      font-size: 19px;
      line-height: 19px;
      font-weight: 600;
      color: #ffffff;
      background-color: #6550de;
      &:hover {
        background-color: #fec246;
        color: #ffffff;
      }
    }
  }
`;

export default SideBarContainerRight;
