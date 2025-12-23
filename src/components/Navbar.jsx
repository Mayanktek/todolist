import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) return null;

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/dashboard">
        TodoApp
      </Link>

      <div>
        <Link className="btn btn-outline-light me-2" to="/addtodo">
          Add Todo
        </Link>
        <Link className="btn btn-outline-light me-2" to="/todolist">
          Todo List
        </Link>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
