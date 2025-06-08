import { Stack } from "@mui/material";
import { useRef, useEffect } from "react";
import useCalendarContainer from "../../hooks/useCalendarContainer";
import DateContainer from "./DateContainer";
import WorkLabel from "./WorkLabel";
import "../../styles/CalendarContainer.css";

const CalendarContainer = () => {
  const calendarContainerHook = useCalendarContainer();
  const containerHeight = useRef<number>(0);

  useEffect(() => {
    calendarContainerHook.initializeDates();
    containerHeight.current =
      calendarContainerHook.getCalendarContainerHeight();
  }, []);

  return (
    <Stack
      height={containerHeight.current}
      direction={"row"}
      gap={2}
      id="calendar-container"
      sx={{ boxShadow: 10 }}
    >
      <Stack position={"absolute"} top={10} right={25}>
        <WorkLabel text="Available" bgColor="#67ba6b" />
        <WorkLabel text="Unavailable" bgColor="#545454" />
      </Stack>

      {calendarContainerHook.dates &&
        calendarContainerHook.dates.map((value, index) => (
          <DateContainer
            heightIn={containerHeight.current * 0.75}
            key={`date-container#${index}`}
            date={value}
          />
        ))}
    </Stack>
  );
};

export default CalendarContainer;
