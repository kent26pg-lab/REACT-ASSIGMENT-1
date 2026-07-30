import Menu from "../Menu/Menu";
import meny from "../../Menydata";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Meny</h1>
      <Menu dishes={meny} />
    </div>
  );
}

export default App;
