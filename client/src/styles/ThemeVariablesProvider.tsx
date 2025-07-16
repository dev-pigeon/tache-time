import { useTheme } from "@mui/material";

import { useEffect } from "react";

export function ThemeVariablesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  useEffect(() => {
    const root = document.body;

    root.style.setProperty("--background-default", "#101517");
    root.style.setProperty("--background-paper", "#1e1e1e");
    root.style.setProperty("--text-secondary", "black");
    root.style.setProperty("--text-subtitle", "#CCCCCC");
    root.style.setProperty("--text-primary", theme.palette.text.primary);

    return () => {
      root.style.removeProperty("--background-default");
      root.style.removeProperty("--background-paper");
      root.style.removeProperty("--primary-main");
      root.style.removeProperty("--secondary-main");
      root.style.removeProperty("--text-primary");
    };
  }, [theme]);

  return <>{children}</>;
}
