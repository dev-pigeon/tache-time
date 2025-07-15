import CalendarContainer from "./components/Calendar/CalendarContainer";
import Header from "./components/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskWidgetContainer from "./components/TaskOptions/TaskWidgetContainer";

import useCalendarContainer from "./hooks/useCalendarContainer";
import useTaskList from "./hooks/useTaskList";
import useValidation from "./hooks/useValidation";
import useViewControl from "./hooks/useViewControl";
import "./styles/App.css";

function App() {
  const calendarContainerHook = useCalendarContainer();
  const taskListHook = useTaskList();
  const taskValidationHook = useValidation();
  const viewControlHook = useViewControl();

  return (
    <div id="outer-container">
      <Header />
      <CalendarContainer
        viewControlHook={viewControlHook}
        calendarContainerHook={calendarContainerHook}
      />
      <TaskWidgetContainer
        mode={viewControlHook.editMode}
        insertScheduledTasks={calendarContainerHook.insertScheduledTasks}
        packageDays={calendarContainerHook.packageDays}
        validationHook={taskValidationHook}
        taskListHook={taskListHook}
      />
      <TaskList mode={viewControlHook.editMode} taskListHook={taskListHook} />
    </div>
  );
}

export default App;
