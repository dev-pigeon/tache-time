import { Box } from "@mui/material";
import TaskWidget from "./TaskWidget";
import TaskContainerViewController from "../../misc/TaskContainerViewController";
import TaskViewStateEnum from "../../misc/TaskViewControllerEnum";
import AddTask from "./AddTask";
import { useTaskListReturn } from "../../hooks/useTaskList";
import { useScheduleTasksReturn } from "../../hooks/useScheduleTasks";

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
      {TaskViewController.renderedComponent ==
        TaskViewStateEnum.TASK_WIDGET && (
        <TaskWidget
          scheduleTasksHook={scheduleTasksHook}
          changeRenderedComponent={TaskViewController.changeRenderedComponent}
        />
      )}

      {TaskViewController.renderedComponent == TaskViewStateEnum.ADD_TASK && (
        <AddTask
          taskListHook={taskListHook}
          changeRenderedComponent={TaskViewController.changeRenderedComponent}
        />
      )}
    </Box>
  );
};

export default TaskWidgetContainer;
