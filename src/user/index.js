/**
 *
 *
 * routes - reactdom
 *
 *
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function User() {
  return (
    <BrowserRouter>
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
        <Route path="help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default User;
