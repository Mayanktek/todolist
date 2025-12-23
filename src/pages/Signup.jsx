import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createData } from "../services/api";


export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    await createData("auth/register", { name, email, password });
    navigate("/");
  };

  return (
    <div className="container col-md-4 mt-5">
      <div className="card p-4">
        <h3>Register</h3>

        <input
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button className="btn btn-success w-100" onClick={signup}>
          Register
        </button>
      </div>
    </div>
  );
}
