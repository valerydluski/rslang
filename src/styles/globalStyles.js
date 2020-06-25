import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root, .App{
    height: 100%;
  }

  html {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
