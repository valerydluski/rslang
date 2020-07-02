import styled from 'styled-components';

const StyledDictionaryNavigationMenu = styled.div`
  ul {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
  }
  li {
    list-style: none;

    &:not(:first-child) {
      margin-left: 30px;
    }

    a {
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
      line-height: 26px;
      color: #929292;
      transition: 0.3s linear;

      &:hover {
        text-decoration: underline;
        color: #000;
      }
    }

    .active_link {
      color: #000;
      text-decoration: underline;
    }
  }
`;

export default StyledDictionaryNavigationMenu;
