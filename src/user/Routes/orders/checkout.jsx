import React, { useEffect, useState } from "react";
import user from "../../../app.config";
import { Base64 } from "js-base64";
import { Link, useNavigate } from "react-router-dom";

/**
 * Components
 */

import FormsApi from "../../../api/api";

//styles
import "../../Design/home.css";
import "../../Design/checkout.css";

//material
import { QuestionAnswerOutlined, Phone } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import { Autocomplete, Alert as MuiAlert } from "@material-ui/lab";

/**
 *
 * assests
 */
import LOGO from "../../../assets/logos/plus_logo_color.png";
import MM from "../../../assets/mm.png";

export default function CheckOut() {
  /**
   * Hooks
   */
  const navigate = useNavigate();
  const [state, setState] = useState({
    show_order_details: true,
    show_payment: false,
    total_amount: 0,
    total_shipping_fee: 0,
    order_details: {},
  });

  const setTotals = (totals) => {
    setState({
      ...state,
      total_amount: totals.total_amount,
      total_shipping_fee: totals.total_shipping_fee,
    });
  };

  const cart = localStorage.getItem("cart_id")
    ? JSON.parse(Base64.decode(localStorage.getItem("cart_id")))
    : [];

  useEffect(() => {
    (async () => {})();

    if (!user) {
      navigate("/user/login");
    }
    if (cart.length === 0) {
      navigate(-1);
    }
  }, []);

  const make_order = async (e) => {
    e.preventDefault();
    setState({
      ...state,
      making_order: true,
    });
    let api = new FormsApi();
    let res = await api.post("/orders/new", {
      ...state.order_details,
      items_ordered: JSON.stringify(cart),
      order_date: Date.now(),
      user_id: user.id,
    });

    if (res !== "Error" && res.status !== false) {
      setTimeout(() => {
        setState({ ...state, making_order: false });
        localStorage.removeItem("cart_id");
        if (state.order_details.payment_method === "cod") {
          navigate(`/order/finish/${res.result.order_number}`);
        } else {
          navigate(`/order/payment/${res.result.order_number}`);
        }
      }, 2000);
    }
  };

  return (
    <>
      <div className="nav">
        <div className="search-nav">
          <div className="logo">
            <img src={LOGO} alt="PLUSSHOPPING" height="50px" />
          </div>
          <div className="order-f">
            <b>Process Your Order: </b>
          </div>
          <div className="-account -user focus">
            <span
              style={{
                marginRight: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <QuestionAnswerOutlined />
              Help Center
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <Phone />
              Call Us
            </span>
          </div>
        </div>
      </div>
      <div className="p-order-m-ctr">
        <div className="p-order-ctr">
          <h3 className="current-s">Order CheckOut</h3>
          <div className="p-order-progress">
            <div className="p-order-progress-b"></div>
          </div>
          <div className="-order-ctr">
            <div className="-steps">
              <div className="p-order-s-1">
                <div className="s-1-head">
                  <span>
                    <i className="fas fa-check-circle -s-i-1"></i>
                    <b>Your Personal Info.</b>
                  </span>
                  <Link to="/user/edit">
                    <b className="edit edit-a-b">Edit</b>
                  </Link>
                </div>
                <div className="user-data-ctr">
                  <div>
                    <div>Contact Information</div>
                    <div>
                      <div>Phone Number</div>
                      <div>{user.user_phone}</div>
                    </div>
                    <div>
                      <div>Email</div>
                      <div>{user.user_email}</div>
                    </div>
                  </div>
                  <div>
                    <div>Your basic Info</div>
                    <div>
                      <div>Your name</div>
                      <div>{user.user_name}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-order-s-1">
                <div className="s-1-head">
                  <span>
                    <i className="fas fa-check-circle -s-i-1"></i>
                    <b>Pick up Station</b>
                  </span>
                </div>
                <div
                  className="_ca _dm-r p-order-address deliver"
                  style={{ display: "none" }}
                ></div>
                <form
                  className="p-order-address deliver _ca _dm"
                  id="-df"
                  onSubmit={(e) => {
                    e.preventDefault();
                    let form_data = new FormData(e.target);
                    let order_details = {};
                    form_data.forEach((el, i) => {
                      order_details[i] = el;
                    });
                    setState({
                      ...state,
                      order_details,
                      show_payment: true,
                    });
                  }}
                >
                  <b>Location &amp; Preferred Pick Up Station</b>
                  <div>
                    <div style={{ margin: 20 }}>
                      <Autocomplete
                        filterSelectedOptions
                        style={{
                          width: "70%",
                        }}
                        disablePortal
                        id="tags-standard"
                        options={["Lira University"]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select Your Location"
                            variant="outlined"
                            color="secondary"
                            name="location"
                            required
                          />
                        )}
                      />
                    </div>
                    <div style={{ margin: 20 }}>
                      <Autocomplete
                        filterSelectedOptions
                        style={{
                          width: "70%",
                        }}
                        disablePortal
                        id="tags-standard"
                        options={[
                          "Jackie's Salon (next to Bako Hostel)",
                          "Amazing Grace Canteen",
                        ]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select A Pick up Station"
                            variant="outlined"
                            color="secondary"
                            name="pick_station"
                            required
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="_u">
                    <b>Is your Order Urgent</b>
                    <div className="p-order-name">
                      <input type="checkbox" name="urgent" value="true" />
                      <span className="-d-u">Yes</span>
                    </div>
                  </div>
                  <button className="_ca-btn" type="submit">
                    Proceed
                  </button>
                </form>
              </div>
              <div className="p-order-s-1">
                <div className="s-1-head">
                  <span>
                    <i className="fas fa-check-circle -s-i-3"></i>
                    <b>Payment Details</b>
                  </span>
                </div>
                {state.show_payment && (
                  <div className="p-order-address payment _ca">
                    <div className="p-order-name">
                      <b>Select Your Preferred Payment Method</b>
                    </div>
                    <form id="pay-form" className="_pf" onSubmit={make_order}>
                      <div
                        className="mm-input"
                        style={{ opacity: "0.5", pointerEvents: "none" }}
                      >
                        <input
                          required
                          type="radio"
                          name="payment_method"
                          id="payment_method_mm"
                          value="mm"
                          onChange={() => {
                            setState({
                              ...state,
                              order_details: {
                                ...state.order_details,
                                payment_method: "mm",
                              },
                            });
                          }}
                        />
                        <label htmlFor="payment_method" className="-mm-l">
                          <b>Mobile Money </b>
                          <small>Disabled for a moment</small>
                        </label>
                      </div>

                      <div
                        className="p-order-procedure"
                        style={{ opacity: "0.5", pointerEvents: "none" }}
                      >
                        <b>Mobile Money Payment Procedure:</b>
                        <ol>
                          <li>Click 'Finish Your Order'</li>
                          <li>Fill In Details On The Next Page</li>
                          <li>Click 'Pay Now'</li>
                          <li>Check your phone for payment request</li>
                          <li>Enter your PIN And Approve</li>
                          <li>
                            You will receive SMS/Email confirming a successful
                            payment.
                          </li>
                        </ol>
                      </div>
                      <div
                        className="mm-input"
                        style={
                          state.total_amount
                            ? {}
                            : { opacity: "0.5", pointerEvents: "none" }
                        }
                      >
                        <input
                          required
                          type="radio"
                          name="payment_method"
                          id="payment_method"
                          value="cod"
                          onChange={() => {
                            setState({
                              ...state,
                              order_details: {
                                ...state.order_details,
                                payment_method: "cod",
                              },
                            });
                          }}
                        />
                        <span className="cd-image"></span>
                        <label htmlFor="payment_method">
                          <b>Cash On Delivery </b>
                        </label>
                        {/* {state.total_amount > 20000 && (
                          <small>...Not available, Amount &gt; 20,000...</small>
                        )} */}
                      </div>
                      <div className="am-t-p">
                        <div className="sub-total -am">
                          <span>SUB. TOTAL</span>
                          <span>
                            <b>
                              <span id="pay">
                                {`UGX ${
                                  state.total_amount && state.total_shipping_fee
                                    ? state.total_amount
                                    : "..."
                                }`}
                              </span>
                            </b>
                          </span>
                        </div>
                        <div className="-delivery-fees -am">
                          <span>
                            <b>Delivery Fees</b>
                          </span>
                          <span>
                            <span id="delivery">
                              {`UGX ${
                                state.total_amount && state.total_shipping_fee
                                  ? state.total_shipping_fee
                                  : "..."
                              }`}
                            </span>
                          </span>
                        </div>

                        <div className="total -am">
                          <span>
                            <b>TOTAL</b>
                          </span>
                          <span>
                            <b>
                              <span id="total">
                                {`UGX ${
                                  state.total_amount && state.total_shipping_fee
                                    ? state.total_shipping_fee +
                                      state.total_amount
                                    : "..."
                                }`}
                              </span>
                            </b>
                          </span>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="-btn-s-pyf"
                        style={
                          state.making_order
                            ? { opacity: "0.4", pointerEvents: "none" }
                            : {}
                        }
                      >
                        {state.making_order
                          ? "Processing Order..."
                          : "Finish Your Order"}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div className="-order">
              <div className="p-order-s-1">
                <div className="s-1-head">
                  <span>
                    <i className="fas fa-box -s-i-1"></i>
                    <b>Your Order Details</b>
                  </span>
                </div>
                <button
                  className="show_order _ca-btn"
                  onClick={() => {
                    setState({
                      ...state,
                      show_order_details: !state.show_order_details,
                    });
                  }}
                >
                  {state.show_order_details
                    ? "Hide Order Details"
                    : "Show Order Details"}
                </button>

                <div
                  className="-od-ctr"
                  style={{
                    display: state.show_order_details ? "block" : "none",
                  }}
                >
                  <div className="items">
                    {cart.length === 0
                      ? "No items"
                      : cart.map((el, i) => (
                          <CartItem
                            product={el}
                            key={i}
                            setTotals={setTotals}
                          />
                        ))}
                  </div>
                  <div className="totals">
                    <div className="sub-total -st">
                      <div className="-st-content">
                        <span>Sub. Total</span>
                        <span className="_total">
                          {`UGX ${
                            state.total_amount && state.total_shipping_fee
                              ? state.total_amount
                              : "..."
                          }`}
                        </span>
                      </div>
                    </div>
                    <div className="-st-delivery -st">
                      <div className="-st-content">
                        <span></span>
                        <span className="_shp"></span>
                      </div>
                    </div>
                    <div className="-st-totals -st">
                      <div className="-st-content -o-total">
                        <span>Total</span>
                        <span className="">
                          <span className="_ony-tt">
                            {`UGX ${state.total_amount}`}
                          </span>
                        </span>
                      </div>
                    </div>
                    <Link className="-modify" to="/cart">
                      <button className="_ca-btn -sm">Back To Cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let totals = { total_shipping_fee: 0, total_amount: 0 };

const CartItem = ({ product, setTotals }) => {
  const [state, setState] = useState({ product: {} });
  useEffect(() => {
    (async () => {
      let pdt = await new FormsApi().get(`/product/${product.product}`);
      if (pdt !== "Error" && pdt.status !== false) {
        setState({ ...state, product: pdt.result.product });
        totals.total_amount +=
          parseInt(pdt.result.product.product_price) * parseInt(product.qty) ||
          0;
        totals.total_shipping_fee += parseInt(
          pdt.result.product.product_shipping_fee
        );
        setTotals(totals);
      }
    })();
    return () => {
      setState({ product: {} });
    };
  }, []);

  let numberFormat = new Intl.NumberFormat();

  return (
    <div className="_check-item">
      <div className="img">
        <div className="">
          <img
            src={
              state.product.product_images
                ? JSON.parse(state.product.product_images)[0]
                : "https://picsum.photos/200"
            }
            alt={state.product.product_name || "Plus Product"}
            width="100%"
            height="100%"
            style={{ borderRadius: "5px" }}
          />
        </div>
      </div>
      <div className="-item">
        <div className="name" style={{ overflow: "hidden" }}>
          {state.product.product_name || "..."}
        </div>
        <div className="price _usp">
          Price: UGX
          <span className="item_price">
            {` ${numberFormat.format(
              parseInt(state.product.product_price) * parseInt(product.qty) || 0
            )}`}
          </span>
        </div>
        <div className="qty _usq">Quantity: {product.qty}</div>
      </div>
    </div>
  );
};
