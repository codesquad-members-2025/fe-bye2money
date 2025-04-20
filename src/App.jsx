import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import FormBox from "./units/FormBox";
import { ModalProvider } from "./constants/AlertModal";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <ModalProvider>
          <FormBox />
        </ModalProvider>
      </GlobalStyle>
    </ThemeProvider>
  );
}
