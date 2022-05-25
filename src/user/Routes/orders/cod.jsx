import React, { useEffect, useState } from "react";
import user from "../../../app.config";
import { Base64 } from "js-base64";
import { Link, useNavigate } from "react-router-dom";

/**
 * Components
 */

import FormsApi from "../../../api/api";

//styles
import "../../Design/checkout.css";
import "../../Design/order_finish.css";

//material
import { QuestionAnswerOutlined, Phone } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import { Autocomplete, Alert as MuiAlert } from "@material-ui/lab";

/**
 *
 * assests
 */
import LOGO from "../../../assets/logos/plus_logo_color.png";
import ThanksImage from "../../../assets/thanks.svg";

export default function CheckOut() {
  /**
   * Hooks
   */
  const navigate = useNavigate();
  const [state, setState] = useState({});

  return (
    <>
      <div className="nav">
        <div className="search-nav">
          <div className="logo">
            <img src={LOGO} alt="PLUSSHOPPING" height="50px" />
          </div>
          <div className="order-f">
            <b>Thanks For Ordering On Plus</b>
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
      <div className="-f-order -m">
        <div className="f-order-ctr">
          <div className="-f-order-l">
            <div className="-img">
              <img src={ThanksImage} alt="" width="60%" height="60%" />
            </div>
            <div className="">
              Thanks for shopping with yammie.
              <br />
              Your order Number is <span className="order"></span>
              <br />
              You will receive an EMAIL or SMS
              <br />
              containing the delivery information of your order.
            </div>

            <button
              className="-pay"
              style={{ margin: "20px 0px", width: "100px !important" }}
            >
              Return to Home Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
