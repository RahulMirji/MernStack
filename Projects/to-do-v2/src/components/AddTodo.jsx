import { useState } from "react";
import { RiFileAddFill } from "react-icons/ri";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo items here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <RiFileAddFill></RiFileAddFill>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
