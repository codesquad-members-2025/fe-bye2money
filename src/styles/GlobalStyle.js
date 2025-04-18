import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'ChosunNm';
    src: url('/fonts/ChosunCentennial_ttf.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.sans};
    background-color: ${({ theme }) => theme.color.token.surface.default};
    color: ${({ theme }) => theme.color.token.text.default};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
