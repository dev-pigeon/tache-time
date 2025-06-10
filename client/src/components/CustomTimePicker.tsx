import { DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface CustomTimePickerProps {
  sxIn?: object;
}

const CustomTimePicker = ({ sxIn }: CustomTimePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopTimePicker
        sx={{
          ...sxIn,
          backgroundColor: "#25282a",
          "& fieldset": {
            borderColor: "#585a5b",
          },
          "& .MuiSvgIcon-root": {
            fill: "white",
          },
        }}
        label="Time Due"
        defaultValue={dayjs()}
      />
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
