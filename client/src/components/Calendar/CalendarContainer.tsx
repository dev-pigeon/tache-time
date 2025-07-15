import { Stack, Tooltip, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import { useCalendarContainerReturnProps } from "../../hooks/useCalendarContainer";
import "../../styles/CalendarContainer.css";
import DateContainer from "./DateContainer";
import WorkLabel from "./WorkLabel";
import ViewControlContainer from "../ViewControl/ViewControlContainer";
import { useViewControlReturn } from "../../hooks/useViewControl";

interface CalendarContainerProps {
  calendarContainerHook: useCalendarContainerReturnProps;
  viewControlHook: useViewControlReturn;
}

const CalendarContainer = ({
  calendarContainerHook,
  viewControlHook,
}: CalendarContainerProps) => {
  const containerHeight = useRef<number>(0);
  const editModeTT =
    "In edit mode you can change your availability as well as add and delete tasks. To view your scheduled tasks, please switch to view mode.";
  const viewModeTT =
    "In view mode you can view your scheduled tasks. To either add or delete tasks please change to edit mode.";

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
      <Stack direction={"row"} id="calendar-label-container">
        <Tooltip
          slotProps={{
            tooltip: {
              sx: {
                fontSize: "18px",
              },
            },
          }}
          title={viewControlHook.editMode == true ? editModeTT : viewModeTT}
          arrow
          placement="top"
        >
          <Typography id="calendar-label">
            {viewControlHook.editMode ? `Edit Mode` : "View Mode"}{" "}
          </Typography>
        </Tooltip>
        <ViewControlContainer viewControlHook={viewControlHook} />
      </Stack>
      <Stack position={"absolute"} top={10} right={25}>
        <WorkLabel text="Available" bgColor="#67ba6b" />
        <WorkLabel text="Unavailable" bgColor="#545454" />
      </Stack>

      {calendarContainerHook.days &&
        calendarContainerHook.days.map((value, index) => (
          <DateContainer
            mode={viewControlHook.editMode}
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
