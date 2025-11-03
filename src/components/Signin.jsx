import React, { useState } from "react";
import "./Signin.css";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };7

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Timetable Clash Checker</h2>
        <p className="signin-subtitle">Sign in to manage your schedule</p>
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <p className="signin-footer">
            Don’t have an account? <a href="/">Create one</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
