import CalendarContainer from "./components/Calendar/CalendarContainer";
import Header from "./components/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskWidgetContainer from "./components/TaskOptions/TaskWidgetContainer";

import ViewControlContainer from "./components/ViewControl/ViewControlContainer";
import useScheduleTasks from "./hooks/useScheduleTasks";
import useTaskList from "./hooks/useTaskList";
import "./styles/App.css";

function App() {
  const taskListHook = useTaskList();
  const scheduleTasksHook = useScheduleTasks();
  return (
    <div id="outer-container">
      <Header />
      <CalendarContainer />
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
