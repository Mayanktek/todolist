import 'bootstrap/dist/css/bootstrap.min.css';

const login=()=>{
    return (
       <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Login</h3>

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

        <button className="btn btn-primary w-100">Login</button>

        <p className="text-center mt-3 small">
          Don’t have an account? <span className="text-primary">Sign up</span>
        </p>
      </div>
    </div> 
    )
        
}

export default login;