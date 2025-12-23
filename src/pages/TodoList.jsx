import { useState } from "react";
import { updateData, deleteData } from "../services/api";


export default function TodoList({ todos, setTodos }) {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const saveEdit = async (id) => {
    const updated = await updateData(`todo/update/${id}`, {
      title: editTitle
    });

    setTodos(todos.map(t => (t._id === id ? updated : t)));
    setEditId(null);
  };

  const removeTodo = async (id) => {
    await deleteData(`todo/delete/${id}`);
    setTodos(todos.filter(t => t._id !== id));
  };

  return (
    <div className="container col-md-6 mt-5">
      <div className="card p-4">
        <h4>My Todos</h4>

        {todos.map(todo => (
          <div key={todo._id} className="border p-2 mb-2 d-flex justify-content-between">
            {editId === todo._id ? (
              <>
                <input
                  className="form-control me-2"
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                />
                <button className="btn btn-success btn-sm me-2"
                  onClick={() => saveEdit(todo._id)}>
                  Save
                </button>
                <button className="btn btn-secondary btn-sm"
                  onClick={() => setEditId(null)}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{todo.title}</span>
                <div>
                  <button className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      setEditId(todo._id);
                      setEditTitle(todo.title);
                    }}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm"
                    onClick={() => removeTodo(todo._id)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
