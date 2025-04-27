import styles from "./FoodItems.module.css";
import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className={`${styles.foodList} list-group container`}>
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
