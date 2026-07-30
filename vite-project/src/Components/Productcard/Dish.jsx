import styles from "./Dish.module.css";

function Dish ({dish:{ tittel, pris, ingredienser, kategori  }}) {
return (
    <div className={styles.dish}>
      <h3 className={styles.tittel}>{tittel}</h3>
      <p className={styles.pris}>{pris}</p>
      <p className={styles.ingredienser}>{ingredienser}</p>
      <p className={styles.kategori}>{kategori}</p>
    </div>
  );
}

export default Dish;

