// LoginPage.js
import React, { useState } from "react";
import "./LoginPage.css"; // Import the CSS file
import axios from "axios";
import { useAuth } from "../UserAuthentication/useAuth";
import { Navigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const LoginPage = ({ registerModal, closeLoginModal }) => {
  const { isLoggedIn, setUserSession } = useAuth();
  const [responseMessage, setResponseMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () =>{
    registerModal();
    closeLoginModal();
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setResponseMessage("Fields can't be empty.");
    } else {
      const userInfo = {
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:8080/user/login", userInfo)
        .then((response) => {
          if (response.data && response.data.message === 'Login Success') {
            const username = response.data.username;
            setUserSession(username);
            setResponseMessage(response.data.message);
            return <Navigate to="/" />;
          } else {
            setResponseMessage("Unexpected response from the server");
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <div className="close-icon" onClick={closeLoginModal}><FaTimes /></div>
          <h2>Login</h2>
          <form>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button onClick={handleLogin}>Login</button>
          </form>
          <div>
            Don't have an account? <span onClick={handleRegister}>Register now</span>
          </div>
          {responseMessage && (
            <p
              className={
                responseMessage === "Login Success" ? "success" : "error"
              }
            >
              {responseMessage}
            </p>
          )}
          {isLoggedIn ? <Navigate to="/" /> : ""}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
