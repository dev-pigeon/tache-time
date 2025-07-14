import { Box, Typography } from "@mui/material";

import "../../styles/TimeUnit.css";
import { TimeUnitProps } from "../../interfaces/TimeUnitProps";
import { Dayjs } from "dayjs";
import TaskChip from "./TaskChip";
import { useEffect } from "react";

interface TimeUnitComponent extends TimeUnitProps {
  toggleTimeUnit: (unitTime: Dayjs) => void;
  height: number;
  mode: "Edit" | "View";
}

const TimeUnit = ({
  height,
  time,
  available,
  toggleTimeUnit,
  mode,
  taskChip,
}: TimeUnitComponent) => {
  useEffect(() => {
    console.log(taskChip == undefined || mode == "Edit");
  }, []);

  return (
    <Box
      className="time-unit"
      sx={{
        backgroundColor: available ? "#67ba6b" : "",
      }}
      date-testid="time-unit"
      onClick={() => {
        mode == "Edit" ? toggleTimeUnit(time) : {};
      }}
      height={height}
    >
      {(taskChip == undefined || mode == "Edit") && (
        <Typography
          color={available ? "black" : "#C0B9B2"}
          className="time-unit-typography"
        >
          {time.format("h:mm A")}
        </Typography>
      )}
      {taskChip && mode == "View" && <TaskChip title={taskChip.title} />}
    </Box>
  );
};

export default TimeUnit;
