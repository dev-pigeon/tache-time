import { Dayjs } from "dayjs";
import { TaskChipProps } from "./TaskChipProps";

export interface TimeUnitProps {
  time: Dayjs;
  available: boolean;
  taskChip?: TaskChipProps;
}
