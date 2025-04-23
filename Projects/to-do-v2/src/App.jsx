import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/todoItems"; // Note: Case sensitivity matters

function App() {
  const todoItems = [
    {
      name: 'buy milk',
      dueDate: '04/10/2024',
    },
    {
      name: 'buy bread',
      dueDate: '04/10/2024',
    }
  ];

  return (
    <div className="todo-container-center">
      <div className="items-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} /> {/* Pass todoItems as prop */}
      </div>
    </div>
  );
}

export default App;