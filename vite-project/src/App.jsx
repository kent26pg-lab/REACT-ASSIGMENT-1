import Menu from "./Menu/Menu";
import meny from "./Menydata";

function App() {
  return (
    <div className="App">
      <h1>Meny</h1>
      <Menu dishes={meny} />
    </div>
  );
}

export default App;