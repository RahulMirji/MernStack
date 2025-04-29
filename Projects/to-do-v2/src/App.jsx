import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/todoItems"; //
// Note: Case sensitivity matters

function App() {
  const IntialtodoItems = [
    {
      name: "buy milk",
      dueDate: "04/10/2024",
    },
    {
      name: "buy bread",
      dueDate: "04/10/2024",
    },
  ];

  const [todoItems, setTodoItems] = useState(IntialtodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Items Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  return (
    <div className="todo-container-center">
      <div className="items-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <TodoItems todoItems={todoItems} /> {/* Pass todoItems as prop */}
      </div>
    </div>
  );
}

export default App;
