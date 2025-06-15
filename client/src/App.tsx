import CalendarContainer from "./components/Calendar/CalendarContainer";
import Header from "./components/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskWidgetContainer from "./components/TaskOptions/TaskWidgetContainer";

import ViewControlContainer from "./components/ViewControl/ViewControlContainer";
import useCalendarContainer from "./hooks/useCalendarContainer";
import useScheduleTasks from "./hooks/useScheduleTasks";
import useTaskList from "./hooks/useTaskList";
import "./styles/App.css";

function App() {
  const calendarContainerHook = useCalendarContainer();
  const taskListHook = useTaskList();
  const scheduleTasksHook = useScheduleTasks({
    packageDays: calendarContainerHook.packageDays,
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
