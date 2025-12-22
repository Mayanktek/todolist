import 'bootstrap/dist/css/bootstrap.min.css';
const addtodo=()=>{
    return(
        <div className="container mt-5">
      <div className="card shadow p-4">

        <h4 className="mb-3">Add New Todo</h4>

        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter task title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter task description"
          ></textarea>
        </div>

        <button className="btn btn-primary">
          Add Todo
        </button>

      </div>
    </div>
    )
}
export default addtodo;