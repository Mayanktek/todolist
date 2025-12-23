import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createData } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await createData("auth/login", { email, password });
    localStorage.setItem("token", res.token);
    navigate("/dashboard");
  };

  return (
    <div className="container col-md-4 mt-5">
      <div className="card p-4">
        <h3>Login</h3>

        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={login}>
          Login
        </button>

        <p className="text-center mt-3">
          No account? <a href="/signup">Register</a>
        </p>
      </div>
    </div>
  );
}
