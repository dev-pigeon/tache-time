import { Stack, Typography } from "@mui/material";
import "../styles/DateContainer.css";
import { useEffect } from "react";
import TimeUnit from "./TimeUnit";
import useDateContainer from "../hooks/useDateContainer";

interface DateContainerProps {
  date: string;
}

const DateContainer = ({ date }: DateContainerProps) => {
  const dateContainerHook = useDateContainer();

  useEffect(() => {
    dateContainerHook.initializeUnits();
  }, []);

  return (
    <Stack className="date-container" direction={"column"} gap={1}>
      <Typography variant="h6" className="date-container-label">
        {date}
      </Typography>
      <Stack height={450} className="time-unit-container" direction={"column"}>
        {dateContainerHook.units &&
          dateContainerHook.units.map((unit, _index) => (
            <TimeUnit time={unit.time} height={unit.height} />
          ))}
      </Stack>
    </Stack>
  );
};

export default DateContainer;
