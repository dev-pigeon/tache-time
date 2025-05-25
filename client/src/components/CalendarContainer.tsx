import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

import "../styles/CalendarContainer.css";

const CalendarContainer = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box id={"container"} sx={{ boxShadow: 10 }}>
      {/* @ts-ignore */}
      {children}
    </Box>
  );
};

export default CalendarContainer;
