import 'bootstrap/dist/css/bootstrap.min.css';
const registration=()=>{
    return(
        <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Sign Up</h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-success w-100">
          Create Account
        </button>
      </div>
    </div>
    )
}
export default registration;