import React from "react";

// Base card styling without theme-specific colors
export const baseCard: React.CSSProperties = {
  borderRadius: "16px",
  padding: "32px",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
};

// Base container for centering content
export const baseContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "20px",
};

// Base title styling
export const baseTitle: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: "8px",
  letterSpacing: "-0.5px",
};

// Base subtitle styling
export const baseSubtitle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 400,
  marginBottom: "32px",
};

// Base tab container
export const baseTabContainer: React.CSSProperties = {
  display: "flex",
  borderRadius: "12px",
  marginBottom: "24px",
  width: "100%",
  maxWidth: "400px",
};

// Base tab button
export const baseTabButton: React.CSSProperties = {
  flex: 1,
  padding: "12px 24px",
  border: "none",
  background: "transparent",
  fontSize: "14px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.3s ease",
  borderRadius: "8px",
};

// Base submit button
export const baseSubmitButton: React.CSSProperties = {
  width: "100%",
  padding: "14px 24px",
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
};

// Base input wrapper
export const baseInputWrapper: React.CSSProperties = {
  position: "relative",
  width: "100%",
  marginBottom: "20px",
  borderRadius: "12px",
  transition: "all 0.3s ease",
};

// Base input with icon
export const baseInputWithIcon: React.CSSProperties = {
  width: "100%",
  padding: "14px 44px",
  fontSize: "15px",
  background: "transparent",
  border: "none",
  outline: "none",
  transition: "all 0.3s ease",
};

// Base input icon positioning
export const baseInputIcon: React.CSSProperties = {
  position: "absolute",
  left: "14px",
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
};

// Base password toggle icon
export const basePasswordIcon: React.CSSProperties = {
  position: "absolute",
  right: "14px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
};

// Base status containers
export const baseStatusContainerSuccess: React.CSSProperties = {
  padding: "16px",
  borderRadius: "12px",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontSize: "14px",
};

export const baseStatusContainerError: React.CSSProperties = {
  ...baseStatusContainerSuccess,
};
