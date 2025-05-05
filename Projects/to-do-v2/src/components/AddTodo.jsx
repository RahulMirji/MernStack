import { TodoItemContext } from "../store/todoItemsStore";
import { useState, useRef, use } from "react";
import { RiFileAddFill } from "react-icons/ri";

function AddTodo({}) {
  const { addNewItem } = useContext(TodoItemContext);
  const todoNameElement = useState();
  const dueDateElement = useState();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo items here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
