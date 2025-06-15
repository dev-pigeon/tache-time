import { Dayjs } from "dayjs";
import { TimeUnitProps } from "./TimeUnitProps";

export interface DayProps {
  dayStr: string;
  dayOfWeek: string;
  date: Dayjs;
  timeSlots: TimeUnitProps[];
}
