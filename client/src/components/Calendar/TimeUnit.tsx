import { Box, Typography } from "@mui/material";

import "../../styles/TimeUnit.css";
import { TimeUnitProps } from "../../interfaces/TimeUnitProps";
import { Dayjs } from "dayjs";
import TaskChip from "./TaskChip";

interface TimeUnitComponent extends TimeUnitProps {
  toggleTimeUnit: (unitTime: Dayjs) => void;
  height: number;
  mode: boolean;
}

const TimeUnit = ({
  height,
  time,
  available,
  toggleTimeUnit,
  mode,
  taskChip,
}: TimeUnitComponent) => {
  return (
    <Box
      className="time-unit"
      sx={{
        backgroundColor: available ? "#67ba6b" : "",
      }}
      date-testid="time-unit"
      onClick={() => {
        mode == true ? toggleTimeUnit(time) : {};
      }}
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
