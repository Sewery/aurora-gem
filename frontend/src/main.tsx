import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, StyledEngineProvider } from "@mui/material";
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
const cache = createCache({
  key: "css",
  prepend: true,
});
const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});
root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);
