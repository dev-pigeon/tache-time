import { InputAdornment, TextField, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CustomTextFieldProps {
  id: string;
  widthIn: number | string;
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
  widthIn,
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
          width: widthIn,

          "& .MuiInputBase-input": {
            caretColor: "white",
            color: "white",
          },

          "& label": {
            color: "#6a6c6d",
          },

          "& .MuiOutlinedInput-root": {
            backgroundColor: "#25282a",

            "& fieldset": {
              borderColor: "#585a5b",
            },
          },
        }}
        label={label}
      />
    </Tooltip>
  );
};

export default CustomTextField;
