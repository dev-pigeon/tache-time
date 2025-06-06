import { Stack, Typography } from "@mui/material";

export interface DateLabel {
  date: string;
  dayOfWeek: string;
}

const DateLabel = ({ date, dayOfWeek }: DateLabel) => {
  return (
    <Stack direction={"column"} className="date-label">
      <Typography className="dl-date">{date}</Typography>
      <Typography className="dl-dayofweek">{dayOfWeek}</Typography>
    </Stack>
  );
};

export default DateLabel;
