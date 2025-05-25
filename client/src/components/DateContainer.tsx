import type { PropsWithChildren } from "react";
import { Stack, Typography } from "@mui/material";
import "../styles/DateContainer.css";

interface DateContainerProps {
  date: string;
}

const DateContainer = ({
  children,
  date,
}: PropsWithChildren<DateContainerProps>) => {
  return (
    <Stack className="date-container" direction={"column"} gap={1}>
      <Typography className="date-container-label">{date}</Typography>
      <Stack height={500} className="time-unit-container" direction={"column"}>
        {/* @ts-ignore */}
        {children}
      </Stack>
    </Stack>
  );
};

export default DateContainer;
