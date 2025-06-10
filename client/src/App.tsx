import CalendarContainer from "./components/Calendar/CalendarContainer";
import Header from "./components/Header";
import TaskWidget from "./components/TaskOptions/TaskWidget";

import ViewControlContainer from "./components/ViewControl/ViewControlContainer";
import "./styles/App.css";

function App() {
  return (
    <div id="outer-container">
      <Header />
      <CalendarContainer />
      <ViewControlContainer />
      <TaskWidget />
    </div>
  );
}

export default App;
