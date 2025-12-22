import 'bootstrap/dist/css/bootstrap.min.css';
const todolist=()=>{
    return(
        <div className="container mt-5">
      <div className="card shadow p-4">

        <h4 className="mb-4">My Todo List</h4>

        {/* Todo Item */}
        <div className="d-flex justify-content-between align-items-center border rounded p-2 mb-2">
          <div>
            <input type="checkbox" className="form-check-input me-2" />
            Learn React
          </div>
          <div>
            <button className="btn btn-sm btn-outline-primary me-2">
              Edit
            </button>
            <button className="btn btn-sm btn-outline-danger">
              Delete
            </button>
          </div>
        </div>

        {/* Completed Todo */}
        <div className="d-flex justify-content-between align-items-center border rounded p-2 mb-2">
          <div>
            <input
              type="checkbox"
              className="form-check-input me-2"
              
            />
           
              Build Todo App
          </div>
          <div>
            <button className="btn btn-sm btn-outline-primary me-2">
              Edit
            </button>
            <button className="btn btn-sm btn-outline-danger">
              Delete
            </button>
          </div>
        </div>

      </div>
    </div>
    )
}
export default todolist;