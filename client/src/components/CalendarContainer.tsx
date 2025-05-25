import { Stack } from "@mui/material";

import "../styles/CalendarContainer.css";
import DateContainer from "./DateContainer";

const CalendarContainer = () => {
  return (
    <Stack
      direction={"row"}
      id="calendar-container"
      gap={2}
      sx={{ boxShadow: 10 }}
    >
      <DateContainer date="May 25th" />
    </Stack>
  );
};

export default CalendarContainer;
