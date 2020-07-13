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
    justify-content: space-around;
    margin: 0;
    padding: 0;
    padding-top: 15px;
    @media ${DEVICE.laptop} {
      justify-content: space-between;
      padding-top: 0;
    }
    @media ${DEVICE.tablet} {
      margin: 0;
      width: 100%;
    }

    & li {
      margin-bottom: 25px;
      @media ${DEVICE.laptop} {
        margin-bottom: 0;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    & a {
      padding-left: 0;
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
