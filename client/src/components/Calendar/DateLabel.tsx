import { Stack, Typography } from "@mui/material";
import "../../styles/DateLabel.css";

export interface DateLabelProps {
  date: string;
  dayOfWeek: string;
}

const DateLabel = ({ date, dayOfWeek }: DateLabelProps) => {
  return (
    <Stack direction={"column"} className="date-label">
      <Typography className="dl-date">{date}</Typography>
      <Typography className="dl-dayofweek">{dayOfWeek}</Typography>
    </Stack>
  );
};

export default DateLabel;
