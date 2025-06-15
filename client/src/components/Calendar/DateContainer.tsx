import { Stack } from "@mui/material";
import "../../styles/DateContainer.css";
import { useEffect } from "react";
import useDateContainer from "../../hooks/useDateContainer";
import DateLabel, { DateLabelProps } from "./DateLabel";
import TimeUnit from "./TimeUnit";

interface DateContainerProps {
  date: DateLabelProps;
  heightIn: number | string;
}

const DateContainer = ({ date, heightIn }: DateContainerProps) => {
  const dateContainerHook = useDateContainer();

  useEffect(() => {
    dateContainerHook.initializeUnits();
  }, []);

  return (
    <Stack className="date-container" direction={"column"} gap={1}>
      <DateLabel date={date.date} dayOfWeek={date.dayOfWeek} />
      <Stack
        height={heightIn}
        className="time-unit-container"
        direction={"column"}
      >
        {dateContainerHook.units &&
          dateContainerHook.units.map((unit, _index) => (
            <TimeUnit
              available={unit.available}
              time={unit.time}
              height={unit.height}
            />
          ))}
      </Stack>
    </Stack>
  );
};

export default DateContainer;
