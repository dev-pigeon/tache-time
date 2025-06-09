import { InputAdornment, TextField, Typography } from "@mui/material";

interface CustomTextFieldProps {
  widthIn: number | string;
  label: string;
  sxIn?: object;
  rows?: number;
  adornment?: string;
  // onChange
  // value
}

const CustomTextField = ({
  widthIn,
  label,
  sxIn,
  rows,
  adornment,
}: CustomTextFieldProps) => {
  return (
    <TextField
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                color: "#6a6c6d",

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
