import { Stack, Typography } from "@mui/material";
import "../styles/DateContainer.css";
import { useEffect, useState } from "react";
import { getCalendarContainerHeight } from "../hooks/useCalendarContainer";
import TimeUnit from "./TimeUnit";

interface DateContainerProps {
  date: string;
}

interface unit {
  time: string;
  height: number;
}

const DateContainer = ({ date }: DateContainerProps) => {
  const [units, setUnits] = useState<unit[] | undefined>();
  const initializeUnits = () => {
    let newUnits: unit[] = [];
    const numTimeUnits = 12;
    let date = new Date(); // 8 am today;
    date.setHours(8);
    date.setMinutes(0);
    const timeUnitHeight = getCalendarContainerHeight() / numTimeUnits;
    console.log(timeUnitHeight);
    for (let i = 0; i < numTimeUnits; ++i) {
      const hourString = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const unit: unit = {
        time: hourString,
        height: timeUnitHeight,
      };
      newUnits.push(unit);
      date.setHours(date.getHours() + 1);
    }
    setUnits(newUnits);
  };

  useEffect(() => {
    initializeUnits();
  }, []);

  return (
    <Stack className="date-container" direction={"column"} gap={1}>
      <Typography className="date-container-label">{date}</Typography>
      <Stack height={450} className="time-unit-container" direction={"column"}>
        {units &&
          units.map((unit, _index) => (
            <TimeUnit time={unit.time} height={unit.height} />
          ))}
      </Stack>
    </Stack>
  );
};

export default DateContainer;
