import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/todoItems"; //
import WelcomeMessage from "./components/WelcomeMessage";
// Note: Case sensitivity matters

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (TodoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== TodoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item Deletd: $(todoItemName)`);
  };

  return (
    <div className="todo-container-center">
      <div className="items-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        />{" "}
        {/* Pass todoItems as prop */}
      </div>
    </div>
  );
}

export default App;
