import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemContext } from "../store/todoItemsStore";

const WelcomeMessage = ({}) => {
  const {todoItems} = useContext(TodoItemContext);
  
  return (
    todoItems.length === 0 && <p className={styles.Empty}>Enjoy your Day</p>
  );
};

export default WelcomeMessage;
