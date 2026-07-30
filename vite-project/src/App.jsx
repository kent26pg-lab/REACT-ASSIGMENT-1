import Menu from "./Menu";
import meny from "./Menydata";

function App() {
  return (
    <div className="App">
      <Menu dishes={meny} />
    </div>
  );
}

export default App;