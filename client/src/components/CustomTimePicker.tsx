import { DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface CustomTimePickerProps {
  sxIn?: object;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}

const CustomTimePicker = ({ sxIn, value, onChange }: CustomTimePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopTimePicker
        value={value}
        onChange={onChange}
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
