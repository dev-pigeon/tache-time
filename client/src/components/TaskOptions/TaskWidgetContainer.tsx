import { Box } from "@mui/material";
import TaskWidget from "./TaskWidget";
import { TaskWidgetContainerReturn } from "../../misc/TaskContainerViewController";

import AddTask from "./AddTask";
import { useTaskListReturn } from "../../hooks/useTaskList";
import { useScheduleTasksReturn } from "../../hooks/useScheduleTasks";
import "../../styles/TransitionContainer.css";
import { useValidationReturn } from "../../hooks/useValidation";
import ValidationContainer from "../ValidationContainer";

interface TaskWidgetContainer {
  taskListHook: useTaskListReturn;
  scheduleTasksHook: useScheduleTasksReturn;
  validationHook: useValidationReturn;
  TaskViewController: TaskWidgetContainerReturn;
}

const TaskWidgetContainer = ({
  taskListHook,
  scheduleTasksHook,
  validationHook,
  TaskViewController,
}: TaskWidgetContainer) => {
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
          displayValidation={TaskViewController.displayValidation}
          changeRenderedComponent={TaskViewController.changeRenderedComponent}
          taskListHook={taskListHook}
        />
      )}
      {TaskViewController.renderedComponent.validation == true && (
        <ValidationContainer validationHook={validationHook} />
      )}
    </Box>
  );
};

export default TaskWidgetContainer;
