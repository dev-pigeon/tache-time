import CalendarContainer from "./components/Calendar/CalendarContainer";
import Header from "./components/Header";
import AddTask from "./components/TaskOptions/AddTask";
import TaskWidgetContainer from "./components/TaskOptions/TaskWidgetContainer";
import ViewControlContainer from "./components/ViewControl/ViewControlContainer";
import "./styles/App.css";

function App() {
  return (
    <div id="outer-container">
      <Header />
      <CalendarContainer />
      <ViewControlContainer />
      <TaskWidgetContainer />
      <AddTask />
    </div>
  );
}

export default App;
