import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const MenuContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .navbar-list {
    flex-grow: 1;
  }

  @media ${DEVICE.tablet} {
    box-sizing: border-box;
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: #404497;
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: 0.3s ease;
    align-items: flex-end;
    padding-right: 70px;
    padding-top: 120px;

    & li {
      text-align: right;
      & a {
        color: #ffffff;
        padding-right: 30px;
        &:hover {
          color: #fec246;
        }
      }
      & .active_link {
        color: #fec246;
        &::before {
          background-color: #fec246;
          left: auto;
          right: 0;
        }
      }
      & span {
        margin: 0;
        margin-right: 20px;
      }
    }

    & button:last-of-type {
      margin-bottom: 150px;
    }
  }
`;

export default MenuContainer;
