import { Box } from "@mui/material";
import TaskWidget from "./TaskWidget";
import TaskContainerViewController from "../../misc/TaskContainerViewController";

import AddTask from "./AddTask";
import { useTaskListReturn } from "../../hooks/useTaskList";
import { useScheduleTasksReturn } from "../../hooks/useScheduleTasks";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
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
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <>
        <button
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "hide" : "show"}
        </button>
        <CSSTransition
          in={show}
          classNames="fade-out"
          nodeRef={ref}
          timeout={800}
          unmountOnExit
        >
          <div style={{ backgroundColor: "white" }} ref={ref} className="box">
            I want to be faded in and out
          </div>
        </CSSTransition>
      </>
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
    </div>
  );
};

export default TaskWidgetContainer;
