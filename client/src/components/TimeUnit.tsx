import { Box } from "@mui/material";
import { useState } from "react";

interface TimeUnitProps {
  height: number;
}

const TimeUnit = ({ height }: TimeUnitProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <Box
        color={"#1e1e1e"}
        date-testid="time-unit"
        onClick={handleClick}
        height={height}
        width={150}
      ></Box>
    </div>
  );
};

export default TimeUnit;
