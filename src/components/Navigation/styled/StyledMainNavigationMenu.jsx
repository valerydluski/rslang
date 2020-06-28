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
`;

export default StyledMainNavigationMenu;
