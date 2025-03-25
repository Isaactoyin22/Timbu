import React from "react";
import { SearchProvider } from "./components/searchContext";
import { ProductProvider } from "./components/ProductContext";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import CheckoutLayout from "./components/CheckoutLayout";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import "./App.css";
import AllItems from "./components/AllItems";
import { FilterProvider } from "./components/FilterContext";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <SearchProvider>
            <FilterProvider>
              <Router>
                <div className="App">
                  <Routes>
                    <Route element={<MainLayout />}>
                      <Route
                        path="/men"
                        element={<AllItems category="men" />}
                      />
                      <Route
                        path="/women"
                        element={<AllItems category="women" />}
                      />
                      <Route path="/" element={<AllItems category="men" />} />
                    </Route>
                    <Route element={<CheckoutLayout />}>
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/confirmation" element={<Confirmation />} />
                    </Route>
                    <Route element={<CheckoutLayout />}>
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/profile" element={<Profile />} />
                    </Route>
                  </Routes>
                </div>
              </Router>
            </FilterProvider>
          </SearchProvider>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
