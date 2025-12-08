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
          backgroundColor: "#0f1729",
          "& fieldset": {
            borderColor: "rgba(59, 130, 246, 0.15)",
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
