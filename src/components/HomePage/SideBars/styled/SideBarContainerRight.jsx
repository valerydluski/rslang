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
    padding: 40px 40px 0 290px;
    grid-column-start: 2;
    grid-row-start: 1;
    width: auto;
    min-height: auto;
    background-color: #ffffff;
    & > .user-title {
      display: block;
    }
  }

  @media ${DEVICE.tablet} {
    padding: 30px 30px 0 30px;
    display: flex;
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
    justify-content: space-around;
    margin: 0;
    padding: 0;
    padding-top: 15px;
    @media ${DEVICE.laptop} {
      justify-content: center;
    }
    @media ${DEVICE.tablet} {
      margin: 0;
      width: 100%;
    }

    & li {
      margin-bottom: 25px;
      @media ${DEVICE.laptop} {
        margin: 0 !important;
      }
    }

    & a {
      padding-left: 0 !important;
      height: 40px;
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s linear;
      &:hover {
        background-color: #fec246;
      }

      & > span {
        font-size: 19px;
      }
    }

    & a[href='/learn'] {
      padding-left: 0;
      font-size: 19px;
      line-height: 19px;
      font-weight: 600;
      color: #ffffff;
      background-color: #f56748;
      @media ${DEVICE.laptop} {
        margin-right: 20px;
      }
    }

    & a[href='/repeat'] {
      padding-left: 0;
      font-size: 19px;
      line-height: 19px;
      font-weight: 600;
      color: #ffffff;
      background-color: #6550de;
    }
  }
`;

export default SideBarContainerRight;
