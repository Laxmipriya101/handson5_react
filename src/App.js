import PureComponent from "./Components/PureComponent";
import "./App.css";
import ClickedFunc from "./Components/ClickedFunc";
import HoverFunc from "./Components/HoverFunc";
import NormalComponent from "./Components/NormalComponent";

function App() {
  return (
    <div className="App">
      <ClickedFunc />
      <br />
      <HoverFunc />
      <br />
      <NormalComponent />
      <br />
      <PureComponent />
    </div>
  );
}

export default App;
