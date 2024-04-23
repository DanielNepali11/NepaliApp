import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route
            exact
            path="/mens"
            element={<ShopCategory category="mens" />}
          />
          <Route
            exact
            path="/womens"
            element={<ShopCategory category="womens" />}
          />
          <Route
            exact
            path="/kids"
            element={<ShopCategory category="kids" />}
          />
          <Route exact path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
