import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root, .App{
    height: 100%;
    min-height: 100%;
  }

  html {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
