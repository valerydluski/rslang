import styled from 'styled-components';

const StyledMainNavigationMenu = styled.div`
  li {
    list-style: none;
    margin-bottom: 50px;

    a {
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
      line-height: 26px;
      color: #929292;
      transition: 0.3s linear;
      padding-left: 30px;

      &:hover {
        color: #000;
      }
    }

    .active_link {
      color: #000;
      position: relative;

      &::before {
        content: '';
        width: 10px;
        height: 10px;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 4px;
      }
    }
  }

  @media (max-width: 980px) {
    li a {
      padding-left: 20px;
    }
  }

  @media (max-width: 767px) {
    display: none;
    li a {
      color: #ffffff;
    }

    li a:hover {
      color: #fec246;
    }
  }
  li .active_link {
    color: #fec246;
    position: relative;
  }

  li .active_link::before {
    background-color: #fec246;
  }
`;

export default StyledMainNavigationMenu;
