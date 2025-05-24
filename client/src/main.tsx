import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/Theme.tsx";
import "./styles/index.css";
import App from "./App.tsx";
import { ThemeVariablesProvider } from "./styles/ThemeVariablesProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeVariablesProvider>
        <App />
      </ThemeVariablesProvider>
    </ThemeProvider>
  </StrictMode>
);
