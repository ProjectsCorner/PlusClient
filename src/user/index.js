import React from "react";

//routes - home
import Home from "./Routes/home";
import Category from "./Routes/category";
import Cart from "./Routes/cart";
import Item from "./Routes/item";

//routes orders
import Checkout from "./Routes/orders/checkout";

//routes - user
import Login from "./Routes/account/login";
import Register from "./Routes/account/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./Routes/catalog";

function User() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="item/:id" element={<Item />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="cart" element={<Cart />} />
        <Route path="user/login" element={<Login />} />
        <Route path="user/new" element={<Register />} />
        <Route path="order/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default User;
