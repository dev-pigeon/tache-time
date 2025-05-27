import { Box, Typography } from "@mui/material";
import { useState } from "react";

interface TimeUnitProps {
  height: number;
  time: string;
}

const TimeUnit = ({ height, time }: TimeUnitProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <Box
      sx={{
        backgroundColor: selected ? "#67ba6b" : "",
        border: "solid",
        borderWidth: 0.5,
      }}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      date-testid="time-unit"
      onClick={handleClick}
      height={height}
      width={150}
    >
      <Typography fontSize={16}>{time}</Typography>
    </Box>
  );
};

export default TimeUnit;
