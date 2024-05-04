import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./components/UserAuthentication/useAuth";
import mens_banner from "./assets/banner_mens.png";
import womens_banner from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route
              exact
              path="/mens"
              element={<ShopCategory banner={mens_banner} category="men" />}
            />
            <Route
              exact
              path="/womens"
              element={<ShopCategory banner={womens_banner} category="women" />}
            />
            <Route
              exact
              path="/kids"
              element={<ShopCategory banner={kids_banner} category="kid" />}
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
    </AuthProvider>
  );
}

export default App;
