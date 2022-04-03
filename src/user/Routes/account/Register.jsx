import React, { useState, useEffect } from "react";
import { Base64 } from "js-base64";
import { Link, useNavigate } from "react-router-dom";

//components
import MainHeader from "../../../Components/MainHeader";
import MainFooter from "../../../Components/MainFooter";

//styles
import "../../Design/home.css";
import "../../Design/register.css";

//assets
import LOGO from "../../../assets/logos/plus_logo_black.png";

//material
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Button,
} from "@material-ui/core";

//api
import FormsApi from "../../../api/api";

export default function Register() {
  //we gonna use useReducer here 😋😋😋 with validation of phone number
  const [apiFeedBackError, setApiFeedBackError] = useState(false);
  const [apiPhoneUsed, setApiPhoneUsed] = useState(false);
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const [submit, setSubmit] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
  }, []);

  const form_submit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    const fd = new FormData(e.target);
    let _fcontent = {};
    fd.forEach((value, key) => {
      _fcontent[key] = value;
    });
    let api = new FormsApi();
    let res = await api.post("/seller/new", _fcontent);
    if (res === "Error") {
      setApiFeedBackError(true);
      setSubmit(false);
      return;
    }
    if (res.status === false) {
      if (res.data === "phone") {
        setApiPhoneUsed(true);
        setSubmit(false);
        return;
      } else {
        setApiFeedBackError(true);
        setSubmit(false);
        return;
      }
    } else {
      const data = Base64.encode(
        JSON.stringify({ ...res.user, role: res.role })
      );
      sessionStorage.setItem("token", data);
      setSubmit(false);
      window.location.href = "/";
    }
  };

  return (
    <>
      <MainHeader />
      <main>
        <div className="register-ctr">
          <div>
            Create Your Plus Account
            <div className="register-logo-ctr">
              <img
                src={LOGO}
                alt="SELLONPLUS"
                style={{ height: "40px", width: "100px" }}
              />
            </div>
          </div>
          <div></div>
          <div>Your Plus Account will help us track your orders</div>
          <div>
            <div>
              <div style={{ fontWeight: "bold", margin: "5px 0px" }}>
                Dear User,
              </div>
              <p style={{ margin: "10px 10px 10px 0px" }}>
                We are happy to see you registering with us.
              </p>
              <p style={{ margin: "10px 10px 10px 0px" }}>
                We promise to add value to your shopping, most importantly
                connecting you to the best sellers
              </p>
              <p>
                Thanks for the love
                <br />
                <i style={{ fontSize: "13.5px", color: "#3F51B5" }}>
                  Sam - Plus Technician
                </i>
              </p>
            </div>
            <div>
              <form onSubmit={form_submit}>
                <div>We're Happy your here</div>
                <div>
                  <hr />
                  <span>Welcome</span>
                  <hr />
                </div>
                <div>
                  <TextField
                    label="Your Full Name"
                    name="user_name"
                    helperText={`Like: "Atim Maureen"`}
                    variant="outlined"
                    color="primary"
                    style={{ width: "100%", margin: "10px 0px" }}
                  />
                </div>
                <div className="register-inputs-ctr-divided">
                  <TextField
                    label="Phone Number"
                    name="phone_number"
                    variant="outlined"
                    color="primary"
                    style={{ width: "48%" }}
                  />
                  <TextField
                    label="Email Address"
                    name="email_address"
                    variant="outlined"
                    color="primary"
                    style={{ width: "48%" }}
                  />
                </div>
                <div className="register-inputs-ctr-half-width">
                  <TextField
                    label="Date of Birth(Optional)"
                    type="date"
                    name="dob"
                    helperText="We would like to celebrate a birthday with you, if you dont mind"
                    variant="outlined"
                    color="primary"
                    style={{ width: "100%", margin: "10px 0px" }}
                  />
                </div>
                <div className="register-inputs-ctr-divided">
                  <TextField
                    label="Set a Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    color="primary"
                    style={{ width: "48%" }}
                  />
                  <TextField
                    label="Repeat Password"
                    name="repeat_password"
                    variant="outlined"
                    color="primary"
                    style={{ width: "48%" }}
                    helperText="Making sure, you dont go wrong"
                  />
                </div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          name="terms_and_conditions"
                          checked={termsCheckBox}
                          onChange={() => {
                            setTermsCheckBox(!termsCheckBox);
                          }}
                        />
                      }
                      label="I agree to the Terms and Conditions of using Plus"
                    />
                  </FormGroup>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    type="submit"
                    color={apiFeedBackError ? "secondary" : "primary"}
                    style={{ width: "100%", margin: "15px 0px" }}
                    disabled={!termsCheckBox}
                  >
                    <CircularProgress
                      size={15}
                      thickness={10}
                      style={{
                        display: submit ? "inline-block" : "none",
                        marginRight: "20px",
                      }}
                    />
                    {submit
                      ? "Please Wait..."
                      : apiFeedBackError
                      ? "Something Went Wrong, Try again"
                      : "Submit"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </>
  );
}
