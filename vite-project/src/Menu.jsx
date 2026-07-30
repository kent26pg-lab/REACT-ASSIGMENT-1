import Dish from "./Dish";

function Menu({ dishes }) {
  return (
    <div className="Menu">
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default Menu;