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
    border:1px solid red;
    
  }

input,
select,
textarea {
  background-color: ${({ theme }) => theme.color.token.surface.default};
  color: ${({ theme }) => theme.color.token.text.default};
  border: 1px solid ${({ theme }) => theme.color.token.border.default};
  font-family: ${({ theme }) => theme.font.sans};
  font-size: ${({ theme }) => theme.font.size.sm};
}

`;
