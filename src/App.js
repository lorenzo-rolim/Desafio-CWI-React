import { ThemeProvider } from "styled-components";
import MainRoutes from "./routes";
import { GlobalStyle } from "./styles/global-styles";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
