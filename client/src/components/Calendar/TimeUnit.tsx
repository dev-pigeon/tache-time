import { Box, Typography } from "@mui/material";

import "../../styles/TimeUnit.css";
import { TimeUnitProps } from "../../interfaces/TimeUnitProps";
import { Dayjs } from "dayjs";
import TaskChip from "./TaskChip";

interface TimeUnitComponent extends TimeUnitProps {
  toggleTimeUnit: (unitTime: Dayjs) => void;
  height: number;
  mode: boolean;
  onDragStart: (unitTime: Dayjs, currentAvailability: boolean) => void;
  onDragEnter: (unitTime: Dayjs, currentAvailability: boolean) => void;
  isDragging: boolean;
}

const TimeUnit = ({
  height,
  time,
  available,
  toggleTimeUnit,
  mode,
  taskChip,
  onDragStart,
  onDragEnter,
  isDragging,
}: TimeUnitComponent) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    if (mode) {
      e.preventDefault();
      onDragStart(time, available);
    }
  };

  const handleMouseEnter = () => {
    if (mode) {
      onDragEnter(time, available);
    }
  };

  const handleClick = () => {
    if (mode && !isDragging) {
      toggleTimeUnit(time);
    }
  };

  return (
    <Box
      className="time-unit"
      sx={{
        backgroundColor: available ? "#67ba6b" : "",
        cursor: mode ? (isDragging ? 'grabbing' : 'pointer') : 'default',
        userSelect: 'none',
      }}
      date-testid="time-unit"
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      height={height}
    >
      {(taskChip == undefined || mode == true) && (
        <Typography
          color={available ? "black" : "#C0B9B2"}
          className="time-unit-typography"
        >
          {time.format("h:mm A")}
        </Typography>
      )}
      {taskChip && mode == false && (
        <TaskChip title={taskChip.title} dateString={taskChip.dateString} />
      )}
    </Box>
  );
};

export default TimeUnit;
