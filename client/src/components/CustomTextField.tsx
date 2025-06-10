import { InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CustomTextFieldProps {
  id: string;
  widthIn: number | string;
  label: string;
  sxIn?: object;
  rows?: number;
  adornment?: string;
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
}: CustomTextFieldProps) => {
  const [adornmentOpacity, setAdornmentOpacity] = useState<number>(0);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (value != "" || focused) setAdornmentOpacity(1);
    else setAdornmentOpacity(0);
  }, [value, focused]);

  return (
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
      minRows={rows}
      multiline
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
    ></TextField>
  );
};

export default CustomTextField;
