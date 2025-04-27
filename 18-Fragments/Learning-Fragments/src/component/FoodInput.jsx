import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="Enter Food Items here"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default FoodInput;
