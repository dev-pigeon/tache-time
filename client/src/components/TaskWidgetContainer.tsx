import { IconButton, Paper, Tooltip } from "@mui/material";
import { useState } from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import "../styles/TaskWidget.css";

const TaskWidgetContainer = () => {
  const [openTaskWidget, setOpenTaskWidget] = useState<boolean>(false);

  const toggleTaskWidget = () => {
    setOpenTaskWidget(!openTaskWidget);
  };

  return (
    <Paper id={"task-widget-container"}>
      <Tooltip
        placement="left"
        arrow
        title={openTaskWidget ? "Close Task Options" : "Open Task Options"}
      >
        <IconButton onClick={toggleTaskWidget}>
          <AssignmentIndIcon sx={{ fill: "black", fontSize: 40 }} />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default TaskWidgetContainer;
