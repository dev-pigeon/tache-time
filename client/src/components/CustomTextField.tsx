import { InputAdornment, TextField, Typography } from "@mui/material";

interface CustomTextFieldProps {
  widthIn: number | string;
  label: string;
  sxIn?: object;
  rows?: number;
  // onChange
  // value
}

const CustomTextField = ({
  widthIn,
  label,
  sxIn,
  rows,
}: CustomTextFieldProps) => {
  return (
    <TextField
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

        "& label.Mui-focused": {
          color: "#7851A9",
          fontSize: 17,
        },
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#25282a",
          "&.Mui-focused fieldset": {
            borderColor: "#7851A9",
          },
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
