import { Box, Typography } from "@mui/material";
import { useState } from "react";
import "../../styles/TimeUnit.css";
import { TimeUnitProps } from "../../interfaces/TimeUnitProps";

const TimeUnit = ({ height, time }: TimeUnitProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <Box
      className="time-unit"
      sx={{
        backgroundColor: selected ? "#67ba6b" : "",
      }}
      date-testid="time-unit"
      onClick={handleClick}
      height={height}
    >
      <Typography
        color={selected ? "black" : "#C0B9B2"}
        className="time-unit-typography"
      >
        {time}
      </Typography>
    </Box>
  );
};

export default TimeUnit;
