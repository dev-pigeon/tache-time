import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

import "../styles/CalendarContainer.css";
import DateContainer from "./DateContainer";

const CalendarContainer = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box id={"container"} sx={{ boxShadow: 10 }}>
      <DateContainer date="May 25th" />
    </Box>
  );
};

export default CalendarContainer;
