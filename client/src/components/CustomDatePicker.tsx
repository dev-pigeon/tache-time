import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface CustomDatePickerProps {
  sxIn?: object;
}

const CustomDatePicker = ({ sxIn }: CustomDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
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
        label="Due Date"
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
