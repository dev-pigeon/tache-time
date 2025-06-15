import { IconButton, Paper, Tooltip, Collapse } from "@mui/material";
import { useState } from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import "../../styles/TaskWidget.css";
import TaskOptions from "./TaskOptions";
import TaskViewStateEnum from "../../misc/TaskViewControllerEnum";
import { useScheduleTasksReturn } from "../../hooks/useScheduleTasks";

export interface TaskWidgetProps {
  changeRenderedComponent: (type: TaskViewStateEnum) => void;
  scheduleTasksHook: useScheduleTasksReturn;
}

const TaskWidget = ({
  changeRenderedComponent,
  scheduleTasksHook,
}: TaskWidgetProps) => {
  const [openTaskWidget, setOpenTaskWidget] = useState<boolean>(false);

  const toggleTaskWidget = () => {
    setOpenTaskWidget(!openTaskWidget);
  };

  return (
    <Paper id={"task-widget-container"}>
      <Collapse in={openTaskWidget}>
        <TaskOptions
          scheduleTasksHook={scheduleTasksHook}
          changeRenderedComponent={changeRenderedComponent}
        />
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

export default TaskWidget;
