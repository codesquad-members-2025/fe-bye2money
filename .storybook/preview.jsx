import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from '../src/app/theme/globalStyle';
import theme from '../src/app/theme/theme';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyle} />
          <Story />
        </ThemeProvider>
      </>
    ),
  ],
};

export default preview;
