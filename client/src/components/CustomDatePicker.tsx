import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { SxProps } from "@mui/material";

interface CustomDatePickerProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  sxIn?: SxProps;
}

const CustomDatePicker = ({ value, onChange, sxIn }: CustomDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Due Date"
        value={value}
        onChange={onChange}
        sx={{
          ...sxIn,
          "& label": {
            color: "#6a6c6d",
          },
          "& .MuiSvgIcon-root": {
            fill: "white",
          },
          "& fieldset": {
            borderColor: "#585a5b",
          },
          "& .MuiInputBase-root": {
            "&:hover fieldset": {
              borderColor: "#888888",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#7851A9",
            },
          },
          backgroundColor: "#25282a",
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
