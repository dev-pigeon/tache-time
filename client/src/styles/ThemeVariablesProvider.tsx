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

    root.style.setProperty(
      "--background-default",
      theme.palette.background.default
    );
    root.style.setProperty(
      "--background-paper",
      theme.palette.background.paper
    );

    root.style.setProperty("--secondary-main", theme.palette.secondary.main);
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
