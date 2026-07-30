function Dish({ dish }) {
    console.log(dish);
  const { tittel, pris, ingredienser, kategori } = dish;
  return (
    <div className="Dish">
      <h3>{tittel}</h3>
      <p>{pris}</p>
      <p>{ingredienser}</p>
      <p>{kategori}</p>
    </div>
  );
}

export default Dish;

