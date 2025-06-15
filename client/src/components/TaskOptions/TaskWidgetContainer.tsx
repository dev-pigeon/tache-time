import { Box } from "@mui/material";
import TaskWidget from "./TaskWidget";
import TaskContainerViewController from "../../misc/TaskContainerViewController";

import AddTask from "./AddTask";
import { useTaskListReturn } from "../../hooks/useTaskList";
import { useScheduleTasksReturn } from "../../hooks/useScheduleTasks";
import "../../styles/TransitionContainer.css";

interface TaskWidgetContainer {
  taskListHook: useTaskListReturn;
  scheduleTasksHook: useScheduleTasksReturn;
}

const TaskWidgetContainer = ({
  taskListHook,
  scheduleTasksHook,
}: TaskWidgetContainer) => {
  const TaskViewController = TaskContainerViewController();

  return (
    <Box sx={{ position: "fixed", bottom: "9%", right: "11%" }}>
      {TaskViewController.renderedComponent.widget == true && (
        <TaskWidget
          scheduleTasksHook={scheduleTasksHook}
          changeRenderedComponent={TaskViewController.changeRenderedComponent}
        />
      )}

      {TaskViewController.renderedComponent.addTask == true && (
        <AddTask
          changeRenderedComponent={TaskViewController.changeRenderedComponent}
          taskListHook={taskListHook}
        />
      )}
    </Box>
  );
};

export default TaskWidgetContainer;
