import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;  
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  html, body, button {
    font-family: 'Noto Sans JP', sans-serif;
  }

  pre {
    padding: 8px;
  }
`;

export { GlobalStyle };
