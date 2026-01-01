import React from "react";
import MainLayout from "./layout/mainLayout";
import AuthLayout from "./layout/authLayout";

import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import ShopProducts from "./pages/products";
import Purchasing from "./pages/purchasing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Account from "./pages/account";
import Profile from "./components/account/profile";
import AddressBook from "./components/account/addressBook";
import Payment from "./components/account/payment";
import ProtectedRoutes from "./routes/protectedRoutes";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Pages WITH header & footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopProducts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/purchasing" element={<Purchasing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          

          <Route element={<ProtectedRoutes />}>
            <Route path="/account" element={<Account />}>
              <Route path="profile" element={<Profile />} />
              <Route path="address" element={<AddressBook />} />
              <Route path="payment" element={<Payment />} />
            </Route>
          </Route>
        </Route>

        {/* Pages WITHOUT header & footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
