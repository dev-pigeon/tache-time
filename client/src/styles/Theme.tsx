import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#1e1e1e",
      paper: "#333",
    },
    secondary: { main: "#73cff" }, // accent color
    text: {
      primary: "#ffffff",
      secondary: "#cccccc",
    },
  },
});
