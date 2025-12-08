import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6", // Modern blue
      dark: "#2563eb", // Darker blue for hover
      light: "#60a5fa", // Lighter blue for accents
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#a5b4fc", // Light indigo for secondary text
      dark: "#94a3b8", // Slate for tertiary text
      light: "#64748b", // Muted text
    },
    background: {
      default: "#0a0f1e", // Primary dark background
      paper: "#1a2332", // Card/container background
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#a5b4fc", // Light indigo
      disabled: "#64748b", // Muted
    },
    success: {
      main: "#bed9bf",
    },
    error: {
      main: "rgba(200, 60, 60, .95)",
    },
    divider: "rgba(59, 130, 246, 0.1)",
  },
  typography: {
    fontFamily: "'Times New Roman', Times, serif",
    h1: {
      fontSize: "38px",
      fontWeight: "bold",
      color: "#ffffff",
    },
    h2: {
      fontSize: "28px",
      fontWeight: "normal",
      color: "#ffffff",
    },
    body1: {
      color: "#ffffff",
    },
    body2: {
      color: "#a5b4fc",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage:
            "linear-gradient(135deg, #0a0f1e 0%, #1a2332 50%, #0a0f1e 100%)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(59, 130, 246, 0.2)",
          border: "1px solid rgba(59, 130, 246, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "15px",
        },
        contained: {
          background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
          boxShadow:
            "0 4px 12px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(59, 130, 246, 0.5)",
          "&:hover": {
            background: "#2563eb",
            boxShadow:
              "0 6px 20px rgba(59, 130, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#0f1729",
            borderRadius: "12px",
            "& fieldset": {
              borderColor: "rgba(59, 130, 246, 0.15)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(59, 130, 246, 0.3)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3b82f6",
              boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#64748b",
            "&.Mui-focused": {
              color: "#3b82f6",
            },
          },
        },
      },
    },
  },
});
