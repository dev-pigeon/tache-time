import { Stack } from "@mui/material";
import "../../styles/DateContainer.css";
import DateLabel from "./DateLabel";
import TimeUnit from "./TimeUnit";
import { DayProps } from "../../interfaces/DayProps";

interface DateContainerProps {
  heightIn: number;
  day: DayProps;
}

const DateContainer = ({ day, heightIn }: DateContainerProps) => {
  return (
    <Stack className="date-container" direction={"column"} gap={1}>
      <DateLabel date={day.dayStr} dayOfWeek={day.dayOfWeek} />
      <Stack
        height={heightIn}
        className="time-unit-container"
        direction={"column"}
      >
        {day.timeSlots.map((value, _index) => (
          <TimeUnit
            available={value.available}
            height={heightIn}
            time={value.time}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default DateContainer;
