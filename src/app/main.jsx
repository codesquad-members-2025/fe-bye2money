import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import AppRouter from './router.jsx';
import globalStyle from './theme/globalStyle';
import theme from './theme/theme';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <AppRouter>
        <App />
      </AppRouter>
    </ThemeProvider>
  </StrictMode>
);
