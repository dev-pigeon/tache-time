import { IconButton, Paper, Tooltip, Collapse } from "@mui/material";
import { useState } from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import "../../styles/TaskWidgetContainer.css";
import TaskOptions from "./TaskOptions";

const TaskWidgetContainer = () => {
  const [openTaskWidget, setOpenTaskWidget] = useState<boolean>(false);

  const toggleTaskWidget = () => {
    setOpenTaskWidget(!openTaskWidget);
  };

  return (
    <Paper id={"task-widget-container"}>
      <Collapse in={openTaskWidget}>
        <TaskOptions />
      </Collapse>

      <Tooltip
        placement="left"
        arrow
        title={openTaskWidget ? "Close Task Options" : "Open Task Options"}
      >
        <IconButton className="task-widget-button" onClick={toggleTaskWidget}>
          <AssignmentIndIcon sx={{ fill: "black", fontSize: 40 }} />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default TaskWidgetContainer;
