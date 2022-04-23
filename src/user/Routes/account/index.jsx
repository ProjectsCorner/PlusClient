/**
 *
 * imports for react  and react-dom
 */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

/**
 *
 *
 * imports for defined components
 */
import MainHeader from "../../../Components/MainHeader";
import MainFooter from "../../../Components/MainFooter";
import Products from "../../../Components/products_scroll";

/**
 *
 *
 * imports for styling and other designs
 */
import "../../Design/user.css";

/**
 *
 * material ui design...
 */
import { Person, ChevronRight } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

export default () => {
  const params = useParams();

  // const [state, setState] = useState({ page: "" });

  // useEffect(() => {
  //   setState({ ...state, page: params.page });
  // }, []);

  return (
    <>
      <MainHeader />
      <main>
        <section className="main-user-ctr">
          <div className="-b-x -br">
            <div>
              <Link
                to="/user/profile"
                className={
                  params.page === "profile"
                    ? "user-link -b-x active"
                    : "user-link"
                }
              >
                <Person />
                <span> My Profile</span>
              </Link>
              <Link
                to="/user/orders"
                className={
                  params.page === "orders"
                    ? "user-link -b-x active"
                    : "user-link"
                }
              >
                <Person />
                <span> My Orders</span>
              </Link>
              <Link
                to="/user/pending-orders"
                className={
                  params.page === "pending-orders"
                    ? "user-link -b-x active"
                    : "user-link"
                }
              >
                <Person />
                <span> Pending Orders </span>
              </Link>
              <Link
                to="/user/edit"
                className={
                  params.page === "edit" ? "user-link -b-x active" : "user-link"
                }
              >
                <Person />
                <span> Edit Profile</span>
              </Link>
              <span className="user-link -b-x">
                <span>Log Out</span>
                <ChevronRight />
              </span>
            </div>
          </div>
          <div className="-b-x -br">
            <div>
              {params.page === "profile"
                ? "My Profile"
                : params.page === "orders"
                ? "My Orders"
                : params.page === "pending-orders"
                ? "Orders Pending"
                : params.page === "edit"
                ? "Update Profile"
                : "Content Header"}
            </div>
            <div className="user-content-ctr">
              {params.page === "profile" ? (
                <Profile />
              ) : params.page === "orders" ? (
                <Orders />
              ) : params.page === "pending-orders" ? (
                <PendingOrders />
              ) : params.page === "edit" ? (
                <EditProfile />
              ) : (
                <div>....</div>
              )}
            </div>
          </div>
        </section>
        <section className="products-scroll-ctr">
          <Products />
        </section>
        <section className="products-scroll-ctr">
          <Products />
        </section>
      </main>
      <MainFooter />
    </>
  );
};

const Profile = () => {
  return (
    <div className="user-data-ctr">
      <div>
        <div>Your basic Info</div>
        <div>
          <div>Your name</div>
          <div>Xamuel Joshua</div>
        </div>
        <div>
          <div>Date of birth</div>
          <div>not indicated</div>
        </div>
      </div>
      <div>
        <div>Contact</div>
        <div>
          <div>Phone Number</div>
          <div>Xamuel Joshua</div>
        </div>
        <div>
          <div>Email</div>
          <div>not indicated</div>
        </div>
      </div>
    </div>
  );
};

const Orders = () => {
  return (
    <div className="user-data-ctr">
      <div>
        <div>#OrderNo</div>
        <div>
          <div>Date</div>
          <div>Xamuel Joshua</div>
        </div>
        <div>
          <div>Products Ordered</div>
          <div>not indicated</div>
        </div>
        <div>
          <div>Total Order Amount</div>
          <div>UGX 50,000</div>
        </div>
      </div>
      <div>
        <div>#OrderNo</div>
        <div>
          <div>Date</div>
          <div>Xamuel Joshua</div>
        </div>
        <div>
          <div>Products Ordered</div>
          <div>not indicated</div>
        </div>
        <div>
          <div>Total Order Amount</div>
          <div>UGX 50,000</div>
        </div>
      </div>
      <div>
        <div>#OrderNo</div>
        <div>
          <div>Date</div>
          <div>Xamuel Joshua</div>
        </div>
        <div>
          <div>Products Ordered</div>
          <div>not indicated</div>
        </div>
        <div>
          <div>Total Order Amount</div>
          <div>UGX 50,000</div>
        </div>
      </div>
    </div>
  );
};
const PendingOrders = () => {
  return (
    <div className="user-data-ctr">
      <div>
        <div>#OrderNo</div>
        <div>
          <div>Date</div>
          <div>Xamuel Joshua</div>
        </div>
        <div>
          <div>Products Ordered</div>
          <div>not indicated</div>
        </div>
        <div>
          <div>Total Order Amount</div>
          <div>UGX 50,000</div>
        </div>
        <div>
          <button className="plus-btn -b-x">Cancel Order</button>
        </div>
      </div>
      <div>
        <div>#OrderNo</div>
        <div>
          <div>Date</div>
          <div>Xamuel Joshua</div>
        </div>
        <div>
          <div>Products Ordered</div>
          <div>not indicated</div>
        </div>
        <div>
          <div>Total Order Amount</div>
          <div>UGX 50,000</div>
        </div>
        <div>
          <button className="plus-btn -b-x">Cancel Order</button>
        </div>
      </div>
      <div>
        <div>#OrderNo</div>
        <div>
          <div>Date</div>
          <div>Xamuel Joshua</div>
        </div>
        <div>
          <div>Products Ordered</div>
          <div>not indicated</div>
        </div>
        <div>
          <div>Total Order Amount</div>
          <div>UGX 50,000</div>
        </div>
        <div>
          <button className="plus-btn -b-x">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

const EditProfile = () => {
  return (
    <div className="user-data-ctr">
      <div>
        <div>Personal Info</div>
        <div>
          <TextField
            label="Name"
            name="name"
            color="primary"
            variant="outlined"
            style={{ width: "100%", margin: "10px 0px" }}
          />
        </div>
        <div>
          <TextField
            label="Date Of Birth(Just Optional)"
            name="dob"
            color="primary"
            variant="outlined"
            style={{ width: "100%", margin: "10px 0px" }}
          />
        </div>
        <div>
          <button className="plus-btn -b-x">Save</button>
        </div>
      </div>
      <div>
        <div>Contact Info</div>
        <div>
          <TextField
            label="Phone Number"
            name="phone_number"
            color="primary"
            variant="outlined"
            style={{ width: "100%", margin: "10px 0px" }}
          />
        </div>
        <div>
          <TextField
            label="Email Address"
            name="email"
            color="primary"
            variant="outlined"
            style={{ width: "100%", margin: "10px 0px" }}
          />
        </div>
        <div>
          <button className="plus-btn -b-x">Save</button>
        </div>
      </div>
    </div>
  );
};
