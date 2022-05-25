/**
 *
 * react imports
 */
import React, { useEffect, useState } from "react";
import { Base64 } from "js-base64";
import { Link, useNavigate } from "react-router-dom";
import user_ from "../app.config";

/**
 * material icons
 */
import SearchIcon from "@material-ui/icons/Search";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import Help from "@material-ui/icons/HelpOutline";
import ExpandUpIcon from "@material-ui/icons/ExpandLess";
import ExpandDownIcon from "@material-ui/icons/ExpandMore";
import User from "@material-ui/icons/PersonOutlined";
import Menu from "@material-ui/icons/MenuOutlined";
import Close from "@material-ui/icons/Close";

/**
 *
 * imports for assets and styles
 */
import "../Design/MainHeader.css";
import PlusLogo from "../assets/logos/plus_logo_black.png";

export default () => {
  /**
   *
   * hooks for the component
   */
  const navigate = useNavigate();
  const [state, setState] = useState({
    helpDropDownActive: false,
    userDropDownActive: false,
    sideNav: false,
    cart_number: null,
  });

  /**
   *
   * app search for products
   */
  const submitSearch = (e) => {
    e.preventDefault();
    const searchValue = new FormData(e.target).get("search");
    navigate(`/catalog?q=${searchValue}`);
  };

  useEffect(() => {
    let cart = localStorage.getItem("cart_id")
      ? JSON.parse(Base64.decode(localStorage.getItem("cart_id")))
      : [];
    if (cart.length === 0) {
      setState({
        ...state,
        cart_number: 0,
      });
    } else {
      let cart_number = 0;
      cart.forEach((el) => parseInt((cart_number += el.qty)));
      setState({
        ...state,
        cart_number,
      });
    }
  }, []);

  return (
    <>
      <div
        className="sidenav-ctr"
        style={
          state.sideNav
            ? { width: "100%", left: "0px" }
            : { left: "-70%", width: "0px" }
        }
      >
        <button
          className="close-side-nav"
          onClick={() => {
            setState({ ...state, sideNav: !state.sideNav });
          }}
        >
          <Close fontSize="medium" />
        </button>
        <div className="side-nav-content">
          <ul className="sd-ns1 sd-ns">
            <div className="sd-hdr">Shop These Categories - Plus</div>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-shopping-basket ctg-icon"></i>
                EasyMarket On Plus
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-pizza-slice ctg-icon"></i>
                Fast Foods &amp; Drinks
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-layer-group ctg-icon"></i>
                Supermarket
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-headphones-alt ctg-icon"></i>
                Phones &amp; Accessories
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-charging-station ctg-icon"></i>
                Electronics
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-tshirt ctg-icon"></i>
                Clothes &amp; Shoes
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-utensils ctg-icon"></i>
                Kitchen stuff &amp; Utensils
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-desktop ctg-icon"></i>
                Computing &amp; Accessories
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-child ctg-icon"></i>
                Kid's Section
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-desktop ctg-icon"></i>
                Cleaning, Healthy &amp; Beauty
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-paperclip ctg-icon"></i>
                Stationery
              </span>
            </li>
          </ul>
          <ul className="sd-ns1 sd-ns">
            <div className="sd-hdr">Shop These Categories - Plus</div>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-shopping-basket ctg-icon"></i>
                EasyMarket On Plus
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-pizza-slice ctg-icon"></i>
                Fast Foods &amp; Drinks
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-layer-group ctg-icon"></i>
                Supermarket
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-headphones-alt ctg-icon"></i>
                Phones &amp; Accessories
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-charging-station ctg-icon"></i>
                Electronics
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-tshirt ctg-icon"></i>
                Clothes &amp; Shoes
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-utensils ctg-icon"></i>
                Kitchen stuff &amp; Utensils
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-desktop ctg-icon"></i>
                Computing &amp; Accessories
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-child ctg-icon"></i>
                Kid's Section
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-desktop ctg-icon"></i>
                Cleaning, Healthy &amp; Beauty
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-paperclip ctg-icon"></i>
                Stationery
              </span>
            </li>
          </ul>
          <ul className="sd-ns1 sd-ns">
            <div className="sd-hdr">Shop These Categories - Plus</div>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-shopping-basket ctg-icon"></i>
                EasyMarket On Plus
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-pizza-slice ctg-icon"></i>
                Fast Foods &amp; Drinks
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-layer-group ctg-icon"></i>
                Supermarket
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-headphones-alt ctg-icon"></i>
                Phones &amp; Accessories
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-charging-station ctg-icon"></i>
                Electronics
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-tshirt ctg-icon"></i>
                Clothes &amp; Shoes
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-utensils ctg-icon"></i>
                Kitchen stuff &amp; Utensils
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-desktop ctg-icon"></i>
                Computing &amp; Accessories
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-child ctg-icon"></i>
                Kid's Section
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-desktop ctg-icon"></i>
                Cleaning, Healthy &amp; Beauty
              </span>
            </li>
            <li className="sd-item">
              <span className="sd-item-name">
                <i className="las la-paperclip ctg-icon"></i>
                Stationery
              </span>
            </li>
          </ul>
        </div>
      </div>
      <header>
        <div className="hdr-banner-ctr">
          <div className="hdr-banner">Banner</div>
        </div>
        <div className="react-nav-loader"></div>
        <nav className="hdr-nav-ctr">
          <div className="hdr-nav">
            <div
              className="menu-toggle"
              onClick={() => {
                setState({
                  ...state,
                  sideNav: !state.sideNav,
                });
              }}
            >
              <Menu fontSize="large" />
            </div>
            <Link to="/">
              <div className="hdr-nav-logo">
                <img src={PlusLogo} alt="" />
              </div>
            </Link>
            <div className="hdr-search-ctr">
              <form className="hdr-search" onSubmit={submitSearch}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search Plus...."
                />
                <button className="search-icon" type="submit">
                  <SearchIcon fontSize="medium" />
                </button>
              </form>
            </div>
            <div className="hdr-user">
              <div className="hdr-user-help">
                <button
                  className="-dropdown"
                  onFocus={() => {
                    setState({
                      ...state,
                      helpDropDownActive: true,
                    });
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setState({
                        ...state,
                        helpDropDownActive: false,
                      });
                    }, 500);
                  }}
                >
                  <Help fontSize="small" />
                  <span>Help</span>
                  {state.helpDropDownActive ? (
                    <ExpandUpIcon />
                  ) : (
                    <ExpandDownIcon />
                  )}
                </button>
                <ul
                  className="-help-list -acc-l"
                  style={
                    state.helpDropDownActive
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Link to="/help">
                    <li className="-help">
                      <i className="lar la-user"></i>
                      Request Item
                    </li>
                  </Link>
                  <Link to="/help">
                    <li className="-help">
                      <i className="lar la-user"></i>
                      How To Order
                    </li>
                  </Link>
                  <Link to="/help">
                    <li className="-help">
                      <i className="las la-shopping-cart"></i>
                      Make Returns
                    </li>
                  </Link>
                  <li className="-help">
                    <button className="-a-btn -lg" style={{ width: "100%" }}>
                      <i className="las la-sign-out-alt"></i>
                      Service Helpline
                    </button>
                  </li>
                </ul>
              </div>
              <div className="hdr-user-account">
                <button
                  className="-dropdown"
                  onFocus={() => {
                    if (user_) {
                      setState({
                        ...state,
                        userDropDownActive: true,
                      });
                    } else {
                      navigate("/user/login");
                    }
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setState({
                        ...state,
                        userDropDownActive: false,
                      });
                    }, 500);
                  }}
                >
                  <User />
                  <span>
                    {user_ ? `${user_.user_name.split(" ")[0]}` : "Account"}
                  </span>
                  {state.userDropDownActive ? (
                    <ExpandUpIcon />
                  ) : (
                    <ExpandDownIcon />
                  )}
                </button>
                <ul
                  className="-help-list -acc-l"
                  style={
                    state.userDropDownActive
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Link to="/user/profile">
                    <li className="-help">
                      <i className="lar la-user"></i>
                      My Profile
                    </li>
                  </Link>
                  <Link to="/cart">
                    <li className="-help">
                      <i className="las la-shopping-cart"></i>
                      My Cart
                    </li>
                  </Link>
                  <Link to="/user/orders">
                    <li className="-help">
                      <i className="las la-gift"></i>
                      My Orders
                    </li>
                  </Link>
                  <a href="/user/edit">
                    <li className="-help">
                      <i className="las la-user-edit"></i>
                      Edit Profile
                    </li>
                  </a>
                  <li className="-help">
                    <button
                      className="-a-btn -lg"
                      style={{ width: "100%" }}
                      onClick={() => {
                        const token_stored = localStorage.getItem("token");
                        if (token_stored) {
                          localStorage.removeItem("token");
                        } else {
                          sessionStorage.removeItem("token");
                        }
                        window.location.replace("/");
                      }}
                    >
                      <i className="las la-sign-out-alt"></i>
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
              <div className="hdr-user-cart">
                <Link to="/cart">
                  <span style={{ position: "relative" }}>
                    <Cart />
                    <span
                      style={{
                        position: "absolute",
                        backgroundColor: "#ffbb00",
                        top: "-7px",
                        color: "#fff",
                        left: "15px",
                        height: "17px",
                        width: "17px",
                        textAlign: "center",
                        fontSize: "14px",
                        borderRadius: "50%",
                      }}
                    >
                      {state.cart_number}
                    </span>
                  </span>
                  <span>Cart</span>
                </Link>
              </div>
            </div>
            <div className="search-i-sm">
              <SearchIcon fontSize="large" />
            </div>
            <div className="user-i-sm">
              <User fontSize="large" />
            </div>
            <div className="cart-i-sm">
              <Cart fontSize="large" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
