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

  /* 버튼 커서 */
  button {
    cursor: pointer;
  }

  /* 글로벌 커스텀 스타일 */
  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Pretendard', sans-serif;
    background-color: ${theme.colors.grayscale50};

    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }
`;

export default globalStyle;
