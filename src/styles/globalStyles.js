import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root, .App{
    height: 100%;
    min-height: 100%;
    max-width:100%;
    margin: 0 auto;
  }

  html {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    background: #FAFAFA;
  }

  .toast-container {
    font-size: 22px;
  }
`;

export default GlobalStyle;
