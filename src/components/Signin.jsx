import "./Signin.css";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router";

import { AuthContext } from "../contexts/authContext/authContext";

export function Signin() {
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { loggedInUser, handleLogin, isLoggedIn } = useContext(AuthContext);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // setLoggedInUser(loginDetails)
    let loginDetails = { idNumber: idNumber, password: password };
    console.log("Logged in user from context: ", loggedInUser);
    handleLogin(loginDetails);
    console.log("This is the submit ", loginDetails);

    // redirect to lecturer or student dashboard after authentication using isloggedIn
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Signin</h2>
        <p className="signin-subtitle">Sign in to manage your schedule</p>
        <form onSubmit={handleLoginSubmit} className="signin-form">
          <div className="form-group">
            <label htmlFor="idNumber">Id</label>
            <input
              id="idNumber"
              type="text"
              value={idNumber}
              placeholder="Enter your Id"
              onChange={(e) => setIdNumber(e.target.value)}
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
            Don’t have an account? <Link to="/">Create one</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
