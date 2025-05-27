import { Stack } from "@mui/material";

import "../styles/CalendarContainer.css";
import DateContainer from "./DateContainer";
import useCalendarContainer from "../hooks/useCalendarContainer";
import { useEffect } from "react";
import WorkLabel from "./WorkLabel";

const CalendarContainer = () => {
  const calendarContainerHook = useCalendarContainer();

  useEffect(() => {
    calendarContainerHook.initializeDates();
  }, []);

  return (
    <Stack
      height={() => calendarContainerHook.getCalendarContainerHeight()}
      direction={"row"}
      gap={2}
      id="calendar-container"
      sx={{ boxShadow: 10 }}
    >
      <Stack position={"absolute"} top={10} right={50}>
        <WorkLabel text="Available for work" bgColor="#67ba6b" />
        <WorkLabel text="Unavailable for work" bgColor="#545454" />
      </Stack>

      {calendarContainerHook.dates &&
        calendarContainerHook.dates.map((value, index) => (
          <DateContainer key={`date-container#${index}`} date={value} />
        ))}
    </Stack>
  );
};

export default CalendarContainer;
