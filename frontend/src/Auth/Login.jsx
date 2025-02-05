import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        navigate("/"); // Redirect to home page
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("An error occurred during login");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100"
    style={{
       backgroundColor:"#989898"
        
    }}>
      <div className="card p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;