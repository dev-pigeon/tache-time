import { Box } from "@mui/material";
import TaskWidget from "./TaskWidget";
import TaskContainerViewController from "../../misc/TaskContainerViewController";

import AddTask from "./AddTask";
import { useTaskListReturn } from "../../hooks/useTaskList";
import useScheduleTasks from "../../hooks/useScheduleTasks";
import "../../styles/TransitionContainer.css";
import { useValidationReturn } from "../../hooks/useValidation";
import ValidationContainer from "../ValidationContainer";
import { DayProps } from "../../interfaces/DayProps";
import { ScheduledTask } from "../../interfaces/ScheduledTask";

interface TaskWidgetContainer {
  taskListHook: useTaskListReturn;
  validationHook: useValidationReturn;
  packageDays: () => DayProps[];
  insertScheduledTasks: (
    packagedDays: DayProps[],
    scheduledTasks: ScheduledTask[]
  ) => void;
  mode: boolean;
}

const TaskWidgetContainer = ({
  taskListHook,
  validationHook,
  packageDays,
  insertScheduledTasks,
  mode,
}: TaskWidgetContainer) => {
  const TaskViewController = TaskContainerViewController(validationHook);
  const scheduleTasksHook = useScheduleTasks({
    packageDays: packageDays,
    getTaskList: taskListHook.getTaskList,
    displayValidation: TaskViewController.displayValidation,
    insertScheduledTasks,
  });
  return (
    <Box sx={{ position: "fixed", bottom: "9%", right: "11%" }}>
      {TaskViewController.renderedComponent.widget == true && (
        <TaskWidget
          mode={mode}
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
