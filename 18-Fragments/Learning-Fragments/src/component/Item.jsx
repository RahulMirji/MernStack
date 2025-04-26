import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return <li className="list-group-item">{foodItem} <button className={styles.button}>Buy</button></li>;
};

export default Item;
