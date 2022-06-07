/**
 *
 *
 * routes - reactdom
 *
 *
 */

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { add_to_cart } from "../redux/cart";

/**
 *
 *
 * routes - home
 *
 *
 */
import Home from "./Routes/home";
import Category from "./Routes/category";
import Cart from "./Routes/cart";
import Item from "./Routes/item";
import Catalog from "./Routes/catalog";

/**
 *
 * routes - orders
 */
import Checkout from "./Routes/orders/checkout";
import Payment from "./Routes/orders/payment";
import CashOnDelivery from "./Routes/orders/cod";

/**
 *
 * routes - user
 */
import Login from "./Routes/account/login";
import Register from "./Routes/account/Register";
import Account from "./Routes/account";

/**
 * routes - help
 */
import Help from "./Routes/help";
import Request from "./Routes/help/request_item";

function User() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="item/:id" element={<Item />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="cart" element={<Cart />} />
        <Route path="user/:page" element={<Account />} />
        <Route path="user/login" element={<Login />} />
        <Route path="user/new" element={<Register />} />
        <Route path="order/checkout" element={<Checkout />} />
        <Route path="order/payment/:id" element={<Payment />} />
        <Route path="order/finish/:id" element={<CashOnDelivery />} />
        <Route path="help" element={<Help />} />
        <Route path="help/request" element={<Request />} />
      </Routes>
    </BrowserRouter>
  );
}

export default User;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
