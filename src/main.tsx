// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "./app/App";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
