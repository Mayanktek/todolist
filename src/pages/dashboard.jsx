import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container mt-4">
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
  
}
