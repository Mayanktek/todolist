
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const dashboard = () =>{
    return(
      <div className="container mt-5">
      <div className="card p-4 shadow text-center">

        <h3 className="mb-4">Todo Dashboard</h3>

        <Link to="/addtodo" className="btn btn-primary me-3">
          Add Todo
        </Link>

        <Link to="/todolist" className="btn btn-secondary">
          View Todo List
        </Link>

      </div>
    </div>
    )
}
export default dashboard;