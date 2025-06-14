import CalendarContainer from "./components/Calendar/CalendarContainer";
import Header from "./components/Header";
// import TaskList from "./components/TaskList/TaskList";
import TaskWidgetContainer from "./components/TaskOptions/TaskWidgetContainer";

import ViewControlContainer from "./components/ViewControl/ViewControlContainer";
import useTaskList from "./hooks/useTaskList";
import "./styles/App.css";

function App() {
  const taskListHook = useTaskList();
  return (
    <div id="outer-container">
      <Header />
      <CalendarContainer />
      <ViewControlContainer />
      <TaskWidgetContainer taskListHook={taskListHook} />
      {/* <TaskList taskListHook={taskListHook} /> */}
    </div>
  );
}

export default App;
