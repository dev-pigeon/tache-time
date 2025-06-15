import { Stack } from "@mui/material";
import { useRef, useEffect } from "react";
import { useCalendarContainerReturnProps } from "../../hooks/useCalendarContainer";

import "../../styles/CalendarContainer.css";
import DateContainer from "./DateContainer";
import WorkLabel from "./WorkLabel";

interface CalendarContainerProps {
  calendarContainerHook: useCalendarContainerReturnProps;
}

const CalendarContainer = ({
  calendarContainerHook,
}: CalendarContainerProps) => {
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

      {calendarContainerHook.days &&
        calendarContainerHook.days.map((value, index) => (
          <DateContainer
            toggleTimeUnit={calendarContainerHook.toggleTimeUnit}
            heightIn={containerHeight.current * 0.75}
            key={`date-container#${index}`}
            day={value}
          />
        ))}
    </Stack>
  );
};

export default CalendarContainer;
