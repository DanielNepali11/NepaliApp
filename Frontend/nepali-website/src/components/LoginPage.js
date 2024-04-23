// LoginPage.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./LoginPage.css"; // Import the CSS file
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userInfo = {
      'email' : email,
      'password' : password
    }
    axios.post('http://localhost:8080/user/login', userInfo)
    .then(response => {
      console.log(response.data.status);
    })
    .catch(error => {
      console.error('Error: ', error);
    })
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Login</button>
          </form>
          <div>
            Don't have an account? <Link to="/register">Register now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
