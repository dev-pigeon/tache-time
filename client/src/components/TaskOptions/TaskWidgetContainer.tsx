import { Box } from "@mui/material";
import TaskWidget from "./TaskWidget";
import TaskContainerViewController from "../../misc/TaskContainerViewController";
import TaskViewStateEnum from "../../misc/TaskViewControllerEnum";
import AddTask from "./AddTask";
import { useTaskListReturn } from "../../hooks/useTaskList";

interface TaskWidgetContainer {
  taskListHook: useTaskListReturn;
}

const TaskWidgetContainer = ({ taskListHook }: TaskWidgetContainer) => {
  const TaskViewController = TaskContainerViewController();

  return (
    <Box sx={{ position: "fixed", bottom: "5%", right: "10%" }}>
      {TaskViewController.renderedComponent ==
        TaskViewStateEnum.TASK_WIDGET && (
        <TaskWidget
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
