import { TodoItemContext } from "../store/todoItemsStore";
import { useContext } from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ onDeleteClick }) => {
  const {todoItems} = useContext(TodoItemContext);

  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name + item.dueDate}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
