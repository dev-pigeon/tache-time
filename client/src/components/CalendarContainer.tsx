import { Stack } from "@mui/material";

import "../styles/CalendarContainer.css";
import DateContainer from "./DateContainer";

const CalendarContainer = () => {
  return (
    <Stack
      direction={"row"}
      gap={0.5}
      id="calendar-container"
      sx={{ boxShadow: 10 }}
    >
      <DateContainer date="May 25th" />
    </Stack>
  );
};

export default CalendarContainer;
