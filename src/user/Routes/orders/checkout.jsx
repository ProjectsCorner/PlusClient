import React from "react";

//styles
import "../../Design/home.css";
import "../../Design/checkout.css";

//material
import { QuestionAnswerOutlined } from "@material-ui/icons";

export default function CheckOut() {
  return (
    <>
      <div className="nav">
        <div className="search-nav">
          <div className="logo">
            <img src="https://picsum.photos/50" alt="YAMMIE" id="logo" />
          </div>
          <div className="order-f">
            <b>Process Your Order: </b>
          </div>
          <div className="-account -user focus">
            <span style={{ marginRight: "20px" }}>
              <QuestionAnswerOutlined />
              Help Center
            </span>
            <span>
              <QuestionAnswerOutlined />
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
                    <b>Your Current Address</b>
                  </span>
                  <b className="edit edit-a-b">Edit</b>
                </div>
                <div className="_ca">
                  <b>
                    <div className="_cn _cad _cn">
                      <i className="fas fa-spinner fa-spin"></i>
                    </div>
                  </b>
                  <div className="_cr _cad _1a"></div>
                  <div className="_cz _cad _cmz"></div>
                  <div className="_cz _cad _cmn"></div>
                </div>
                <form className="_ca _dn _ea" style={{ display: "none" }}>
                  <div className="_cad">
                    <h4 style={{ margin: "10px 0px" }}>
                      Add/Change Your Address
                    </h4>
                    <label htmlFor="">Type</label>
                    <br />
                    <select
                      name=""
                      id="type"
                      required
                      className="-is type"
                      style={{ width: "250px" }}
                    >
                      <option value="" hidden>
                        Select Type
                      </option>
                      <option value="Primary">Primary Address</option>
                      <option value="guest">Guest Address</option>
                    </select>
                  </div>
                  <div className="_cad">
                    <label htmlFor="">Location/Residence</label>
                    <br />
                    <select
                      name=""
                      id="location"
                      className="-is ca select"
                      style={{ width: "250px" }}
                    >
                      <option value="" hidden>
                        Select Your Residence
                      </option>
                    </select>
                  </div>
                  <div className="_cad">
                    <label htmlFor="">Your Zone</label>
                    <br />
                    <input
                      placeholder="Zone"
                      type="text"
                      name=""
                      id="zone"
                      className="-is cz"
                      style={{ width: "250px" }}
                      readOnly
                    />
                  </div>
                  <div className="_cad other_dn">
                    <label htmlFor="other-a">Other:</label>
                    <input
                      type="text"
                      name=""
                      id="other"
                      placeholder="(Specify)"
                    />
                  </div>
                  <button className="_ca-btn">Ok</button>
                </form>
              </div>
              <div className="p-order-s-1">
                <div className="s-1-head">
                  <span>
                    <i className="fas fa-check-circle -s-i-2"></i>
                    <b>Delivery Method</b>
                  </span>
                  <span className="-edit-d edit"> Edit </span>
                </div>
                <div
                  className="_ca _dm-r p-order-address deliver"
                  style={{ display: "none" }}
                ></div>
                <form className="p-order-address deliver _ca _dm" id="-df">
                  <b>Select Your Preferred Delivery Method</b>
                  <div className="p-order-name">
                    <input
                      required
                      type="radio"
                      name="d-method"
                      id="-d1"
                      value="Door-Step"
                    />
                    <b className="-d-method">Door Step Delivery</b>
                  </div>
                  <div className="p-order-residence">
                    We Reach At Your Residence.
                  </div>
                  <div className="p-order-residence">
                    Delivered By:
                    <span className="d-fees">Yammie Delivery</span>
                  </div>
                  <div className="p-order-name">
                    <input
                      required
                      type="radio"
                      name="d-method"
                      id="-d2"
                      value="Pick-Up"
                    />
                    <b className="-d-method">Free Pick Up</b>
                  </div>
                  <div className="p-order-residence">
                    Get your items at the Yammie Store
                  </div>
                  <div className="p-order-residence">
                    Location:
                    <span className="d-fees">Next to Yammie SuperMarket</span>
                  </div>
                  <div className="_u">
                    <b>Is your Order Urgent</b>
                    <div className="p-order-name">
                      <input type="checkbox" name="d-u" id="-ug" value="-u" />
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
                <div
                  className="p-order-address payment _ca"
                  style={{ display: "none" }}
                >
                  <div className="p-order-name">
                    <b>Select Your Preferred Payment Method</b>
                  </div>
                  <form id="pay-form" className="_pf">
                    <div className="mm-input -disabled">
                      <input
                        required
                        type="radio"
                        name="payment_method"
                        id="payment_method_mm"
                        value="mm"
                      />
                      <label
                        htmlFor="payment_method"
                        className="-mm-l -disabled"
                      >
                        <b>Mobile Money</b> - MTN (Disabled for a moment...)
                      </label>
                    </div>
                    <div className="-mm-img -disabled">
                      <img src="https://picsum.photos/50" alt="" />
                    </div>
                    <div className="p-order-procedure -disabled">
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
                    <div className="mm-input">
                      <input
                        required
                        type="radio"
                        name="payment_method"
                        id="payment_method"
                        value="cod"
                      />
                      <span className="cd-image">
                        <img src="https://picsum.photos/50" alt="" />
                      </span>
                      <label htmlFor="payment_method">
                        <b>Cash On Delivery.</b>
                      </label>
                    </div>
                    <div className="am-t-p">
                      <div className="sub-total -am">
                        <span>SUB. TOTAL</span>
                        <span>
                          <b>
                            UGX <span id="pay">...</span>
                          </b>
                        </span>
                      </div>
                      <div className="-delivery-fees -am">
                        <span>
                          <b>Delivery Fees</b>
                        </span>
                        <span>
                          UGX <span id="delivery">...</span>
                        </span>
                      </div>
                      <div className="total -am">
                        <span>
                          <b>TOTAL</b>
                        </span>
                        <span>
                          <b>
                            UGX <span id="total">...</span>
                          </b>
                        </span>
                      </div>
                    </div>
                    <button type="submit" className="-btn-s-pyf">
                      FINISH YOUR ORDER
                    </button>
                  </form>
                </div>
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
                <button className="show_order _ca-btn">
                  Show Order Details
                </button>
                <div className="-od-ctr">
                  <div className="items">No items</div>
                  <div className="totals">
                    <div className="sub-total -st">
                      <div className="-st-content">
                        <span>Sub. Total</span>
                        <span className="_total">UGX ...</span>
                      </div>
                    </div>
                    <div className="-st-delivery -st">
                      <div className="-st-content">
                        <span>Total Shipping Fees</span>
                        <span className="_shp">UGX ...</span>
                      </div>
                    </div>
                    <div className="-st-totals -st">
                      <div className="-st-content -o-total">
                        <span>Total</span>
                        <span className="">
                          <span className="_ony-tt">UGX ...</span>
                        </span>
                      </div>
                    </div>
                    <a className="-modify" href="../cart">
                      <button className="_ca-btn -sm">Back To Cart</button>
                    </a>
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
