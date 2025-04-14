import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeAuth } from "../fakeAuth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    fakeAuth.login(email, password);
    navigate("/profile");
  };

  return (
    <form onSubmit={handleLogin} className="p-4">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <input className="form-control my-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="form-control my-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary">Login</button>
    </form>
  );
}

export default LoginForm;
