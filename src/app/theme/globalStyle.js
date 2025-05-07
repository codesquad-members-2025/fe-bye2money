import { css } from '@emotion/react';
import resetStyles from './reset.js';

const globalStyle = (theme) => css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');

  @font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ${resetStyles};

  button {
    cursor: pointer;
  }

  body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    font-family: 'Pretendard', sans-serif;
    background-color: ${theme.colors.grayscale50};

    overflow: hidden;

    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default globalStyle;
