import { Dayjs } from "dayjs";

export interface TaskListItem {
  title: string;
  dateString: string;
  dueTime: string;
  estimatedTime: number;
  description?: string;
  id: string;
  date: Dayjs;
}
