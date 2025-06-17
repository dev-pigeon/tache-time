import { Alert, Box } from "@mui/material";
import { useValidationReturn } from "../hooks/useValidation";

import "../styles/ValidationContainer.css";

interface ValidationContainerProps {
  validationHook: useValidationReturn;
}

const ValidationContainer = ({ validationHook }: ValidationContainerProps) => {
  return (
    <>
      {validationHook.message && (
        <Alert id={"validation-alert"} severity={validationHook.success}>
          {validationHook.message}
        </Alert>
      )}
    </>
  );
};

export default ValidationContainer;
