import { Dayjs } from "dayjs";

export interface TaskListItem {
  title: string;
  dueDate: string;
  dueTime: string;
  estimatedTime: number;
  description?: string;
  id: string;
  date: Dayjs;
}
