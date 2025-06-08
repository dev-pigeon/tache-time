import CalendarContainer from "./components/calendar/CalendarContainer";
import Header from "./components/Header";
import TaskWidgetContainer from "./components/TaskWidgetContainer";
import ViewControlContainer from "./components/ViewControlContainer";
import "./styles/App.css";

function App() {
  return (
    <div id="outer-container">
      <Header />
      <CalendarContainer />
      <ViewControlContainer />
      <TaskWidgetContainer />
    </div>
  );
}

export default App;
