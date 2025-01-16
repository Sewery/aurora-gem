import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { StyledEngineProvider } from "@mui/material";
import theme from './styles/theme.tsx'
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
const cache = createCache({
  key: "css",
  prepend: true,
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
