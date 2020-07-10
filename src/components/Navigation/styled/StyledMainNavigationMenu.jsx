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

  @media (max-width: 1200px) {
    li a {
      padding-left: 0;
    }

    li .active_link::before {
      left: -20px;
    }
  }

  @media (max-width: 767px) {
    display: none;

    li {
      margin-bottom: 50px;
      margin-left: 65%;
    }

    li:first-of-type {
      margin-top: 20vh;
    }

    span {
      font-size: 22px;
    }

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

  @media (max-width: 600px) {
    li {
      margin-left: 55%;
    }
  }

  @media (max-width: 400px) {
    li {
      margin-left: 45%;
    }
  }
`;

export default StyledMainNavigationMenu;
