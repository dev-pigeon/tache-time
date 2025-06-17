import CalendarContainer from "./components/Calendar/CalendarContainer";
import Header from "./components/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskWidgetContainer from "./components/TaskOptions/TaskWidgetContainer";

import ViewControlContainer from "./components/ViewControl/ViewControlContainer";
import useCalendarContainer from "./hooks/useCalendarContainer";
import useScheduleTasks from "./hooks/useScheduleTasks";
import useTaskList from "./hooks/useTaskList";
import useValidation from "./hooks/useValidation";
import TaskContainerViewController from "./misc/TaskContainerViewController";
import "./styles/App.css";

function App() {
  const calendarContainerHook = useCalendarContainer();
  const taskListHook = useTaskList();
  const taskValidationHook = useValidation();
  const TaskViewController = TaskContainerViewController(taskValidationHook);
  const scheduleTasksHook = useScheduleTasks({
    packageDays: calendarContainerHook.packageDays,
    getTaskList: taskListHook.getTaskList,
    displayValidation: TaskViewController.displayValidation,
  });
  return (
    <div id="outer-container">
      <Header />
      <CalendarContainer calendarContainerHook={calendarContainerHook} />
      <ViewControlContainer />
      <TaskWidgetContainer
        TaskViewController={TaskViewController}
        validationHook={taskValidationHook}
        scheduleTasksHook={scheduleTasksHook}
        taskListHook={taskListHook}
      />
      <TaskList taskListHook={taskListHook} />
    </div>
  );
}

export default App;
