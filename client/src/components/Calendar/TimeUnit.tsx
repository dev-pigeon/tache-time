import { Box, Typography } from "@mui/material";

import "../../styles/TimeUnit.css";
import { TimeUnitProps } from "../../interfaces/TimeUnitProps";
import { Dayjs } from "dayjs";

interface TimeUnitComponent extends TimeUnitProps {
  toggleTimeUnit: (unitTime: Dayjs) => void;
}

const TimeUnit = ({
  height,
  time,
  available,
  toggleTimeUnit,
}: TimeUnitComponent) => {
  return (
    <Box
      className="time-unit"
      sx={{
        backgroundColor: available ? "#67ba6b" : "",
      }}
      date-testid="time-unit"
      onClick={() => {
        toggleTimeUnit(time);
      }}
      height={height}
    >
      <Typography
        color={available ? "black" : "#C0B9B2"}
        className="time-unit-typography"
      >
        {time.format("h:mm A")}
      </Typography>
    </Box>
  );
};

export default TimeUnit;
