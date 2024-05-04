import React, { useState } from "react";
import "./RegisterPage.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setResponseMessage("Fields can't be emptty.");
    } else {
      const userInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:8080/user/add", userInfo)
        .then((response) => {
          if (response.data && response.data.message) {
            setResponseMessage(response.data.message);
          } else {
            setResponseMessage("Unexpected response from the server");
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
          setResponseMessage(error.response.data);
        });
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <div className="back-icon">
            <Link to="/login">
              <FaArrowLeft />
            </Link>
          </div>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
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
            <button type="submit">Register</button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
