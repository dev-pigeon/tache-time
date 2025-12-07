import { Stack } from "@mui/material";
import "../../styles/DateContainer.css";
import DateLabel from "./DateLabel";
import TimeUnit from "./TimeUnit";
import { DayProps } from "../../interfaces/DayProps";
import { Dayjs } from "dayjs";

interface DateContainerProps {
  heightIn: number;
  day: DayProps;
  toggleTimeUnit: (unitTime: Dayjs) => void;
  mode: boolean;
  onDragStart: (unitTime: Dayjs, currentAvailability: boolean) => void;
  onDragEnter: (unitTime: Dayjs, currentAvailability: boolean) => void;
  isDragging: boolean;
}

const DateContainer = ({
  day,
  heightIn,
  toggleTimeUnit,
  mode,
  onDragStart,
  onDragEnter,
  isDragging,
}: DateContainerProps) => {
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
            mode={mode}
            key={`TimeUnit-${value.time.toISOString()}`}
            toggleTimeUnit={toggleTimeUnit}
            available={value.available}
            height={heightIn}
            time={value.time}
            taskChip={value.taskChip}
            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            isDragging={isDragging}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default DateContainer;
