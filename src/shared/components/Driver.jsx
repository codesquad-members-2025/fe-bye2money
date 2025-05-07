import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Divider = styled.div`
  ${({
    orientation = 'horizontal',
    thickness = 1,
    inset = 24,
    color,
    theme,
  }) => {
    const lineColor = color ?? theme.colors.neutralTextDefault;

    if (orientation === 'horizontal') {
      return css`
        height: ${thickness}px;
        background-color: ${lineColor};
        margin: 0 ${inset}px;
      `;
    } else {
      return css`
        width: ${thickness}px;
        background-color: ${lineColor};
        margin: ${inset}px 0;
      `;
    }
  }}
`;

export default Divider;
