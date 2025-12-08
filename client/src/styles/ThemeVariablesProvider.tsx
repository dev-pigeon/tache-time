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

    // Background colors
    root.style.setProperty(
      "--background-default",
      theme.palette.background.default
    );
    root.style.setProperty(
      "--background-paper",
      theme.palette.background.paper
    );
    root.style.setProperty("--background-input", "#0f1729");

    // Text colors
    root.style.setProperty("--text-primary", theme.palette.text.primary);
    root.style.setProperty("--text-secondary", theme.palette.text.secondary);
    root.style.setProperty("--text-subtitle", theme.palette.secondary.main);
    root.style.setProperty("--text-muted", theme.palette.secondary.light);

    // Accent colors (modern blue palette)
    root.style.setProperty("--accent-main", theme.palette.primary.main);
    root.style.setProperty("--accent-dark", theme.palette.primary.dark);
    root.style.setProperty("--accent-light", theme.palette.text.secondary);

    // Status colors
    root.style.setProperty("--success-main", theme.palette.success.main);
    root.style.setProperty("--error-main", theme.palette.error.main);

    // Gradients (complex, better as CSS vars)
    root.style.setProperty(
      "--gradient-bg",
      "linear-gradient(135deg, #0a0f1e 0%, #1a2332 50%, #0a0f1e 100%)"
    );
    root.style.setProperty(
      "--gradient-accent",
      "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
    );

    // Shadows
    root.style.setProperty(
      "--shadow-glow",
      "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(59, 130, 246, 0.2)"
    );
    root.style.setProperty(
      "--shadow-button",
      "0 4px 12px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
    );
    root.style.setProperty(
      "--shadow-button-hover",
      "0 6px 20px rgba(59, 130, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
    );
    root.style.setProperty(
      "--shadow-inset",
      "inset 0 2px 4px rgba(0, 0, 0, 0.3)"
    );
    root.style.setProperty("--shadow-text", "0 2px 4px rgba(0, 0, 0, 0.3)");

    // Borders
    root.style.setProperty(
      "--border-default",
      "1px solid rgba(59, 130, 246, 0.1)"
    );
    root.style.setProperty(
      "--border-input",
      "1px solid rgba(59, 130, 246, 0.15)"
    );
    root.style.setProperty(
      "--border-hover",
      "1px solid rgba(59, 130, 246, 0.3)"
    );
    root.style.setProperty("--border-bottom-accent", "2px solid #1e3a8a");

    return () => {
      // Cleanup
      root.style.removeProperty("--background-default");
      root.style.removeProperty("--background-paper");
      root.style.removeProperty("--background-input");
      root.style.removeProperty("--text-primary");
      root.style.removeProperty("--text-secondary");
      root.style.removeProperty("--text-subtitle");
      root.style.removeProperty("--text-muted");
      root.style.removeProperty("--accent-main");
      root.style.removeProperty("--accent-dark");
      root.style.removeProperty("--accent-light");
      root.style.removeProperty("--success-main");
      root.style.removeProperty("--error-main");
      root.style.removeProperty("--gradient-bg");
      root.style.removeProperty("--gradient-accent");
      root.style.removeProperty("--shadow-glow");
      root.style.removeProperty("--shadow-button");
      root.style.removeProperty("--shadow-button-hover");
      root.style.removeProperty("--shadow-inset");
      root.style.removeProperty("--shadow-text");
      root.style.removeProperty("--border-default");
      root.style.removeProperty("--border-input");
      root.style.removeProperty("--border-hover");
      root.style.removeProperty("--border-bottom-accent");
    };
  }, [theme]);

  return <>{children}</>;
}
