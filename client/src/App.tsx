import CalendarContainer from "./components/CalendarContainer";
import Header from "./components/Header";
import ViewControlContainer from "./components/ViewControlContainer";
import "./styles/App.css";

function App() {
  return (
    <div id="outer-container">
      <Header />
      <CalendarContainer />
      <ViewControlContainer />
    </div>
  );
}

export default App;
