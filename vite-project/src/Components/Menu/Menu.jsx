import styles from "./Menu.module.css";
import Dish from "../Productcard/Dish";

function Menu({ dishes }) {
  return (
    <div className={styles.menu}>
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default Menu;
