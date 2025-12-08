import { InputAdornment, TextField, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CustomTextFieldProps {
  id: string;
  label: string;
  sxIn?: object;
  rows?: number;
  adornment?: string;
  multiline?: boolean;
  tooltip?: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const CustomTextField = ({
  label,
  sxIn,
  rows,
  adornment,
  onChange,
  id,
  value,
  multiline,
  tooltip,
}: CustomTextFieldProps) => {
  const [adornmentOpacity, setAdornmentOpacity] = useState<number>(0);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (value != "" || focused) setAdornmentOpacity(1);
    else setAdornmentOpacity(0);
  }, [value, focused]);

  return (
    <Tooltip
      slotProps={{
        tooltip: {
          sx: {
            width: 150,
          },
        },
      }}
      arrow
      placement="top"
      title={tooltip}
    >
      <TextField
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => setFocused(false)}
        value={value}
        id={id}
        onChange={onChange}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  color: "#6a6c6d",
                  opacity: adornmentOpacity,
                  transition: "opacity 0.2s",
                }}
              >
                <Typography>{adornment}</Typography>
              </InputAdornment>
            ),
          },
        }}
        maxRows={4}
        minRows={rows}
        multiline={multiline}
        sx={{
          position: "relative",
          ...sxIn,
          "& .MuiInputBase-input": {
            caretColor: "white",
            color: "white",
          },

          "& label": {
            color: "#6a6c6d",
          },

          "& .MuiOutlinedInput-root": {
            backgroundColor: "#0f1729",

            "& fieldset": {
              borderColor: "rgba(59, 130, 246, 0.15)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(59, 130, 246, 0.3)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3b82f6",
            },
          },
        }}
        label={label}
      />
    </Tooltip>
  );
};

export default CustomTextField;
