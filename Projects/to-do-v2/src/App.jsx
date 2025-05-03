import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import { TodoItemContext } from "./store/todoItemsStore";
import "./App.css";
import TodoItems from "./components/todoItems"; //
import WelcomeMessage from "./components/WelcomeMessage";
// Note: Case sensitivity matters

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const DeleteItem = (TodoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== TodoItemName);
    setTodoItems(newTodoItems);
  };

  const defaultTodoItems = [];

  return (
    <TodoItemContext.Provider
      value={{
        todoItems,
        addNewItem,
        DeleteItem,
      }}
    >
      <div className="todo-container-center">
        <div className="items-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage></WelcomeMessage>
          <TodoItems />
        </div>
      </div>
    </TodoItemContext.Provider>
  );
}

export default App;
