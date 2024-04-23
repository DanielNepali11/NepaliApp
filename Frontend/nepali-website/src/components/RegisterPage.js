import React, { useState } from 'react';
import './RegisterPage.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const userInfo = {
      "firstname" : firstName,
      "lastname" : lastName,
      "email" : email,
      "password" : password
    }
    axios.post('http://localhost:8080/user/add', userInfo)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error: ', error);
    })
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
        <div className="back-icon">
        <Link to="/login"><FaArrowLeft /></Link>
      </div>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
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
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
