import { Stack, Tooltip, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import { useCalendarContainerReturnProps } from "../../hooks/useCalendarContainer";
import "../../styles/CalendarContainer.css";
import DateContainer from "./DateContainer";
import WorkLabel from "./WorkLabel";
import ModeControl from "../ModeControl/ModeControl";
import { useModeControlReturn } from "../../hooks/useModeControl";

interface CalendarContainerProps {
  calendarContainerHook: useCalendarContainerReturnProps;
  modeControlHook: useModeControlReturn;
}

const CalendarContainer = ({
  calendarContainerHook,
  modeControlHook,
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
      onMouseUp={calendarContainerHook.handleDragEnd}
      onMouseLeave={calendarContainerHook.handleDragEnd}
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
          title={modeControlHook.editMode == true ? editModeTT : viewModeTT}
          arrow
          placement="top"
        >
          <Typography id="calendar-label">
            {modeControlHook.editMode ? `Edit Mode` : "View Mode"}{" "}
          </Typography>
        </Tooltip>
        <ModeControl modeControlHook={modeControlHook} />
      </Stack>
      <Stack position={"absolute"} top={10} right={25}>
        <WorkLabel text="Available" bgColor="#3b82f6" />
        <WorkLabel text="Unavailable" bgColor="#64748b" />
      </Stack>

      {calendarContainerHook.days &&
        calendarContainerHook.days.map((value, index) => (
          <DateContainer
            mode={modeControlHook.editMode}
            toggleTimeUnit={calendarContainerHook.toggleTimeUnit}
            heightIn={containerHeight.current * 0.75}
            key={`date-container#${index}`}
            day={value}
            onDragStart={calendarContainerHook.handleDragStart}
            onDragEnter={calendarContainerHook.handleDragEnter}
            isDragging={calendarContainerHook.isDragging}
          />
        ))}
    </Stack>
  );
};

export default CalendarContainer;
