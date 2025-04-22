import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ModalProvider } from "./constants/AlertModal";
import MainPage from "./views/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ModalProvider>
          <AppRoutes />
        </ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
