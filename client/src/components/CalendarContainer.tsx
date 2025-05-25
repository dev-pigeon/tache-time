import { Stack } from "@mui/material";

import "../styles/CalendarContainer.css";
import DateContainer from "./DateContainer";
import useCalendarContainer from "../hooks/useCalendarContainer";
import { useEffect } from "react";

const CalendarContainer = () => {
  const calendarContainerHook = useCalendarContainer();

  useEffect(() => {
    calendarContainerHook.initializeDates();
  }, []);

  return (
    <Stack
      direction={"row"}
      gap={0.5}
      id="calendar-container"
      sx={{ boxShadow: 10 }}
    >
      {calendarContainerHook.dates &&
        calendarContainerHook.dates.map((value, index) => (
          <DateContainer key={`date-container#${index}`} date={value} />
        ))}
    </Stack>
  );
};

export default CalendarContainer;
