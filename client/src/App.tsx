import CalendarContainer from "./components/Calendar/CalendarContainer";
import Header from "./components/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskWidgetContainer from "./components/TaskOptions/TaskWidgetContainer";
import ValidationContainer from "./components/ValidationContainer";

import ViewControlContainer from "./components/ViewControl/ViewControlContainer";
import useCalendarContainer from "./hooks/useCalendarContainer";
import useScheduleTasks from "./hooks/useScheduleTasks";
import useTaskList from "./hooks/useTaskList";
import useValidation from "./hooks/useValidation";
import "./styles/App.css";

function App() {
  const calendarContainerHook = useCalendarContainer();
  const taskListHook = useTaskList();
  const validationHook = useValidation();
  const scheduleTasksHook = useScheduleTasks({
    packageDays: calendarContainerHook.packageDays,
    getTaskList: taskListHook.getTaskList,
  });
  return (
    <div id="outer-container">
      <Header />
      <CalendarContainer calendarContainerHook={calendarContainerHook} />
      <ViewControlContainer />
      <TaskWidgetContainer
        scheduleTasksHook={scheduleTasksHook}
        taskListHook={taskListHook}
      />
      <TaskList taskListHook={taskListHook} />
    </div>
  );
}

export default App;
