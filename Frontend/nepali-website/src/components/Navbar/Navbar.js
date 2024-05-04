import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/nepali-website-logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../UserAuthentication/useAuth";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { username, isLoggedIn, clearUserSession } = useAuth();
  return (
    <div className="navbar">
      <img src={Logo} alt="" className="logo" />
      <ul>
        <Link to="/">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            Shop{menu === "shop" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to="/mens">
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            Mens{menu === "mens" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to="/womens">
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            Womens{menu === "womens" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to="/kids">
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            Kids{menu === "kids" ? <hr /> : <></>}
          </li>
        </Link>
      </ul>

      <div className="cart-container">
        {isLoggedIn ? (
          <div className="logged-in-user">
            <i className="fas fa-user"></i>
            <p>{username}</p>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <button type="submit" className="logout-btn" onClick={clearUserSession}>
                Logout
              </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button type="submit" className="login-btn">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
