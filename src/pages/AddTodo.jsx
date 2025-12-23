import { useState } from "react";
import { createData } from "../services/api";

export default function AddTodo({ setTodos }) {
  const [title, setTitle] = useState("");

  const addTodo = async () => {
    const newTodo = await createData("todo/create", { title });
    setTodos(prev => [...prev, newTodo]);
    setTitle("");
  };

  return (
    <div className="container col-md-6 mt-5">
      <div className="card p-4">
        <h4>Add Todo</h4>
        <input
          className="form-control mb-3"
          value={title}
          placeholder="Todo title"
          onChange={e => setTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add
        </button>
      </div>
    </div>
  );
}
